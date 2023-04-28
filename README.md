# Projeto Integrador 3
## SENAC Santo Amaro - 3NC - 2023


## Integrantes
* Natalia Dinareli
* Raquel Aparecida
* Endrio Oliveira de Jesus
* Rael Souza da Paixão
* Vitor Manoel

### MER
![image](https://user-images.githubusercontent.com/67610613/227380205-9969125a-bfc5-407b-9587-820986fafec6.png)


### Landing Page
 ![image](https://user-images.githubusercontent.com/100283238/227319370-861ead65-db8f-4b2b-9f26-d3cf1e527af9.png)

### Login ADM
![image](https://user-images.githubusercontent.com/100283238/227320111-e0a32e7d-bef1-436c-a6e3-b94aef160108.png)

### Pedido
![image](https://user-images.githubusercontent.com/100283238/227320295-763b40df-b260-4384-964f-b64a50903ec1.png)


### Catálogo 
![image](https://user-images.githubusercontent.com/100283238/227320629-a46d36ca-ee93-4bf5-a8c5-ce5b400d651d.png)

### Solicitações
![image](https://user-images.githubusercontent.com/100283238/227320847-633a481f-ac07-47f1-bc16-304af4f123bb.png)

### Histórico
![image](https://user-images.githubusercontent.com/100283238/227320944-10692dc2-2a71-414c-8565-400d59baa95f.png)

# Como Rodar A Aplicação
## Front-end
### Passo 1

Primeiro passo para conseguir rodar o frontEnd é dar um `cd frontend` no terminal para sair da pasta de Projeto-integrador-3, já que temos as duas frentes na mesma pasta, backend e frontend, após estar na devida pasta é preciso dar um `npm i` para instalar nossas dependências.

### Passo 2

O segundo passo é dar um `npm start` no terminal e ele irá abrir a aplicação assim que termianr de rodar.

# IMPORTANTE!

## Para logar
Entre em "sou administrador" e digite admin no userName e password digite 123

### Você logou!

### Você conseguiu rodar o front-end!

## Back-end

### Passo 1

Nossa back-end é Java Spring boot e utiliza do maven como ferramenta de gerenciamento, o primeiro passo é dar um `cd backend` no terminal para sair da pasta de Projeto-integrador-3, já que temos as duas frentes na mesma pasta, backend e frontend, depois dois `cd lanzelotti.beauty`, até que o caminho no terminal fique: Projeto-integrador-3\backend\lanzelotti.beauty\lanzelotti.beauty.

### Passo 2

O segundo passo é rodar o comando `mvn spring-boot:run` **certifique a versão do java na sua máquina e a versão que seu maven está utilizando, atualmente este projeto utiliza a versão 17**

### Uma forma mais fácil - se sua máquina ter uma versão diferente do jdk

Se voçê possuir visual studio code na sua máquina, uma alternativa é instalar a extensão `Spring Boot Dashboard` e abrir o projeto na IDE, ao clicar sob a classe Application.java ele identificará automaticamente que é uma aplicação spring boot e disponibilizará um ícone de "desliga/liga" na barra lateral, ao clicar no ícone você verá sua aplicação disponível e só clicar no play e ele irá rodar automaticamente sua aplicação.
### Você conseguiu rodar o back-end!

## Como acessar ao banco

### Passo 1 

Digite no seu browser http://localhost:8080/h2-console/, ele irá abrir a tela de login do banco.

### Passo 2

Complete as informações com os seguintes dados: JDBC URL: jdbc:h2:mem:testdb, User name: sa, o resto deixe vazio ou como já está e clique em connect

### Você conseguiu acesso ao banco!
