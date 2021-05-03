# Codar.me - Desenvolvendo Software de Verdade 

Codar.me is an educational brazilian company localted in the city of Florianópolis in the state of Santa Catarina. I recently started a training from them, called "Desenvolvendo Software de Verdade", which will teach the development of a full stack application from web and mobile, using technologies such as:

* Javascript
* React e React Native
* NodeJS
* Docker
* Jest e React Testing Library
* Some more...

More information can be found here (PT-BR): https://codar.me/inscricoes.

The interesting part about this training is that it is not designed just to teach the technologies. The main goal of the course is to develop a **real application**, passing through the design of the windows of the application, design patterns, best practices, discussions on which libraries and dependencies to add to our application, making projects decisions, error handling and so on.

This is very useful to get a taste on how a real application is developed and the problems faced during the process.

# Pre-Course

Preliminar to the course itself there are some introductory courses that give an overview of the workings some technologies that will the used further. These introductory courses have each a folder in this repository, with the small projects that were built and the steps needed to get the final result. Also, each of these introductory courses have their own explanation notes on the technologies that were seen and how to reproduce the final results. 

The topics discussed in the introductory courses are the following:

* [**Introduction to Javascript**](https://github.com/jlggross/codar.me/tree/main/javascript-intro): Variables, Data Types, Logical Operators, Arithmetic Operators, Conditionals, Repetition Structures, Functions, Arrays, Strings, Arrow Functions, Classes, Promises, Async/Await, Fetch API, DOM interation, final project (frontend alone).
* [**Introduction to NodeJS**](https://github.com/jlggross/codar.me/tree/main/nodejs-intro): CommonJS, ESM, package management, downloading and publishing NPM packages, YARN, dependencies, HTTP Protocol, Docker and MongoDB, Usong docker-compose, routes management, database access, information retrieval, restify framework, middlewares, CORS cofifguration, error handling, multiple docker containers, final project (frontend + backend).
* Introduction to React: TODO
* Introduction to React Native: TODO

# Configuring your Environment

Some software you will need to run the class examples:

* Microsoft VSCode
* NPM and Yarn
* Node.js
* Git

In the root folder of the codar.me repository there is a file named [01-Instalacao-ferramentas.pdf](https://github.com/jlggross/codar.me/blob/main/01-Instalacao-ferramentas.pdf) with detailed instructions on how to install NPM and Yarn, Node.js and VSCode. These tutorial is in PT-BR and was provided by the RocketSeat team in the NLW5 event. 

If you face some issues with different versions of software, there is still another tutorial named [02-Atualizacao-versoes-diferentes.pdf](https://github.com/jlggross/codar.me/blob/main/02-Atualizacao-versoes-diferentes.pdf) that will guide you to updatye the version of either NPM, Yarn or Node.js. This is another tutorial provided by the RocketSeat team in the NLW5 event.

As for Git, you can download it following the steps described here: https://git-scm.com/downloads. I'm using Windows, so after downloading and installing Git a Git bash will be available in the VSCode terminal, which is very helpful to write Unix commands.

# Configuring VSCode

For the traning described here I used VSCode. VSCode provides some useful extensions and you could use some as well to enhance productivity. 

Some VSCode Extensions I use:
* Bracket Pair Colorizer
* EditorConfig for VSCode
* ESLint
* indent-rainbow
* lucy : Theme for VSCode
* Markdown all in One
* markdownlint
* Path Intelisense
* Prettier - Code formatter
* Settings Sync
* vscode-icons
* REST Client: Allow us to make API HTTP requests from VSCode

To configure some of the extensions listed above we have to acces the file settings.json of VSCode. Press CRTL + SHIFT + p -> Preferences - Open Settings (JSON). A JSON file will open. Add the following to the file:

```
"prettier.packageManager": "yarn",
"prettier.semi": false,
"prettier.singleQuote": true,
"prettier.trailingComma": "es5",

"editor.formatOnSave": true,
"editor.fontFamily": "JetBrains Mono",

"files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/node_modules": true
},
```

# Main Course 

As soon as I finish the introductory courses I will update this section with more information.
