## Petfood Pagarme
![Badge](https://img.shields.io/static/v1?label=DH&message=DOSOMETHINGGREAT&color=0070f3&style=<0070f3>&logo=rocket)

### Projeto

É uma aplicação Node.js Back-end de uma loja virtual fictícia para PetShop, onde seu intuito principal foi aplicar o Split de pagamentos do [Pagarme](https://pagar.me/) junto ao micro framework Express.


### Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

### Padrões de Código

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

### Requisitos básicos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- [Git](https://git-scm.com)

O projeto pode ser construído com npm ou yarn, então escolha uma das abordagens abaixo caso você não tenha nenhum instalado em seu sistema.

O Npm é distribuído com o Node.js, o que significa que quando você faz o download do Node.js, o npm é instalado automaticamente no seu computador
- [Node.js v14.16.0](https://nodejs.org/) ou maior.

Yarn é um gerenciador de pacotes criado pela equipe do Facebook e parece ser mais rápido do que o npm em geral.
- [Yarn v1.22.5](https://yarnpkg.com/) ou maior.

Além disso, é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

### :information_source: Como executar

Siga as instruções abaixo para baixar e usar o projeto deste repositório:

```bash
# Clone este repositório usando SSH
$ git clone git@github.com:daniel21h/petfood-pagarme.git
# ou clone usando https
$ git clone https://github.com/daniel21h/petfood-pagarme.git

# Vá para o repositório
$ cd petfood-pagarme

# Instale as dependências
$ yarn
```

Agora siga as instruções abaixo para configurar o banco de dados e as variáveis ambiente do projeto:

Antes de executar a aplicação, vá para o arquivo **server.ts** e realize as modificações indicadas, como user, password e database de acordo com as configurações do seu banco de dados. Lembre-se também de acessar **.env.example** para definir a secret do split de pagamentos.


```bash
# Executar projeto
$ yarn dev
```
---

Made with :blue_heart: by Daniel Hessel :wave:
