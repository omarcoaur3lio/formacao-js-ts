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
    <a href="./README.md">
    <img alt="Leia em português" src="https://img.shields.io/badge/-Leia em português-000?style=flat&logo=google-translate&logoColor=000&labelColor=E1E1E6" />
</a>
</p>

## :speech_balloon: Overview

This project was developed during the third module of the React JS track of [Rocketseat's](https://www.rocketseat.com.br) Ignite program.
<br />
The project consists of using issues from a GitHub repository as a source of content for a blog.
The application uses the [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user) to display user information, the [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue) for full display of an issue (post) and the [GitHub Search API](https://docs.github.com/pt/rest/search) to search for specific terms in the repository issues.

### Features

- User Profile: Displays GitHub user information such as avatar, number of followers, name, etc.
- Post Listing: Listing of all issues (posts) in the repository, allowing you to filter and view a summary of the content.
- Post Page: Allows complete visualization of an issue, transforming content written in Markdown into HTML.


<br />

Below are some of the concepts put into practice during development:

- React Hooks (useState, useCallback, useContext)
- API consumption with axios
- Styled Components
- ContextAPI
- Routing with React Router
- States and immutability

## :camera: Preview

<div align="center">
  <img src="./.github/cover.png" width=80% />
</div>

## :rocket: Execute the project

```shell
# clone the repository
git clone https://github.com/omarcoaur3lio/github-blog.git

# access the project folder
cd github-blog
```

To run the project, it is necessary to create a `.env` file in the root of the project containing the user's GitHub username and the name of the repository that contains the issues.

```shell
# create the configuration file
touch .env

# or use the example file
mv env.sample .env
```

Run the project

```shell
# install the dependencies
npm install

# initialize the project
npm run dev
```

## :rocket: Technologies

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
