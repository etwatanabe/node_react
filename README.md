# Descrição
Este projeto é uma aplicação Node.js que utiliza Express para criar uma API RESTful. A aplicação se conecta a um banco de dados PostgreSQL usando Sequelize como ORM. O projeto também inclui ferramentas de desenvolvimento como ESLint, Prettier e Nodemon para melhorar a qualidade do código e a experiência de desenvolvimento.
**Este projeto está em processo de desenvolvimento**. Pretende-se desenvolver o frontend utilizando React para criar uma interface de usuário interativa e responsiva que consuma a API RESTful criada com Node.js e Express.

# Tecnologias Utilizadas
* Node.js: Ambiente de execução JavaScript no lado do servidor.
* Express: Framework web para Node.js, usado para criar a API RESTful.
* Sequelize: ORM (Object-Relational Mapping) para Node.js, usado para interagir com o banco de dados * PostgreSQL.
* PostgreSQL: Banco de dados relacional utilizado para armazenar os dados da aplicação.
* Yup: Biblioteca de validação de esquemas para JavaScript.
* Date-fns: Biblioteca para manipulação de datas em JavaScript.
* Bcryptjs: Biblioteca para hashing de senhas.
* Dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.

# Ferramentas de Desenvolvimento
* Nodemon: Ferramenta que reinicia automaticamente o servidor quando mudanças no código são detectadas.
* Sucrase: Ferramenta para transpilar código moderno de JavaScript.
* ESLint: Ferramenta de linting para identificar e corrigir problemas no código JavaScript.
* Prettier: Ferramenta de formatação de código.
* Sequelize CLI: Ferramenta de linha de comando para gerenciar migrações e modelos do Sequelize.

# Estrutura do Projeto
Node_React/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   │   ├── CustomersController.js
│   │   │   └── ContactsController.js
│   │   ├── models/
│   │   │   ├── Customer.js
│   │   │   └── Contact.js
│   ├── config/
│   │   └── database.js
│   ├── database/
│   │   ├── migrations/
│   │   └── seeds/
│   ├── server.js
│   └── playground.js
├── .editorconfig
├── .env
├── .prettierrc
├── .sequelizerc
├── eslint.config.mjs
├── nodemon.json
├── package.json
├── README.md
└── yarn.lock

# Scripts Disponíveis
* `dev`: Inicia o servidor em modo de desenvolvimento com Nodemon.
```sh
yarn dev
```

# Configurações do Banco de Dados
As configurações do banco de dados estão definidas no arquivo database.js e utilizam variáveis de ambiente carregadas a partir do arquivo .env.

## Exemplo de arquivo `.env`:
```sh
DB_USERNAME=user
DB_PASSWORD=password
DB_DATABASE=database
```

# ESLint e Prettier
O projeto está configurado para usar ESLint com o style guide do Airbnb e Prettier para formatação de código. As configurações estão definidas nos arquivos .eslintrc e .prettierrc.

# Como executar o projeto
1. Instalar as dependências
```sh
yarn dev
```

2. Configurar as variáveis de ambiente:
* Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente conforme o exemplo acima.

3. Executar as migrações do banco de dados:
```sh
yarn sequelize db:migrate
```

4. Iniciar o servidor
```sh
yarn dev
```

Seguindo esses passos, você terá a aplicação rodando localmente e pronta para uso.
