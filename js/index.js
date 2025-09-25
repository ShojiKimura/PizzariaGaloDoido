"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs/promises");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(q) {
    return new Promise(function (resolve) { return rl.question(q, resolve); });
}
// ===================
// Arquivos
// ===================
var ARQ = {
    clientes: "clientes.csv",
    produtos: "produtos.csv",
    pedidos: "pedidos.csv",
    historico: "historico.csv",
};
var CAB = {
    clientes: "id,nome,telefone\n",
    produtos: "id,nome,preco\n",
    pedidos: "id,idCliente,itens,total,status,data\n",
    historico: "id,idCliente,itens,total,status,data\n",
};
// ===================
// Funções utilitárias
// ===================
function inicializar() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, arq, cab, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _i = 0, _a = Object.entries(CAB);
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                    _b = _a[_i], arq = _b[0], cab = _b[1];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, fs.access(ARQ[arq])];
                case 3:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 4:
                    _c = _d.sent();
                    return [4 /*yield*/, fs.writeFile(ARQ[arq], cab)];
                case 5:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function lerCsv(path) {
    return __awaiter(this, void 0, void 0, function () {
        var dados;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFile(path, "utf-8")];
                case 1:
                    dados = _a.sent();
                    return [2 /*return*/, dados.split("\n").slice(1).filter(Boolean).map(function (l) { return l.split(","); })];
            }
        });
    });
}
function adicionarLinha(path, linha) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.appendFile(path, linha)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function agoraISO() {
    return new Date().toISOString().slice(0, 19).replace("T", " ");
}
function getClienteNome(id) {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, c;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.clientes)];
                case 1:
                    clientes = _a.sent();
                    c = clientes.find(function (l) { return Number(l[0]) === id; });
                    return [2 /*return*/, c ? c[1] : "Desconhecido"];
            }
        });
    });
}
// ===================
// Clientes
// ===================
function cadastrarCliente() {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, id, nome, telefone;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.clientes)];
                case 1:
                    clientes = _a.sent();
                    id = clientes.length + 1;
                    return [4 /*yield*/, ask("Nome: ")];
                case 2:
                    nome = _a.sent();
                    return [4 /*yield*/, ask("Telefone: ")];
                case 3:
                    telefone = _a.sent();
                    return [4 /*yield*/, adicionarLinha(ARQ.clientes, "".concat(id, ",").concat(nome, ",").concat(telefone, "\n"))];
                case 4:
                    _a.sent();
                    console.log("✅ Cliente cadastrado!");
                    return [2 /*return*/];
            }
        });
    });
}
function listarClientes() {
    return __awaiter(this, void 0, void 0, function () {
        var clientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.clientes)];
                case 1:
                    clientes = _a.sent();
                    console.log("\n📋 Clientes:");
                    clientes.forEach(function (c) { return console.log("ID: ".concat(c[0], " | Nome: ").concat(c[1], " | Tel: ").concat(c[2])); });
                    return [2 /*return*/];
            }
        });
    });
}
function atualizarCliente() {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, id, _a, idx, nome, tel;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.clientes)];
                case 1:
                    clientes = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do cliente: ")];
                case 2:
                    id = _a.apply(void 0, [_b.sent()]);
                    idx = clientes.findIndex(function (c) { return Number(c[0]) === id; });
                    if (idx === -1)
                        return [2 /*return*/, console.log("❌ Cliente não encontrado.")];
                    return [4 /*yield*/, ask("Novo nome: ")];
                case 3:
                    nome = _b.sent();
                    return [4 /*yield*/, ask("Novo telefone: ")];
                case 4:
                    tel = _b.sent();
                    clientes[idx] = [String(id), nome, tel];
                    return [4 /*yield*/, fs.writeFile(ARQ.clientes, CAB.clientes + clientes.map(function (c) { return c.join(","); }).join("\n") + "\n")];
                case 5:
                    _b.sent();
                    console.log("✅ Cliente atualizado!");
                    return [2 /*return*/];
            }
        });
    });
}
function excluirCliente() {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, id, _a, novos;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.clientes)];
                case 1:
                    clientes = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do cliente: ")];
                case 2:
                    id = _a.apply(void 0, [_b.sent()]);
                    novos = clientes.filter(function (c) { return Number(c[0]) !== id; });
                    return [4 /*yield*/, fs.writeFile(ARQ.clientes, CAB.clientes + novos.map(function (c) { return c.join(","); }).join("\n") + "\n")];
                case 3:
                    _b.sent();
                    console.log("✅ Cliente excluído!");
                    return [2 /*return*/];
            }
        });
    });
}
// ===================
// Produtos
// ===================
function cadastrarProduto() {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, id, nome, preco;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.produtos)];
                case 1:
                    produtos = _a.sent();
                    id = produtos.length + 1;
                    return [4 /*yield*/, ask("Nome do produto: ")];
                case 2:
                    nome = _a.sent();
                    return [4 /*yield*/, ask("Preço: ")];
                case 3:
                    preco = _a.sent();
                    return [4 /*yield*/, adicionarLinha(ARQ.produtos, "".concat(id, ",").concat(nome, ",").concat(preco, "\n"))];
                case 4:
                    _a.sent();
                    console.log("✅ Produto cadastrado!");
                    return [2 /*return*/];
            }
        });
    });
}
function listarProdutos() {
    return __awaiter(this, void 0, void 0, function () {
        var produtos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.produtos)];
                case 1:
                    produtos = _a.sent();
                    console.log("\n📦 Produtos:");
                    produtos.forEach(function (p) { return console.log("ID: ".concat(p[0], " | ").concat(p[1], " | R$ ").concat(p[2])); });
                    return [2 /*return*/];
            }
        });
    });
}
function atualizarProduto() {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, id, _a, idx, nome, preco;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.produtos)];
                case 1:
                    produtos = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do produto: ")];
                case 2:
                    id = _a.apply(void 0, [_b.sent()]);
                    idx = produtos.findIndex(function (p) { return Number(p[0]) === id; });
                    if (idx === -1)
                        return [2 /*return*/, console.log("❌ Produto não encontrado.")];
                    return [4 /*yield*/, ask("Novo nome: ")];
                case 3:
                    nome = _b.sent();
                    return [4 /*yield*/, ask("Novo preço: ")];
                case 4:
                    preco = _b.sent();
                    produtos[idx] = [String(id), nome, preco];
                    return [4 /*yield*/, fs.writeFile(ARQ.produtos, CAB.produtos + produtos.map(function (p) { return p.join(","); }).join("\n") + "\n")];
                case 5:
                    _b.sent();
                    console.log("✅ Produto atualizado!");
                    return [2 /*return*/];
            }
        });
    });
}
function excluirProduto() {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, id, _a, novos;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.produtos)];
                case 1:
                    produtos = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do produto: ")];
                case 2:
                    id = _a.apply(void 0, [_b.sent()]);
                    novos = produtos.filter(function (p) { return Number(p[0]) !== id; });
                    return [4 /*yield*/, fs.writeFile(ARQ.produtos, CAB.produtos + novos.map(function (p) { return p.join(","); }).join("\n") + "\n")];
                case 3:
                    _b.sent();
                    console.log("✅ Produto excluído!");
                    return [2 /*return*/];
            }
        });
    });
}
// ===================
// Pedidos
// ===================
function registrarPedido() {
    return __awaiter(this, void 0, void 0, function () {
        var pedidos, id, idCliente, _a, itens, total, _loop_1, state_1, data, pedido;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.pedidos)];
                case 1:
                    pedidos = _b.sent();
                    id = pedidos.length + 1;
                    return [4 /*yield*/, listarClientes()];
                case 2:
                    _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do cliente: ")];
                case 3:
                    idCliente = _a.apply(void 0, [_b.sent()]);
                    return [4 /*yield*/, listarProdutos()];
                case 4:
                    _b.sent();
                    itens = [];
                    total = 0;
                    _loop_1 = function () {
                        var idProd, _c, qtd, _d, produtos, prod;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    _c = Number;
                                    return [4 /*yield*/, ask("ID do produto (0 para finalizar): ")];
                                case 1:
                                    idProd = _c.apply(void 0, [_e.sent()]);
                                    if (idProd === 0)
                                        return [2 /*return*/, "break"];
                                    _d = Number;
                                    return [4 /*yield*/, ask("Quantidade: ")];
                                case 2:
                                    qtd = _d.apply(void 0, [_e.sent()]);
                                    return [4 /*yield*/, lerCsv(ARQ.produtos)];
                                case 3:
                                    produtos = _e.sent();
                                    prod = produtos.find(function (p) { return Number(p[0]) === idProd; });
                                    if (!prod) {
                                        console.log("❌ Produto não encontrado.");
                                        return [2 /*return*/, "continue"];
                                    }
                                    itens.push("".concat(prod[1], "(x").concat(qtd, ")"));
                                    total += Number(prod[2]) * qtd;
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 5;
                case 5:
                    if (!true) return [3 /*break*/, 7];
                    return [5 /*yield**/, _loop_1()];
                case 6:
                    state_1 = _b.sent();
                    if (state_1 === "break")
                        return [3 /*break*/, 7];
                    return [3 /*break*/, 5];
                case 7:
                    data = agoraISO();
                    pedido = [String(id), String(idCliente), itens.join(";"), String(total.toFixed(2)), "ABERTO", data];
                    return [4 /*yield*/, adicionarLinha(ARQ.pedidos, pedido.join(",") + "\n")];
                case 8:
                    _b.sent();
                    console.log("\n✅ Pedido registrado!");
                    console.log("Cliente ID ".concat(idCliente, " | Itens: ").concat(pedido[2], " | Total: R$ ").concat(pedido[3]));
                    return [2 /*return*/];
            }
        });
    });
}
function listarPedidos() {
    return __awaiter(this, void 0, void 0, function () {
        var pedidos, _i, pedidos_1, p, nomeCliente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.pedidos)];
                case 1:
                    pedidos = _a.sent();
                    console.log("\n📋 Pedidos em aberto:");
                    _i = 0, pedidos_1 = pedidos;
                    _a.label = 2;
                case 2:
                    if (!(_i < pedidos_1.length)) return [3 /*break*/, 5];
                    p = pedidos_1[_i];
                    return [4 /*yield*/, getClienteNome(Number(p[1]))];
                case 3:
                    nomeCliente = _a.sent();
                    console.log("ID: ".concat(p[0], " | Cliente: ").concat(nomeCliente, " (").concat(p[1], ") | Itens: ").concat(p[2], " | Total: R$ ").concat(p[3], " | Criado em: ").concat(p[5]));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function finalizarPedido() {
    return __awaiter(this, void 0, void 0, function () {
        var pedidos, id, _a, idx, pedido, nomeCliente;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.pedidos)];
                case 1:
                    pedidos = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do pedido: ")];
                case 2:
                    id = _a.apply(void 0, [_b.sent()]);
                    idx = pedidos.findIndex(function (p) { return Number(p[0]) === id; });
                    if (idx === -1)
                        return [2 /*return*/, console.log("❌ Pedido não encontrado.")];
                    pedido = pedidos[idx];
                    pedido[4] = "ENTREGUE";
                    pedido[5] = agoraISO();
                    return [4 /*yield*/, fs.writeFile(ARQ.pedidos, CAB.pedidos + pedidos.filter(function (_, i) { return i !== idx; }).map(function (l) { return l.join(","); }).join("\n") + "\n")];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, adicionarLinha(ARQ.historico, pedido.join(",") + "\n")];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, getClienteNome(Number(pedido[1]))];
                case 5:
                    nomeCliente = _b.sent();
                    console.log("\n📦 Pedido Finalizado!");
                    console.log("ID: ".concat(pedido[0], " | Cliente: ").concat(nomeCliente, " (").concat(pedido[1], ") | Itens: ").concat(pedido[2], " | Total: R$ ").concat(pedido[3], " | Fechado em: ").concat(pedido[5]));
                    return [4 /*yield*/, listarPedidos()];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ===================
// Relatórios
// ===================
function relatorioDia() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, hoje, pedidosHoje, _i, pedidosHoje_1, p, nomeCliente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _a.sent();
                    hoje = new Date().toISOString().slice(0, 10);
                    pedidosHoje = historico.filter(function (p) { return p[5].startsWith(hoje); });
                    console.log("\n\uD83D\uDCCA Relat\u00F3rio do dia ".concat(hoje));
                    _i = 0, pedidosHoje_1 = pedidosHoje;
                    _a.label = 2;
                case 2:
                    if (!(_i < pedidosHoje_1.length)) return [3 /*break*/, 5];
                    p = pedidosHoje_1[_i];
                    return [4 /*yield*/, getClienteNome(Number(p[1]))];
                case 3:
                    nomeCliente = _a.sent();
                    console.log("Pedido ".concat(p[0], " | Cliente: ").concat(nomeCliente, " (").concat(p[1], ") | Total R$ ").concat(p[3], " | Fechado em: ").concat(p[5]));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function relatorioMes() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, mes, pedidosMes, _i, pedidosMes_1, p, nomeCliente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _a.sent();
                    mes = new Date().toISOString().slice(0, 7);
                    pedidosMes = historico.filter(function (p) { return p[5].startsWith(mes); });
                    console.log("\n\uD83D\uDCCA Relat\u00F3rio do m\u00EAs ".concat(mes));
                    _i = 0, pedidosMes_1 = pedidosMes;
                    _a.label = 2;
                case 2:
                    if (!(_i < pedidosMes_1.length)) return [3 /*break*/, 5];
                    p = pedidosMes_1[_i];
                    return [4 /*yield*/, getClienteNome(Number(p[1]))];
                case 3:
                    nomeCliente = _a.sent();
                    console.log("Pedido ".concat(p[0], " | Cliente: ").concat(nomeCliente, " (").concat(p[1], ") | Total R$ ").concat(p[3], " | Fechado em: ").concat(p[5]));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function relatorioPorPeriodo() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, inicio, fim, pedidos, _i, pedidos_2, p, nomeCliente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _a.sent();
                    return [4 /*yield*/, ask("Data inicial (AAAA-MM-DD): ")];
                case 2:
                    inicio = _a.sent();
                    return [4 /*yield*/, ask("Data final (AAAA-MM-DD): ")];
                case 3:
                    fim = _a.sent();
                    pedidos = historico.filter(function (p) {
                        var data = p[5].slice(0, 10);
                        return data >= inicio && data <= fim;
                    });
                    console.log("\n\uD83D\uDCCA Relat\u00F3rio de ".concat(inicio, " at\u00E9 ").concat(fim));
                    _i = 0, pedidos_2 = pedidos;
                    _a.label = 4;
                case 4:
                    if (!(_i < pedidos_2.length)) return [3 /*break*/, 7];
                    p = pedidos_2[_i];
                    return [4 /*yield*/, getClienteNome(Number(p[1]))];
                case 5:
                    nomeCliente = _a.sent();
                    console.log("Pedido ".concat(p[0], " | Cliente: ").concat(nomeCliente, " (").concat(p[1], ") | Total R$ ").concat(p[3], " | Fechado em: ").concat(p[5]));
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function relatorioVendasPorCliente() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, idCliente, _a, pedidos, nomeCliente;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, ask("ID do cliente: ")];
                case 2:
                    idCliente = _a.apply(void 0, [_b.sent()]);
                    pedidos = historico.filter(function (p) { return Number(p[1]) === idCliente; });
                    if (pedidos.length === 0)
                        return [2 /*return*/, console.log("❌ Nenhuma venda encontrada.")];
                    return [4 /*yield*/, getClienteNome(idCliente)];
                case 3:
                    nomeCliente = _b.sent();
                    console.log("\n\uD83D\uDCCA Vendas do Cliente ID ".concat(idCliente, " | Nome: ").concat(nomeCliente));
                    pedidos.forEach(function (p) { return console.log("Pedido ".concat(p[0], " | Itens: ").concat(p[2], " | Total R$ ").concat(p[3], " | Fechado em: ").concat(p[5])); });
                    return [2 /*return*/];
            }
        });
    });
}
function relatorioProdutosMaisVendidos() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, contagem, ranking;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _a.sent();
                    contagem = {};
                    historico.forEach(function (p) {
                        p[2].split(";").forEach(function (item) {
                            var _a = item.split("(x"), nome = _a[0], qtd = _a[1];
                            var quantidade = Number(qtd.replace(")", ""));
                            contagem[nome.trim()] = (contagem[nome.trim()] || 0) + quantidade;
                        });
                    });
                    ranking = Object.entries(contagem).sort(function (a, b) { return b[1] - a[1]; });
                    console.log("\n🏆 Produtos mais vendidos:");
                    ranking.forEach(function (_a) {
                        var nome = _a[0], qtd = _a[1];
                        return console.log("".concat(nome, " \u2192 ").concat(qtd, " unidades"));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function relatorioTotalVendas() {
    return __awaiter(this, void 0, void 0, function () {
        var historico, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerCsv(ARQ.historico)];
                case 1:
                    historico = _a.sent();
                    total = historico.reduce(function (soma, p) { return soma + Number(p[3]); }, 0);
                    console.log("\n\uD83D\uDCB0 Total de Vendas: R$ ".concat(total.toFixed(2)));
                    return [2 /*return*/];
            }
        });
    });
}
// ===================
// Menus
// ===================
function menuClientes() {
    return __awaiter(this, void 0, void 0, function () {
        var op;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 11];
                    console.log("\n--- CLIENTES ---");
                    console.log("1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar");
                    return [4 /*yield*/, ask("> ")];
                case 1:
                    op = _a.sent();
                    if (!(op === "1")) return [3 /*break*/, 3];
                    return [4 /*yield*/, cadastrarCliente()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 3:
                    if (!(op === "2")) return [3 /*break*/, 5];
                    return [4 /*yield*/, listarClientes()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 5:
                    if (!(op === "3")) return [3 /*break*/, 7];
                    return [4 /*yield*/, atualizarCliente()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 7:
                    if (!(op === "4")) return [3 /*break*/, 9];
                    return [4 /*yield*/, excluirCliente()];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    if (op === "0")
                        return [3 /*break*/, 11];
                    _a.label = 10;
                case 10: return [3 /*break*/, 0];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function menuProdutos() {
    return __awaiter(this, void 0, void 0, function () {
        var op;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 11];
                    console.log("\n--- PRODUTOS ---");
                    console.log("1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar");
                    return [4 /*yield*/, ask("> ")];
                case 1:
                    op = _a.sent();
                    if (!(op === "1")) return [3 /*break*/, 3];
                    return [4 /*yield*/, cadastrarProduto()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 3:
                    if (!(op === "2")) return [3 /*break*/, 5];
                    return [4 /*yield*/, listarProdutos()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 5:
                    if (!(op === "3")) return [3 /*break*/, 7];
                    return [4 /*yield*/, atualizarProduto()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 7:
                    if (!(op === "4")) return [3 /*break*/, 9];
                    return [4 /*yield*/, excluirProduto()];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    if (op === "0")
                        return [3 /*break*/, 11];
                    _a.label = 10;
                case 10: return [3 /*break*/, 0];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function menuPedidos() {
    return __awaiter(this, void 0, void 0, function () {
        var op;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 9];
                    console.log("\n--- PEDIDOS ---");
                    console.log("1. Novo | 2. Listar | 3. Finalizar | 0. Voltar");
                    return [4 /*yield*/, ask("> ")];
                case 1:
                    op = _a.sent();
                    if (!(op === "1")) return [3 /*break*/, 3];
                    return [4 /*yield*/, registrarPedido()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 3:
                    if (!(op === "2")) return [3 /*break*/, 5];
                    return [4 /*yield*/, listarPedidos()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 5:
                    if (!(op === "3")) return [3 /*break*/, 7];
                    return [4 /*yield*/, finalizarPedido()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    if (op === "0")
                        return [3 /*break*/, 9];
                    _a.label = 8;
                case 8: return [3 /*break*/, 0];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function menuRelatorios() {
    return __awaiter(this, void 0, void 0, function () {
        var op;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 15];
                    console.log("\n--- RELATÓRIOS ---");
                    console.log("1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar");
                    return [4 /*yield*/, ask("> ")];
                case 1:
                    op = _a.sent();
                    if (!(op === "1")) return [3 /*break*/, 3];
                    return [4 /*yield*/, relatorioDia()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 3:
                    if (!(op === "2")) return [3 /*break*/, 5];
                    return [4 /*yield*/, relatorioMes()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 5:
                    if (!(op === "3")) return [3 /*break*/, 7];
                    return [4 /*yield*/, relatorioPorPeriodo()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 7:
                    if (!(op === "4")) return [3 /*break*/, 9];
                    return [4 /*yield*/, relatorioVendasPorCliente()];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 9:
                    if (!(op === "5")) return [3 /*break*/, 11];
                    return [4 /*yield*/, relatorioProdutosMaisVendidos()];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 11:
                    if (!(op === "6")) return [3 /*break*/, 13];
                    return [4 /*yield*/, relatorioTotalVendas()];
                case 12:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 13:
                    if (op === "0")
                        return [3 /*break*/, 15];
                    _a.label = 14;
                case 14: return [3 /*break*/, 0];
                case 15: return [2 /*return*/];
            }
        });
    });
}
// ===================
// Principal
// ===================
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var op;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inicializar()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 13];
                    console.log("\n=== SISTEMA PIZZARIA ===");
                    console.log("1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair");
                    return [4 /*yield*/, ask("> ")];
                case 3:
                    op = _a.sent();
                    if (!(op === "1")) return [3 /*break*/, 5];
                    return [4 /*yield*/, menuClientes()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 5:
                    if (!(op === "2")) return [3 /*break*/, 7];
                    return [4 /*yield*/, menuProdutos()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 7:
                    if (!(op === "3")) return [3 /*break*/, 9];
                    return [4 /*yield*/, menuPedidos()];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 9:
                    if (!(op === "4")) return [3 /*break*/, 11];
                    return [4 /*yield*/, menuRelatorios()];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    if (op === "0")
                        return [3 /*break*/, 13];
                    _a.label = 12;
                case 12: return [3 /*break*/, 2];
                case 13:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
