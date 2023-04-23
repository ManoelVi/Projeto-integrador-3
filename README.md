# Como Rodar A Aplicação
## Front-end
### Passo 1

Primeiro passo para conseguir rodar o frontEnd é dar um `cd frontend` no terminal para sair da pasta de Projeto-integrador-3, já que temos as duas frentes na mesma pasta, backend e frontend, após estar na devida pasta é preciso dar um `npm i` para instalar nossas dependências.

### Passo 2

O segundo passo é dar um `npm start` no terminal e ele irá abrir a aplicação assim que termianr de rodar.

### Você conseguiu rodar o front-end!

## Back-end

### Passo 1

Nossa back-end é Java Spring boot e utiliza do maven como ferramenta de gerenciamento, o primeiro passo é dar um `cd backend` no terminal para sair da pasta de Projeto-integrador-3, já que temos as duas frentes na mesma pasta, backend e frontend, depois dois `cd lanzelotti.beauty`, até que o caminho no terminal fique: Projeto-integrador-3\backend\lanzelotti.beauty\lanzelotti.beauty.

### Passo 2

O segundo passo é rodar o comando `mvn spring-boot:run` **certifique a versão do java na sua máquina e a versão que seu maven está utilizando, atualmente este projeto utiliza a versão 17**

### Uma forma mais fácil

Se voçê possuir visual studio code na sua máquina, uma alternativa é instalar a extensão `Spring Boot Dashboard` e abrir o projeto na IDE, ao clicar sob a classe Application.java ele identificará automaticamente que é uma aplicação spring boot e disponibilizará um ícone de "desliga/liga" na barra lateral, ao clicar no ícone você verá sua aplicação disponível e só clicar no play e ele irá rodar automaticamente sua aplicação.
### Você conseguiu rodar o back-end!

## Como acessar ao banco

### Passo 1 

Digite no seu browser http://localhost:8080/h2-console/, ele irá abrir a tela de login do banco.

### Passo 2

Complete as informações com os seguintes dados: JDBC URL: jdbc:h2:mem:testdb, User name: sa, o resto deixe vazio ou como já está e clique em connect

### Você conseguiu acesso ao banco!
