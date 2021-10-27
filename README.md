


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

 ### :twisted_rightwards_arrows: **Testando Rotas**

 #### *Create User*
 - Criar usuario da Aplicação

 ROTA:  http://localhost:3333/web/v1/signup

Exemplo Body: 
  
{
	"name":"Fulano beltrano",
  "password":"??????????",
	"email":"usuarioexemplo@gmail.com"
}
  

 #### *Create ADMIN*
 - Criar usuario ADMINISTRADOR

 ROTA:  http://localhost:3333/web/v1/signup/admin

Exemplo Body: 
  
{
	"name":"Fulano Administrador",
  "password":"321",
	"email":"usuarioadmin1@gmail.com"
}
	

  
  #### *Login User*
 - Realizar login do usuário criar Token de Autenticação.
  
  ROTA: http://localhost:3333/web/v1/signin
  
  Exemplo Body: 
  
  {
	"email": "usuarioexemplo@gmail.com",
	"password":"??????????"
}

  #### *RefreshToken*
 - Renovar Token.
	
  OBS: Informar token revogado para gerar renovação
  
  ROTA: http://localhost:3333/web/v1/refresh
  


  
 #### *Create TodosList*
 - Criar Lista de TODOS

OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer

ROTA: http://localhost:3333/web/v1/todolist/create
  
  Exemplo Body: 
  
  {
	"name":"Lista de tarefas profissionais"
  
  }
  
  
 

  
  #### *Create TodosEntries*
 - Criar um TODO

OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer
	
  ROTA: http://localhost:3333/web/v1/todoentries/create
  
   Exemplo Body: 
  
  {
  					"title": "Exemplo de tarefa pendente",
            "todolists_id": 1,
           	"description": "Exemplo de descrição da tarefa pendente",
            "due_date": "10/22/2021" 
          
  
}
  


 #### *Complete TodosEntries*
 - Finalizar um TODO
  
OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer
	
  ROTA: http://localhost:3333/web/v1/todoentries/complete
	
   Exemplo Body: 
  
  { "id": 1,
  "completed": true
  
}
  
  

 #### *Update TodosEntries*
 - Atualizar um TODO
  
OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer
	
  ROTA: http://localhost:3333/web/v1/todoentries/update
	
   Exemplo Body: 
  
{						
	"id": "36d5adcb-bd1e-4717-80bf-a38b1b2c25fa",
	"title": "Novo titulo atualizado",
	"todolists_id": "de371b6c-ab5b-4b68-854b-5a97bdbeff74",
	"description": "Descrição atualizada",
   	"due_date": "10/10/2021" 
          
  
}
	
 #### *GET TodosEntries*
 - Listar os TODOS do Usuário logado
  
OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer
	
  ROTA: http://localhost:3333/web/v1/todoentries/user
  
   
	
 #### *GET ADMIN TodosEntries*
 - Listar os TODOS de todos os usuários
 - Filtrar TODOS em atraso
	
OBS: Para testar essa rota é nescessario que o usuário esteja autenticado, informe o token da sessão do usuário no Bearer

OBS: Para listar apenas os atrasados colocar "filter" como true
	
  
  ROTA: http://localhost:3333/web/v1/todoentries
	
   Exemplo Body: 
	
  {						

          "filter": true
  
  }
	
 
	
  
<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`


## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com :blue_heart: por [Alysson Tavares](https://github.com/alysson5g)

