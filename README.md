# Awesome Project Build with TypeORM

Steps to run this project:

Rode o comando `yarn dev` para iniciar o servidor
Rode o comando `yarn typeorm migration:create -n CreateNomeDaTabela` para criar um novo schema
Rode o comando `yarn typeorm migration:run` executar a migration
Rode o comando `yarn typeorm migration:revert` reverter a migration

O projeto será executado o segunte caminho `http://localhost:3001`

Rotas criadas no projeto:

###Clientes:
POST e GET`http://localhost:3001/customers/`
PUT e DELETE`http://localhost:3001/customers/id`

###Funcionários:
POST e GET`http://localhost:3001/employees`
PUT e DELETE`http://localhost:3001/employees/id`

###Usuários:
POST e GET`http://localhost:3001/users`
PUT e DELETE`http://localhost:3001/users/id`

###Atendimentos:
POST e GET`http://localhost:3001/services`
PUT e DELETE`http://localhost:3001/services/id`

###Agendamentos:
POST e GET`http://localhost:3001/schedules`
PUT e DELETE`http://localhost:3001/schedules/id`
