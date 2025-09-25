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
- **Node.js** → Ambiente de execução do sistema.  
- **CSV (Comma-Separated Values)** → Formato de armazenamento simples e persistente.  

---

Pré-requisitos
Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina. Você pode baixá-los do site oficial do Node.js

---

Instalação
Clone o repositório:
Abra seu terminal e execute o seguinte comando para baixar o projeto:

bash

git clone https://github.com/ShojiKimura/PizzariaGaloDoido.git

Acesse o diretório do projeto:
Navegue até a pasta do projeto que acabou de ser clonada:

Bash

cd nome-do-repositorio

Instale as dependências:
[cite_start]O projeto utiliza as dependências listadas no arquivo 

package.json, como TypeScript e ts-node. Instale-as executando o comando:   

Bash

npm install

---

Execução
O projeto é escrito em TypeScript e precisa ser executado através do ts-node. Para iniciar o sistema, simplesmente rode o seguinte comando no terminal, estando no diretório do projeto:

Bash

npm start

