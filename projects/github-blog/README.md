<p align="center">
  <img src="./.github/header.png" width="100%" />
</p>
<br>
<p align="center">
  <a href="https://www.linkedin.com/in/omarcoaur3lio/">
    <img alt="Marco Aurélio" src="https://img.shields.io/badge/-Marco Aurélio-000?style=flat&logo=Linkedin&logoColor=000&labelColor=E1E1E6" />
  </a>
  <a aria-label="Completed" href="https://rocketseat.com.br/">
    <img src="https://img.shields.io/badge/Ignite-000?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgBxZc9UsMwEIVfoKHkCHsEH8E3CC0VvgG5gc0NcgP7BpTQ+QgOHZ2hpIKSLkgjeSIS2aOftfTNvImTGUVPq92VvEE6OqGt0EHoR+hNPx+QiFroOKMGCSgXDIxCt1iJUktO0C8YIKxEgfmVmyqmAdfghYRe4BbiL/35AWYGuEXB1A6M1AEGWPPiMcDAkdMABRpg2waCCqmvgT0Y6QMMDPBgqmNZbs9QK25x2sc6wIBXIhbGoG/Ln4VE4F+DcmEXOMmSGnjSMRsISsSYSMjEM7dwRAQEtzZsTtgYYyuo3CEwUGG+F3RQ1UNCd1gJOcFWT7JHZKLFIMPdaiOkn1lPPhcanBLsAZk4rxTZPQmJ6WFPyhpMuFzvurPv8p3hVehGaCP0jgSYVSHzwqv/uzAXCYK6Lcnaf4K6lP4K3SPRygkRxy8XDS6TsMWKXFl+s/WCTyQ0UcEe+qiT0BdbT+iQEMptALi8TXXIwJjbgGxKQ04DE2NuA3VOA7JPENRpWCEjJTLzBwzMMNX+FpToAAAAAElFTkSuQmCC&labelColor=E1E1E6&logoColor=000"></img>
</a>
    <a href="./README_en.md">
    <img alt="Read in english" src="https://img.shields.io/badge/-Read in english-000?style=flat&logo=google-translate&logoColor=000&labelColor=E1E1E6" />
</a>
</p>

## :speech_balloon: Visão Geral

Este projeto foi desenvolvido durante o terceiro módulo da trilha de React JS do programa Ignite da [Rocketseat](https://www.rocketseat.com.br).
<br />
O projeto consiste em utilizar as issues de um repositórios do GitHub como fonte de conteúdo para um blog.
A aplicação utiliza a [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user) para exibir as informações do usuários, a [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue) para exibição completa de uma issue (post) e a [GitHub Search API](https://docs.github.com/pt/rest/search) para buscar por termos específicos nas issues do repositório.

### Funcionalidades

- Perfil do Usuário: Exibe informações do usuário do GitHub, como avatar, número de seguidores, nome, etc.
- Listagem de Posts: Listagem de todas as issues (posts) do repositório, permitindo filtrar e visualizar um resumo do conteúdo.
- Página de Post: Permite a visualização completa de uma issue, transformando o conteúdo escrito em Markdown para HTML.


<br />

A seguir, alguns dos conceitos postos em prática durante o desenvolvimento:

- React Hooks (useState, useCallback, useContext)
- Consumo de API com axios
- Styled Components
- ContextAPI
- Roteamento com React Router
- Estados e imutabilidade

## :camera: Preview

<div align="center">
  <img src="./.github/cover.gif" width=100% />
</div>

## :rocket: Executar o projeto

```shell
# clone o repositório
git clone https://github.com/omarcoaur3lio/github-blog.git

# acesse a pasta do projeto
cd github-blog
```

Para rodar o projeto é necessário criar um arquivo `.env` na raiz do projeto contendo o username do usuário no GitHub e o nome do repositório que contém as issues. 

```shell
# crie o arquivo de configuração
touch .env

# ou utilize o arquivo de exemplo
mv env.sample .env
```

Execute o projeto

```shell
# instale as dependências
npm install

# inicialize o projeto
npm run dev
```

## :rocket: Tecnologias Utilizadas

  <a href="https://react.dev/">
    <img alt="reactjs" src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%FF5C00" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="typescript" src="https://img.shields.io/badge/typescript-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=2d6ee6" />
  </a>
  <a href="https://styled-components.com/">
    <img alt="styled-components" src="https://img.shields.io/badge/styled components-%2320232a.svg?style=for-the-badge&logo=styledcomponents&logoColor=D656A0" />
  </a>
  <a href="https://axios-http.com/">
    <img alt="axios" src="https://img.shields.io/badge/Axios-%2320232a.svg?style=for-the-badge&logo=axios&logoColor=7938E2" />
  </a>
  <a href="https://axios-http.com/">
    <img alt="react-markdown" src="https://img.shields.io/badge/React Markdown-%2320232a.svg?style=for-the-badge&logo=markdown&logoColor=FFF" />
  </a>
  <a href="https://axios-http.com/">
    <img alt="react-markdown" src="https://img.shields.io/badge/DayJS-%2320232a.svg?style=for-the-badge&logo=dayjs&logoColor=FFF" />
  </a>
<br>

<br />

<p align="center">
  Feito com :purple_heart:
</p>
