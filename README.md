Principais Funcionalidades:

📦 Criação, listagem, atualização e deleção de produtos.<br/>
🔄 Utilização de TypeScript para garantir tipagem e segurança no desenvolvimento.<br/>
🔄 Organização de arquivos conforme boas práticas.<br/>
🔄 Utilização de um banco de dados simulado em memória para armazenar os produtos.<br/><br/>
Estrutura do Projeto:<br/>

📂 app.ts: Ponto de entrada da aplicação.<br/>
📂 interfaces.ts: Definição da interface Product para garantir consistência nos dados.<br/>
📂 logics.ts: Implementação das lógicas para manipulação dos produtos.<br/>
📂 database.ts: Criação de uma constante market como banco de dados simulado.<br/>
📂 middlewares.ts: Implementação de middlewares para verificação de nome existente e validação de IDs.<br/><br/>
Interfaces da Aplicação:<br/>

🔄 Product: Define os atributos como id, name, price, weight, section, calories, e expirationDate.<br/><br/>
Endpoints da Aplicação:<br/>

✅ POST /products: Criação e adição de produtos ao mercado.<br/>
✅ GET /products: Listagem de todos os produtos do mercado.<br/>
✅ GET /products/:id: Listagem de um produto específico através do seu ID.<br/>
✅ PATCH /products/:id: Atualização dos dados de um produto através do seu ID.<br/>
✅ DELETE /products/:id: Deleção de um produto a partir do seu ID.<br/><br/>
Middlewares da Aplicação:<br/>

✔️ Verificação de nome existente: Garante que o nome do produto não seja duplicado.<br/>
✔️ Verificação se o ID buscado existe: Valida a existência do ID antes de realizar operações.<br/><br/>
Exemplos de Requisições e Respostas:<br/>

Tecnologias Utilizadas:<br/>

🔍 TypeScript<br/>
🔍 Insomnia (para documentação e testes)<br/>
