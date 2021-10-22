


  <a href="https://www.linkedin.com/in/programadoralysson/">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Alysson Tavares-%237519C1">
  </a>
  <a>


# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>TODOS Ubistart</strong> é uma aplicação Web para registro e acompanhamento de TODOS.

Essa aplicação foi construída como teste da empresa <strong>Ubistart</strong> 
    
  
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

 - *Create User*
 - Criar usuario da Aplicação

 ROTA:  localhost/create/users

Exemplo Body: 
  
{
	"name":"Fulano beltrano",
  "password":"??????????",
	"email":"usuarioexemplo@gmail.com"
}
  ![Captura de tela de 2021-10-22 16-59-27](https://user-images.githubusercontent.com/62367153/138522609-a71baf55-5bca-4421-b207-36f1d032e1de.png)

  
  - *Login User*
 - Realizar login do usuário criar Token de Autenticação.
  
  ROTA:  localhost/sessions
  
  Exemplo Body: 
  
  {
	"email": "usuarioexemplo@gmail.com",
	"password":"??????????"
}

  ![Captura de tela de 2021-10-22 17-47-14](https://user-images.githubusercontent.com/62367153/138526565-3e048b2a-4dd2-4a4a-a09f-cbb3fecf361c.png)

  
- *Create TodosList*
 - Criar Lista de TODOS

ROTA: localhost/create/todolist
  
  Exemplo Body: 
  
  {
	"name":"Lista de tarefas profissionais"
  
  }
  
  
  ![Captura de tela de 2021-10-22 17-28-17](https://user-images.githubusercontent.com/62367153/138524935-65773d51-c0a5-417b-825e-77a0fd3bb234.png)

  
  - *Create TodosEntries*
 - Criar um TODO

  ROTA: localhost/create/todoentries
  
  
  {
  					"title": "Exemplo de tarefa pendente",
            "todolists_id": 1,
           	"description": "Exemplo de descrição da tarefa pendente",
            "due_date": "10/22/2021" 
          
  
}
  
  ![Captura de tela de 2021-10-22 17-40-48](https://user-images.githubusercontent.com/62367153/138526079-161b8bee-cf00-45f8-b9be-5facef0b490c.png)

  - *Complete TodosEntries*
 - Finalizar um TODO
  
  ROTA: localhost/complete/todoentries
  
  { "id": 1,
  "completed": true
  
}
  
  ![Captura de tela de 2021-10-22 17-55-26](https://user-images.githubusercontent.com/62367153/138527239-196a43f5-fa93-49ab-bac7-98c02ebbaa81.png)

  
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

