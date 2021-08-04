# Boas vindas ao repositório!
Neste repositório você vai encontar alguns detalhes de como foi desenvolvido um serviço de `webscraping` (raspagem de dados) em JavaScript (NodeJS). O objetivo do serviço é capturar uma lista de pessoas aprovadas em um vestibular (dados fictícios) e que são disponibilizadas no seguinte site https://sample-university-site.herokuapp.com/.

Para persitência de dados o serviço utiliza o banco de dados `MySQL`. Todos os dados capturados/coletados do site (CPFs, nomes e scores) foram salvos no banco de dados chamado de `webscraping` na tabela `approved_persons`.

* `Web scraping` é uma coleta de dados da web, de sites, onde são usados scripts e programas para “raspar” informações destes sites e que poderão ser usadas para futuras análises.

---

# Desenvolvimento
Para o desenvolvimento do serviço foram utilizadas basicamente 3 ferramentas:

1. NodeJS

Inicie um projeto NodeJS com o comando `npm init -y`

2. Puppeteer

Para instalar: `npm i puppeteer`

[Mais detalhes nesse link](https://www.npmjs.com/package/puppeteer)

3. MySQL

Conforme citado anteriormente foi utilizado o banco de dados `MySQL`.

- Para a criação do banco de dados e das tabelas, basta rodar o script `script.sql` disponível na raiz do projeto.

Para instalar: `npm i mysql`

[Mais detalhes nesse link](https://www.npmjs.com/package/mysql)

* Outras dependências utilizadas nesse projeto
- dotenv: `npm i dotenv`
- nodemon `npm i nodemon -D`

---

# Observações importantes:

- Será necessário configurar as variáveis globais do MySQL.** Usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

- Na pasta models foi criado o arquivo `connection.js` para conexão com o banco de dados. Para teste é essencial criar o arquivo `.env` com as 3 variáveis abaixo:

`host: process.env.HOSTNAME`
`user: process.env.MYSQL_USER`
`password: process.env.MYSQL_PASSWORD`

# Pontos de melhoria:
A implementação dos pontos de melhoria citados abaixo são de importantes e devem ser realizados o quanto:

- Realizar higienização dos dados após persistência;

- Validar os CPFs;

- Performance na execução da captura dos dados do site e importação em um banco de dados e tratamento dos dados;

- Escrever testes unitários com cobertura de pelo menos 90%.

---

# Para clonar esse projeto
Para clonar esse projeto: `git clone  https://github.com/ZecaCosta/webscraping-nodejs.git`

---

# Agradecimentos
Aos colegas da Trybe Raphael Caputo e Moisés Santana, por toda a disponibilidade em contribuir no sucesso desse projeto.

---