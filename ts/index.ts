import * as fs from "fs/promises";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function ask(q: string) {
  return new Promise<string>((resolve) => rl.question(q, resolve));
}

// ===================
// Arquivos
// ===================
const ARQ = {
  clientes: "clientes.csv",
  produtos: "produtos.csv",
  pedidos: "pedidos.csv",
  historico: "historico.csv",
};
const CAB = {
  clientes: "id,nome,telefone\n",
  produtos: "id,nome,preco\n",
  pedidos: "id,idCliente,itens,total,status,data\n",
  historico: "id,idCliente,itens,total,status,data\n",
};

// ===================
// Funções utilitárias
// ===================
async function inicializar() {
  for (const [arq, cab] of Object.entries(CAB)) {
    try {
      await fs.access(ARQ[arq as keyof typeof ARQ]);
    } catch {
      await fs.writeFile(ARQ[arq as keyof typeof ARQ], cab);
    }
  }
}
async function lerCsv(path: string) {
  const dados = await fs.readFile(path, "utf-8");
  return dados.split("\n").slice(1).filter(Boolean).map(l => l.split(","));
}
async function adicionarLinha(path: string, linha: string) {
  await fs.appendFile(path, linha);
}
function agoraISO() {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}
async function getClienteNome(id: number) {
  const clientes = await lerCsv(ARQ.clientes);
  const c = clientes.find(l => Number(l[0]) === id);
  return c ? c[1] : "Desconhecido";
}

// ===================
// Clientes
// ===================
async function cadastrarCliente() {
  const clientes = await lerCsv(ARQ.clientes);
  const id = clientes.length + 1;
  const nome = await ask("Nome: ");
  const telefone = await ask("Telefone: ");
  await adicionarLinha(ARQ.clientes, `${id},${nome},${telefone}\n`);
  console.log("✅ Cliente cadastrado!");
}
async function listarClientes() {
  const clientes = await lerCsv(ARQ.clientes);
  console.log("\n📋 Clientes:");
  clientes.forEach(c => console.log(`ID: ${c[0]} | Nome: ${c[1]} | Tel: ${c[2]}`));
}
async function atualizarCliente() {
  const clientes = await lerCsv(ARQ.clientes);
  const id = Number(await ask("ID do cliente: "));
  const idx = clientes.findIndex(c => Number(c[0]) === id);
  if (idx === -1) return console.log("❌ Cliente não encontrado.");
  const nome = await ask("Novo nome: ");
  const tel = await ask("Novo telefone: ");
  clientes[idx] = [String(id), nome, tel];
  await fs.writeFile(ARQ.clientes, CAB.clientes + clientes.map(c => c.join(",")).join("\n") + "\n");
  console.log("✅ Cliente atualizado!");
}
async function excluirCliente() {
  const clientes = await lerCsv(ARQ.clientes);
  const id = Number(await ask("ID do cliente: "));
  const novos = clientes.filter(c => Number(c[0]) !== id);
  await fs.writeFile(ARQ.clientes, CAB.clientes + novos.map(c => c.join(",")).join("\n") + "\n");
  console.log("✅ Cliente excluído!");
}

// ===================
// Produtos
// ===================
async function cadastrarProduto() {
  const produtos = await lerCsv(ARQ.produtos);
  const id = produtos.length + 1;
  const nome = await ask("Nome do produto: ");
  const preco = await ask("Preço: ");
  await adicionarLinha(ARQ.produtos, `${id},${nome},${preco}\n`);
  console.log("✅ Produto cadastrado!");
}
async function listarProdutos() {
  const produtos = await lerCsv(ARQ.produtos);
  console.log("\n📦 Produtos:");
  produtos.forEach(p => console.log(`ID: ${p[0]} | ${p[1]} | R$ ${p[2]}`));
}
async function atualizarProduto() {
  const produtos = await lerCsv(ARQ.produtos);
  const id = Number(await ask("ID do produto: "));
  const idx = produtos.findIndex(p => Number(p[0]) === id);
  if (idx === -1) return console.log("❌ Produto não encontrado.");
  const nome = await ask("Novo nome: ");
  const preco = await ask("Novo preço: ");
  produtos[idx] = [String(id), nome, preco];
  await fs.writeFile(ARQ.produtos, CAB.produtos + produtos.map(p => p.join(",")).join("\n") + "\n");
  console.log("✅ Produto atualizado!");
}
async function excluirProduto() {
  const produtos = await lerCsv(ARQ.produtos);
  const id = Number(await ask("ID do produto: "));
  const novos = produtos.filter(p => Number(p[0]) !== id);
  await fs.writeFile(ARQ.produtos, CAB.produtos + novos.map(p => p.join(",")).join("\n") + "\n");
  console.log("✅ Produto excluído!");
}

// ===================
// Pedidos
// ===================
async function registrarPedido() {
  const pedidos = await lerCsv(ARQ.pedidos);
  const id = pedidos.length + 1;
  await listarClientes();
  const idCliente = Number(await ask("ID do cliente: "));
  await listarProdutos();

  let itens: string[] = [];
  let total = 0;
  while (true) {
    const idProd = Number(await ask("ID do produto (0 para finalizar): "));
    if (idProd === 0) break;
    const qtd = Number(await ask("Quantidade: "));
    const produtos = await lerCsv(ARQ.produtos);
    const prod = produtos.find(p => Number(p[0]) === idProd);
    if (!prod) {
      console.log("❌ Produto não encontrado.");
      continue;
    }
    itens.push(`${prod[1]}(x${qtd})`);
    total += Number(prod[2]) * qtd;
  }

  const data = agoraISO();
  const pedido = [String(id), String(idCliente), itens.join(";"), String(total.toFixed(2)), "ABERTO", data];
  await adicionarLinha(ARQ.pedidos, pedido.join(",") + "\n");

  console.log("\n✅ Pedido registrado!");
  console.log(`Cliente ID ${idCliente} | Itens: ${pedido[2]} | Total: R$ ${pedido[3]}`);
}
async function listarPedidos() {
  const pedidos = await lerCsv(ARQ.pedidos);
  console.log("\n📋 Pedidos em aberto:");
  for (const p of pedidos) {
    const nomeCliente = await getClienteNome(Number(p[1]));
    console.log(`ID: ${p[0]} | Cliente: ${nomeCliente} (${p[1]}) | Itens: ${p[2]} | Total: R$ ${p[3]} | Criado em: ${p[5]}`);
  }
}
async function finalizarPedido() {
  const pedidos = await lerCsv(ARQ.pedidos);
  const id = Number(await ask("ID do pedido: "));
  const idx = pedidos.findIndex(p => Number(p[0]) === id);
  if (idx === -1) return console.log("❌ Pedido não encontrado.");
  const pedido = pedidos[idx];
  pedido[4] = "ENTREGUE";
  pedido[5] = agoraISO();

  await fs.writeFile(ARQ.pedidos, CAB.pedidos + pedidos.filter((_, i) => i !== idx).map(l => l.join(",")).join("\n") + "\n");
  await adicionarLinha(ARQ.historico, pedido.join(",") + "\n");

  const nomeCliente = await getClienteNome(Number(pedido[1]));
  console.log("\n📦 Pedido Finalizado!");
  console.log(`ID: ${pedido[0]} | Cliente: ${nomeCliente} (${pedido[1]}) | Itens: ${pedido[2]} | Total: R$ ${pedido[3]} | Fechado em: ${pedido[5]}`);

  await listarPedidos();
}

// ===================
// Relatórios
// ===================
async function relatorioDia() {
  const historico = await lerCsv(ARQ.historico);
  const hoje = new Date().toISOString().slice(0, 10);
  const pedidosHoje = historico.filter(p => p[5].startsWith(hoje));
  console.log(`\n📊 Relatório do dia ${hoje}`);
  for (const p of pedidosHoje) {
    const nomeCliente = await getClienteNome(Number(p[1]));
    console.log(`Pedido ${p[0]} | Cliente: ${nomeCliente} (${p[1]}) | Total R$ ${p[3]} | Fechado em: ${p[5]}`);
  }
}
async function relatorioMes() {
  const historico = await lerCsv(ARQ.historico);
  const mes = new Date().toISOString().slice(0, 7);
  const pedidosMes = historico.filter(p => p[5].startsWith(mes));
  console.log(`\n📊 Relatório do mês ${mes}`);
  for (const p of pedidosMes) {
    const nomeCliente = await getClienteNome(Number(p[1]));
    console.log(`Pedido ${p[0]} | Cliente: ${nomeCliente} (${p[1]}) | Total R$ ${p[3]} | Fechado em: ${p[5]}`);
  }
}
async function relatorioPorPeriodo() {
  const historico = await lerCsv(ARQ.historico);
  const inicio = await ask("Data inicial (AAAA-MM-DD): ");
  const fim = await ask("Data final (AAAA-MM-DD): ");
  const pedidos = historico.filter(p => {
    const data = p[5].slice(0, 10);
    return data >= inicio && data <= fim;
  });
  console.log(`\n📊 Relatório de ${inicio} até ${fim}`);
  for (const p of pedidos) {
    const nomeCliente = await getClienteNome(Number(p[1]));
    console.log(`Pedido ${p[0]} | Cliente: ${nomeCliente} (${p[1]}) | Total R$ ${p[3]} | Fechado em: ${p[5]}`);
  }
}
async function relatorioVendasPorCliente() {
  const historico = await lerCsv(ARQ.historico);
  const idCliente = Number(await ask("ID do cliente: "));
  const pedidos = historico.filter(p => Number(p[1]) === idCliente);
  if (pedidos.length === 0) return console.log("❌ Nenhuma venda encontrada.");
  const nomeCliente = await getClienteNome(idCliente);
  console.log(`\n📊 Vendas do Cliente ID ${idCliente} | Nome: ${nomeCliente}`);
  pedidos.forEach(p => console.log(`Pedido ${p[0]} | Itens: ${p[2]} | Total R$ ${p[3]} | Fechado em: ${p[5]}`));
}
async function relatorioProdutosMaisVendidos() {
  const historico = await lerCsv(ARQ.historico);
  const contagem: Record<string, number> = {};
  historico.forEach(p => {
    p[2].split(";").forEach(item => {
      const [nome, qtd] = item.split("(x");
      const quantidade = Number(qtd.replace(")", ""));
      contagem[nome.trim()] = (contagem[nome.trim()] || 0) + quantidade;
    });
  });
  const ranking = Object.entries(contagem).sort((a, b) => b[1] - a[1]);
  console.log("\n🏆 Produtos mais vendidos:");
  ranking.forEach(([nome, qtd]) => console.log(`${nome} → ${qtd} unidades`));
}
async function relatorioTotalVendas() {
  const historico = await lerCsv(ARQ.historico);
  const total = historico.reduce((soma, p) => soma + Number(p[3]), 0);
  console.log(`\n💰 Total de Vendas: R$ ${total.toFixed(2)}`);
}

// ===================
// Menus
// ===================
async function menuClientes() {
  while (true) {
    console.log("\n--- CLIENTES ---");
    console.log("1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar");
    const op = await ask("> ");
    if (op === "1") await cadastrarCliente();
    else if (op === "2") await listarClientes();
    else if (op === "3") await atualizarCliente();
    else if (op === "4") await excluirCliente();
    else if (op === "0") break;
  }
}
async function menuProdutos() {
  while (true) {
    console.log("\n--- PRODUTOS ---");
    console.log("1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar");
    const op = await ask("> ");
    if (op === "1") await cadastrarProduto();
    else if (op === "2") await listarProdutos();
    else if (op === "3") await atualizarProduto();
    else if (op === "4") await excluirProduto();
    else if (op === "0") break;
  }
}
async function menuPedidos() {
  while (true) {
    console.log("\n--- PEDIDOS ---");
    console.log("1. Novo | 2. Listar | 3. Finalizar | 0. Voltar");
    const op = await ask("> ");
    if (op === "1") await registrarPedido();
    else if (op === "2") await listarPedidos();
    else if (op === "3") await finalizarPedido();
    else if (op === "0") break;
  }
}
async function menuRelatorios() {
  while (true) {
    console.log("\n--- RELATÓRIOS ---");
    console.log("1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar");
    const op = await ask("> ");
    if (op === "1") await relatorioDia();
    else if (op === "2") await relatorioMes();
    else if (op === "3") await relatorioPorPeriodo();
    else if (op === "4") await relatorioVendasPorCliente();
    else if (op === "5") await relatorioProdutosMaisVendidos();
    else if (op === "6") await relatorioTotalVendas();
    else if (op === "0") break;
  }
}

// ===================
// Principal
// ===================
async function main() {
  await inicializar();
  while (true) {
    console.log("\n=== SISTEMA PIZZARIA ===");
    console.log("1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair");
    const op = await ask("> ");
    if (op === "1") await menuClientes();
    else if (op === "2") await menuProdutos();
    else if (op === "3") await menuPedidos();
    else if (op === "4") await menuRelatorios();
    else if (op === "0") break;
  }
  rl.close();
}
main();