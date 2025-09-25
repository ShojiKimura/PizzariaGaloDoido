# 🍕 Sistema de Gestão para Pizzaria

Um sistema de linha de comando desenvolvido em **TypeScript** para gerenciar clientes, produtos, pedidos e relatórios de uma pizzaria.  
Os dados são armazenados em arquivos **CSV**, funcionando como um banco de dados local simples.

---

## 🚀 Funcionalidades

### 👥 Gestão de Clientes
- ➕ **Cadastrar cliente**: Adicione novos clientes com nome e telefone.  
- 📋 **Listar clientes**: Visualize todos os clientes cadastrados.  
- ✏️ **Atualizar cliente**: Modifique nome ou telefone de um cliente existente.  
- ❌ **Excluir cliente**: Remova clientes do sistema.  

### 🍽️ Gestão de Produtos
- ➕ **Cadastrar produto**: Adicione pizzas, bebidas e outros produtos com nome e preço.  
- 📋 **Listar produtos**: Veja todos os itens disponíveis no cardápio.  
- ✏️ **Atualizar produto**: Altere nome ou preço de um produto.  
- ❌ **Excluir produto**: Remova produtos do cardápio.  

### 🛒 Gestão de Pedidos
- 🆕 **Registrar novo pedido**: Associe um pedido a um cliente e adicione múltiplos produtos e quantidades.  
- 📋 **Listar pedidos**: Visualize pedidos em aberto.  
- ✅ **Finalizar pedido**: Conclua um pedido, movendo-o para o histórico de vendas.  

### 📊 Relatórios
- 📅 **Relatório do dia**: Veja todos os pedidos finalizados no dia atual.  
- 📆 **Relatório do mês**: Liste todas as vendas do mês atual.  
- ⏳ **Relatório por período**: Filtre vendas por intervalo de datas.  
- 👥 **Vendas por cliente**: Consulte o histórico de pedidos de um cliente específico.  
- 🔥 **Produtos mais vendidos**: Descubra os itens mais populares.  
- 💰 **Total de vendas**: Obtenha a soma total de todas as vendas registradas.  

---

## 🛠️ Tecnologias Utilizadas
- **TypeScript** → Linguagem principal, garantindo tipagem e robustez.  
- **Node.js** → Ambiente de execução do sistema.  \\\
- **Git** → Terminal para execução do código
- **CSV (Comma-Separated Values)** → Formato de armazenamento simples e persistente.  

---

📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (https://nodejs.org/pt/download)

npm (gerenciador de pacotes do Node.js)

Git Bash (https://git-scm.com/downloads)

Você pode baixá-los nos sites oficiais do Node.js
 e do Git

---

📥 Instalação

No terminal, clone o repositório:

bash

git clone https://github.com/ShojiKimura/PizzariaGaloDoido.git

---

🚀 Execução

Acesse o diretório do projeto:

Bash

cd PizzariaGaloDoido


Entre na pasta js:

Bash

cd js


Inicie a aplicação:

Bash

node index.js

As opções que vão aparecer, será:

=== SISTEMA PIZZARIA ===
1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair

Digite 1 no terminal para ir para a opção de Clientes:

--- CLIENTES ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 1 para começar o cadástro:

Nome: (nome do cliente)
Telefone: (telefone do cliente)

então aparecerá a confirmação:

✅ Cliente cadastrado!

--- CLIENTES ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 2 para ver a lista de clientes cadastrados

� Clientes:
ID: (id do cliente) | Nome: (nome do cliente) | Tel: (telefone do cliente)

--- CLIENTES ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 3 para atualizar as informações de um cliente:

ID do cliente: (id do cliente que será atualizado)
Novo nome: (nome do cliente)
Novo telefone: (telefone do cliente)

então aparecerá a confirmação:

✅ Cliente atualizado!

--- CLIENTES ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 4 para excluir um cliente da lista de cadastro:

ID do cliente: (id do cliente que será excluído)

então aparecerá a confirmação:

✅ Cliente excluído!

--- CLIENTES ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 0 para sair da opção de clientes

=== SISTEMA PIZZARIA ===
1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair

Digite 2 para entrar na opção de Produtos:

--- PRODUTOS ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 1 para começar o cadástro:

Nome do produto: (nome do produto)
Preço: (preço do protudo)

então aparecerá a confirmação:

✅ Produto cadastrado!

--- PRODUTOS ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 2 para listar dos produtos cadastrados

� Produtos:
ID: (id do produto) | (nome do produto) | R$ (preço do produto)

--- PRODUTOS ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 3 para atualizar as informações de um produto

ID do produto: (id do produto que será atualizado)
Novo nome: (nome do produto)
Novo preço: (preço do produto)

então aparecerá a confirmação:

✅ Produto atualizado!

--- PRODUTOS ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

Digite 4 para excluir um produto cadastrado

ID do produto: (id do produto que será excluído)

então aparecerá a confirmação:

✅ Produto excluído!

--- PRODUTOS ---
1. Cadastrar | 2. Listar | 3. Atualizar | 4. Excluir | 0. Voltar

DIgite 0 para sair da opção de produtos

=== SISTEMA PIZZARIA ===
1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair

Digite 3 para entrar na opção de pedidos:

--- PEDIDOS ---
1. Novo | 2. Listar | 3. Finalizar | 0. Voltar

Digite 1 para começar um novo pedido

� Clientes:
(aparecerá a lista de clientes cadastrados)
ID do cliente: (id do cliente que vai fazer o pedido)

� Produtos:
(aparecerá a lista de produtos cadastrados)
ID do produto (0 para finalizar): (id do produto que será pedido)
Quantidade: (quantidade do produto pedido)

O processo irá repetir até digitar 0 e finalizar o pedido, então aparecerá:

✅ Pedido registrado!
Cliente ID (id do cliente) | Itens: (nome do produto)(quantidade de produtos) | Total: (soma total dos produtos)

--- PEDIDOS ---
1. Novo | 2. Listar | 3. Finalizar | 0. Voltar

Digite 2 para ver a lista de pedidos abertos

� Pedidos em aberto:
ID: (id do pedido) | Cliente: (nome do cliente) (id do cliente) | Itens: (nome do produto)(quantidade de produtos) | Total: (soma total dos produtos) | Criado em: (data e hora que o pedido foi aberto)

--- PEDIDOS ---
1. Novo | 2. Listar | 3. Finalizar | 0. Voltar

Digite 3 para finalizar um pedido aberto

ID do pedido: (id do pedido aberto)

� Pedido Finalizado!
ID: (id do pedido) | Cliente: (nome do cliente) (id do cliente) | Itens: (nome do produto)(quantidade de produtos) | Total: (soma total dos produtos) | Fechado em: (data e hora que o pedido foi fechado)

--- PEDIDOS ---
1. Novo | 2. Listar | 3. Finalizar | 0. Voltar

Digite 0 para sair da opção de pedidos

=== SISTEMA PIZZARIA ===
1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair

Digite 4 para entrar na opção de Relatórios:

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 1 para ver o relatório do dia

� Relatório do dia (data do dia)
(aparecerá uma lista dos pedidos do dia)

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 2 para ver o relatório do mês

� Relatório do mês (data do mês)
(aparecerá uma lista dos pedidos do mês)

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 3 para ver o relatório por período

Data inicial (AAAA-MM-DD): (ano inicial)-(mês inicial)-(dia inicial)
Data final (AAAA-MM-DD):(ano final)-(mês final)-(dia final)

� Relatório de (data inicial) até (data final)
(aparecerá a lista de pedidos desse período)

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 4 para ver o relatório por cliente

ID do cliente: (id do cliente)

� Vendas do Cliente ID (id do cliente) | Nome: (nome do cliente)
(aparecerá a lista de todos os pedidos do cliente)

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 5 para ver a lista de vendas dos produtos

A lista seguirá de forma decrescente (do maior para o menor)

� Produtos mais vendidos:
(nome do produto) → (número) unidades

--- RELATÓRIOS ---
1. Dia | 2. Mês | 3. Por período | 4. Vendas por cliente | 5. Produtos mais vendidos | 6. Total de vendas | 0. Voltar

Digite 6 para ver o valor total das vendas

� Total de Vendas: (soma do valor de todos os pedidos)

Digite 0 para sair da opção de relatórios

=== SISTEMA PIZZARIA ===
1. Clientes | 2. Produtos | 3. Pedidos | 4. Relatórios | 0. Sair

Digite 0 para fechar o sistema


---
