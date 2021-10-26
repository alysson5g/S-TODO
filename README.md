


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
    



<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Docker](https://www.docker.com/get-started)** instalado de forma global na máquina
	
  Observação: Como estamos trabalhando uma aplicação com finalidade de teste, disponibilizei
  o arquivo .env no repositório para facilitar a execução deste teste. 
  Deixando claro a conciencia de não ser uma boa pratica para aplicações reais em produção.


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

 - *Create ADMIN*
 - Criar usuario ADMINISTRADOR

 ROTA:  localhost/create/users/admin

Exemplo Body: 
  
{
	"name":"Fulano Administrador",
  "password":"321",
	"email":"usuarioadmin1@gmail.com"
}
	![Captura de tela de 2021-10-26 16-56-02](https://user-images.githubusercontent.com/62367153/138960028-409f012b-f7f5-40eb-a79c-5d5045a3f2eb.png)

  
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
  
   Exemplo Body: 
  
  {
  					"title": "Exemplo de tarefa pendente",
            "todolists_id": 1,
           	"description": "Exemplo de descrição da tarefa pendente",
            "due_date": "10/22/2021" 
          
  
}
  
 ![Captura de tela de 2021-10-26 17-17-24](https://user-images.githubusercontent.com/62367153/138962414-c90d60ab-48f4-4bb6-b718-7f86bdadc337.png)


  - *Complete TodosEntries*
 - Finalizar um TODO
  
  ROTA: localhost/complete/todoentries
	
   Exemplo Body: 
  
  { "id": 1,
  "completed": true
  
}
  
  ![Captura de tela de 2021-10-26 17-18-36](https://user-images.githubusercontent.com/62367153/138962563-29d2e65a-75cf-4920-bec9-d57d21a6f3d7.png)


 - *Update TodosEntries*
 - Atualizar um TODO
  
  ROTA: localhost/update/todoentries
	
   Exemplo Body: 
  
{						
	"id": "36d5adcb-bd1e-4717-80bf-a38b1b2c25fa",
	"title": "Novo titulo atualizado",
	"todolists_id": "de371b6c-ab5b-4b68-854b-5a97bdbeff74",
	"description": "Descrição atualizada",
   	"due_date": "10/10/2021" 
          
  
}
	![Captura de tela de 2021-10-26 17-02-41](https://user-images.githubusercontent.com/62367153/138960524-17698d2b-bd1d-4ddd-88e8-669c7639cc3c.png)

 - *GET TodosEntries*
 - Listar os TODOS do Usuário logado
  
  ROTA: localhost/todos/user
  
   ![Captura de tela de 2021-10-26 17-08-19](https://user-images.githubusercontent.com/62367153/138961242-525a7712-cbec-4abe-92fb-12ea5bfdf7a0.png)
	
 - *GET ADMIN TodosEntries*
 - Listar os TODOS de todos os usuários
 - Filtrar TODOS em atraso
	
	Obs: Para listar apenas os atrasados colocar "filter" como true
  
  ROTA: localhost/todos
	
   Exemplo Body: 
	
  {						

          "filter": true
  
  }
	
  ![Captura de tela de 2021-10-26 17-14-21](https://user-images.githubusercontent.com/62367153/138961960-e74ca67d-e0d2-44c1-a280-cc5690e6de75.png)

	
  
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

