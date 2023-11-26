Principais Funcionalidades:

📦 Criação, listagem, atualização e deleção de produtos.
🔄 Utilização de TypeScript para garantir tipagem e segurança no desenvolvimento.
🔄 Organização de arquivos conforme boas práticas.
🔄 Utilização de um banco de dados simulado em memória para armazenar os produtos.
Estrutura do Projeto:

📂 app.ts: Ponto de entrada da aplicação.
📂 interfaces.ts: Definição da interface Product para garantir consistência nos dados.
📂 logics.ts: Implementação das lógicas para manipulação dos produtos.
📂 database.ts: Criação de uma constante market como banco de dados simulado.
📂 middlewares.ts: Implementação de middlewares para verificação de nome existente e validação de IDs.
Interfaces da Aplicação:

🔄 Product: Define os atributos como id, name, price, weight, section, calories, e expirationDate.
Endpoints da Aplicação:

✅ POST /products: Criação e adição de produtos ao mercado.
✅ GET /products: Listagem de todos os produtos do mercado.
✅ GET /products/:id: Listagem de um produto específico através do seu ID.
✅ PATCH /products/:id: Atualização dos dados de um produto através do seu ID.
✅ DELETE /products/:id: Deleção de um produto a partir do seu ID.
Middlewares da Aplicação:

✔️ Verificação de nome existente: Garante que o nome do produto não seja duplicado.
✔️ Verificação se o ID buscado existe: Valida a existência do ID antes de realizar operações.
Exemplos de Requisições e Respostas:

🔄 Para cada endpoint, exemplos de requisições e respostas foram fornecidos para facilitar o entendimento e teste.
Tecnologias Utilizadas:

🔍 TypeScript
🔍 Insomnia (para documentação e testes)
