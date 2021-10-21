<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="images/logo.png">
    <br><br>
    <b>Recicle! ajude o meio ambiente!</b> 
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a href="https://www.linkedin.com/in/matheus-lopes-394240151/">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Matheus Lopes-%237519C1">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/github/license/vitorserrano/ecoleta?color=%237519C1">
</p>

# Índice

- [Sobre](#sobre)
- [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>TODOS Ubistart</strong> é uma aplicação Web para registro e acompanhamento de TODOS.

Essa aplicação foi construída como teste da empresa <strong>Ubistart</strong> 
    
<a id="documentacao"></a>

## :books: Documentação

Para reforçar alguns conceitos e registrar comandos que são dificeis de se lembrar eu fiz uma pequena **[DOCUMENTAÇÃO](DOCUMENTATION.md)** 

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [redis](https://redis.io/)
- [docker](https://www.docker.com/)        
    

## :heavy_check_mark: Resultado:

- O layout está disponível no **[Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/)**;

<h1 align="center">
    <img alt="Web" src="images/VideoWeb.gif" width="900px">
</h1>

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Docker](https://www.docker.com/get-started)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/alysson5g/TODO-teste-Ubistart.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install
  ou yarn

  ## Crie o banco de dados
  $ docker run -d --name dbubi -p 3306:3306 -e MYSQL_DATABASE=testeubi -e MYSQL_USER=ubistart -e MYSQL_PASSWORD=321 mysql
  $ docker run --name redisUbistart -p 7051:6379 -d redis
  $ yarn sequelize-cli db:migrate
   

  # Inicie a API
  $ yarn dev

```

- ### :twisted_rightwards_arrows: **Testando Rotas**

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`


## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com :blue_heart: por [Alysson Tavares](https://github.com/alysson5g)

