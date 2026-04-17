##  Cypress + Cucumber: Automação de Testes SauceDemo
  
Este projeto foi desenvolvido para fins de aprendizado, com o objetivo de demonstrar a integração do Cypress com o preprocessor Cucumber (BDD) para automação de testes de interface.

**projeto rodando no cypress**
<img width="1893" height="943" alt="image" src="https://github.com/user-attachments/assets/b27f8c28-e1a9-4d9e-bf1f-e830041e7de0" />

## 🚀 Tecnologias Utilizadas
**Cypress:** Framework de automação de testes end-to-end.

**Cucumber:** Ferramenta que permite escrever testes em formato BDD (Behavior Driven Development) usando a sintaxe Gherkin.

**JavaScript:** Linguagem base para os scripts de teste.

## 📂 Estrutura do Projeto
O projeto segue a organização de pastas recomendada para Cucumber no Cypress:

cypress/e2e/: Contém os arquivos .feature (especificações em linguagem natural).

cypress/e2e/step-definitions/: Contém os arquivos .js que traduzem os passos do Gherkin em comandos Cypress.

## 📝 Cenário Automatizado
O foco principal foi a validação do fluxo de login:

Feature: login SauceDemo

Cenário: Login com sucesso

Dado que estou na página de login.

Quando eu valido meu e-mail e senha.

Então eu tenho um login com sucesso.

## 🛠️ Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
Instale as dependências:

Bash
npm install

Abra o Cypress:

Bash
npx cypress open

Ou execute em modo headless (terminal):

Bash
npx cypress run


**Feito por: Bianca Lira**
**Linkedin:** https://www.linkedin.com/in/bianca-gomes-de-lira/
