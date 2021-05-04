# Node.js Introduction Course

This course is an introduction to node.js. The topics covered in this course are the following:

* CommonJS and ESM modules
* Package management using NPM and Yarn
* Downloading and publishing packages with NPM
* Project dependencies and devDependencies
* HTTP Protocol
* Docker and MongoDB
* Using docker-compose
* Routes management
* Database access and information retrieval
* Restify framework and middlewares
* CORS configuration
* Error handling
* Multiple docker containers and communication between them
* Final project (frontend + backend)

In this repository you can have access to all the classes from this course. Each class has an specific number and name, so it is easier to identify the classes content. There are a total of 23 classes and a final project with 5 steps.

## About the classes

Each class has code sufficient to execute without any modifications, you'll just need to download the dependencies and devDependencies of each class before running it. Please check the section on how to configure and download the required software to run the code for each class.

## Configuring your Environment and VSCode

I have already written a section on these two topics. You can see them here: 

* [Configuring your Environment](https://github.com/jlggross/codar.me/blob/main/README.md#configuring-your-environment)
* [Configuring VSCode](https://github.com/jlggross/codar.me/blob/main/README.md#configuring-vscode)

# How to run each class

First of all you need to choose one class and download its contents. From class 04 onwards we start to have dependencies and devDependencies so we have to download them before executing the code from the class. 

If you already have yarn installed in your system, from the terminal, you just have to go to the folder of the class and run:

```bash
$ yarn install --production=false
```

Yarn will look the depndencies in the package.json file and download it. Also, as specified by option --production=false, we say to yarn that our class is not yet ready for production, so it will also download the devDependencies.

After the download of packages is complete you can either run the class code using one of the following options:

```bash
$ node index.js
``` 

or 

```bash
$ yarn start
```

The first option is for the classes where we haven't configured a script in package.json. The second option is for those classes where **nodemon** is included in the dependencies.

# Classes details

Here you are going to see some detailed explanation about each class from this course. 

## Class 01: Configuration and running first script with node.js

The configuration steps covered in a section above. To run the first node.js script we have to:

1. Select the Git bash terminal in VsCode
2. In the terminal, go to the file's folder and run the command `$ node index.js`

We can check the node.js version with `$ node -v`

## Class 02: Modules - CommonJS
* Modules is a way to break our code into separate files 
* We have two ways to create modules:

1. CommonJS
* It is not the official way of creating modules, but it's been used before ESM was created
  * We create a separate file for our function and use the 'module' object from node.js with the 'export' method to export the function. This can only export one function.
    * If we want to export more function then we have to create and object containing the functions and export the object
    * In the file we want to use the exported function we just use the 'require' method

2. ESM - ES Modules - EcmaScript Modules
* EcmaScript is the oficial JavaScript programming language name.
* ESM is the official way to implement modules in JavaScript. 
* You can find many references to ESM in the JavaScript documentation.
* Is the more recent approach, coming since 2015.

## Class 03: Modules - ESM
* First of all we have to create a file called 'package.json' and insert:

```JSON
{
  "type": "module"
}
```

* This is needed so **node** can recognize our JavaScript files as modules, allowing them to import other modules
* We can also re-export all the function of a .js file

## Class 04: Package Manager
* By default node.js comes with npm (Node Package Manager) package manager installed
* We can check the version of npm with `npm -v`
* Website www.npmjs.com to check available packages to download/install
* Another package manager is yarn (Yarn Package Manager)
  * yarn was created to solve some issues related to npm
  * Installing yarn https://yarnpkg.com/getting-started
  * yarn also uses package.json for the project's configuration

1. Create a package.json file with yarn

```bash
$ yarn init
```

Some values are required when running `$ yarn init`: 
* name: choose name (we chose 'modules')
* version: choose version (we chose 0.0.0)
* description: write description
* entry point: which file is the first to run when we execute the application
* private: true
  * If 'private' is set to 'true' than the package will not be published.

2. To publish our package

```bash
$ npm publish
```

3. Adding dependencies to the project

Example:

```bash
$ yarn add react
```

* This add software/package dependencies which are a necessity to development the project

4. Adding devDependencies to the project
```bash
$ yarn add --dev @codar/eslint-plugin
```

* This add devDependencies to our project. It does not add code to the project. Instead it adds resources to help the project's development.
  * This will also add a new line in the package.json file

5. Install project's dependencies

```bash
$ yarn install
```

## Class 05: Creating a NPM account, Publishing a package
1. We create an account in NPM: https://www.npmjs.com/signup

2. Login to npm
> npm login

3. Check project name on npm website
  * First we have to check if the package name exists
  * Go to https://www.npmjs.com/package/<package name>
  * If the page you try to access does not exist, than you can create a package with that name to publish

4. We create a package with yarn
  * Enter via terminal to the folder you want to create the package
  * Initiate the package:

  ```bash
  $ yarn init
  ```
  
  * name: resume-jlggross
  * version: 0.1.0
  * description: João Gross Resume
  * entry point: index.js
  * author: João Gross 
  * license: MIT
  * private: false

5. We add 'module.exports = "João Gross"' to our index.js file

6. We publish the package in the NPM website

```bash
$ npm publish
```

7. Check package in https://www.npmjs.com/package/resume-jlggross

8. Now we make modifications on our package and try to publish again
	* This yields an error because we changed the package, so we have to publish
	a new version.

9. Change package version
	* Open file 'package.json' and alter the version to 0.2.0
	* Now we can publish with 'npm publish'
	* We can also check the new version at https://www.npmjs.com/package/resume-jlggross

10. At https://www.npmjs.com/package/resume-jlggross run 'Try on RunKit'

## Class 06: Scoped Packages
* Go to you npm profile page.
* You can see a 'Packages' tab and an 'Organizations' tab.
* The 'Organizations' tab is related to scoped packages
	* https://www.npmjs.com/package/@codar/eslint-plugin is an example of scoped package
	* The URL of these kinds of packages has the organization identified with an '@',
	in the case above it is '@codar'. The package name is 'eslint-plugin'.

Steps
1. Create and Organization. It will be 'jlggross-projects' in our case

2. Open file 'package.json' and alter the package name:
  * "name": "resume-jlggross" => "name": "@jlggross-projects/resume-jlggross"

3. Also configure the package to be public:

```JSON
"publishConfig": {
    "access": "public"
  }
```

4. Login to npm and publish the package
```
$ npm login
$ npm publish
```

5. Check package online: https://www.npmjs.com/package/@jlggross-projects/resume-jlggross

## Class 07: Install Dependencies
* To install a package we use:

```bash
$ yarn add package-name
$ yarn add resume-jlggross
```

* yarn checks the package's name in the npm listing and add the dependency to the package.json file
* When we add a package to our project yarn creates a node_modules folder and download the package

* To install a specific version of the package:
```bash
$ yarn add package-name@version
$ yarn add resume-jlggross@0.1.0
```

* To use the package we have to refer to the module in a js file:
```javascript
const about = require("resume-jlggross")
```
  * Here we created a javascript file named resume.js

* Than we can run resume.js file with node:
```bash
$ node resume.js
```

## Class 08: HTTP Protocol (Theory)

* Composed of 3 parts:
  * Address
  * Headers
  * Body : body of the requisition

* We have a request and then a response.
  * Request and response, both work with the HTTP protocol.

* Address: We use URL (Universal Resource Locator)
  * Full URL: http://www.google.com/search?q=codarme
  * URL structure:		
    * Protocol: http://
    * Host: www.google.com
      * Subdomain (optional): www
      * Unique identifier inside a TLD, also called domain: google
      * TLD (Top Level Domain): .com
    * Resource: /search
      * This is the resource we want to access in the server
    * Query string: ?q=codarme 
      * The parameters to the 
      * Used to filter data in the back-end

* Header: Used to provide information for requests e responses. They give context to the request.
  * Content type: Specify the type of content
  * Origin: URL origin
  * Authorization: Tell who is logged in the application

* Body: Totally related to the header's content type. The content of the body is also called payload.
  * Exists only for PUT and POST requests
  * Does not exist for GET and DELETE requests
    * The GET response has a body (payload)

* HTTP Protocol Methods (or Verbs)
  * GET: Get resources
  * POST: Create resources
  * PUT: Alter resources
  * DELETE: Remove resources
  * Others

* Response : Status Code
  * Contains the status code plus the text of that status code
  * With this information we can know how the request ended.
  * Some Status Code:
    * 404 : Not found
    * 100 - 199 : Information codes
    * 200 : Ok
    * 200 - 299 : Success codes
    * 300 - 399 : Redirect codes
    * 301 : Permanent redirect
    * 400 - 499 : Client request error codes. The client has to deal with the error.
    * 500 - 599 : Server request error codes. The server has to deal with the error.
	
## Class 08: HTTP Protocol (Practice)

* We create our first node.js server/API
* The http package comes installed by default with node.js
* We define our server with callback and port to listen
* To run our server:

```bash
$ node index.js
```

* Accessing http://localhost:8080 in the browser we can check the results

------------------------------------------------------------------------
Class 09 - Docker and MongoDB (Theory)

* Docker is a tool designed to make it easy the creation, deploy, and execution
using containers.
* A container is a unit of software that encapsulates the code and all of its 
dependencies to execute the code in a fast and reliable way regardless of the
environment
	* Includes everything that is necessary to run the software, such as the code
	itself, system tools, configurations 

* Access https://www.docker.com/, download and install it

* Check docker version:
> docker -

* Docker images: Similar to a virtual machine, but lighter. A container run 
from a docker image
	* At Docker Hub we have a bunch of freely available docker 

* MongoDB docker image
	* Go to https://hub.docker.com/_/mongo
		* Oficial mongo docker image
	
	* To download the docker image from docker hub:
	> docker pull mongo
	
	* After downloading the image we can check the image locally:
	> docker image ls
	
	* Run docker:
	> docker run --name mongodb -p 27017:27017 -d mongo:latest
		* mongodb: container name
		* 27017:27017 : Port to access docker. Makes a bind of the internal port 27017
		of the docker container to an external port (outside the container), which
		is also 27017.
			* The port in the left is the external port
			* The port in the right is the internal port
		* -d: To run in background
		* mongo:latest : Specifies the image we want to upload to this container
			* Using just mongo also works, and docker will get the latest version
			* We can specify the version
	
	* Check running containers:
	> docker ps

	* Stop docker container:
	> docker stop mongodb

	* Check stopped containers:
	> docker ps -
	
	* Start container again:
	> docker start mongodb

	* Restart container again:
	> docker restart mongodb

	* Destroy container: 
	> docker rm -vf mongodb

	* Execute docker container (after running it):
	> docker exec -it mongodb bash
		* -it : interactive
		* mongodb : container name
		* bash : command we want to access inside the container. Bash is to access 
		the container's terminal

	* Check mongodb version inside the container:
	> mongo --version

	* Get inside mongodb:
	> mongo -u root -p
		* password: 

	* With mongodb running in a docker container we can create an application and 
	connect to this database

------------------------------------------------------------------------
Class 09 - Docker and MongoDB (Practice)

* docker-compose : Another way to run containers

* Install docker-compose: https://docs.docker.com/compose/install/

* Check if docker-compose is installed in our system:
> docker-compose -v
	
Class09 - Practice:
* We created a folder 'api' and a file named 'docker-compose.yml'
* Go to VSCode extensions and install YAML
* Open docker-compose.yml and configure the file
	* See how it is configured in the class09/api folder 
* We have to enter at folder api through the command line
* To run the docker compose:
> docker-compose up -d
	* If the container named in docker-compose.yml is already running an error 
	will pop. You have to make sure the docker image is not running. It is 
	possible to delete the container with:
	> docker rm -vf mongodb
* You can check if the docker image started with:
> docker ps -a
* Enter container bash:
> docker exec -it mongodb bash
* Enter mongodb:
> mongo -u root -p
* Show dbs:
> show dbs

* To put the container down:
> docker-compose down
	* Checking 'docker ps -a' will not list the container anymore

* To restart container:
> docker-compose restart

Docker Compose
* Much simpler command line way to run a docker image
* The downside is to configure a file docker-compose.yml
* But after the file is configured is is much more easier with docker-compose
* Instead of executing each docker image by hand with 'docker run', and 
and linking them manually, with docker compose we have a single file to do this 
orchestration and put up all the services/containers at once. 
* This lessens the admins or developers responsibility to manage and deploy and
to worry with running all the commands to run the	services and its dependencies.
 
------------------------------------------------------------------------
Class 10 - Working with databases

1. Go to 'api' folder and run '$ yarn init'. A file package.json is created

2. '$ yarn add mongoose'. mongoose is a dependency. It is a RM, a library used
to connect to the database. It has various methods to manipulate the database.

3. '$ yarn add --dev nodemon'
Nodemon is used to run our server in simpler way

4. index.js runs our server. It is basically the same code from class08, where
we created our first http server. But now we have configurations for the database
too.

5. The connection to the database can be done with 'mongoose.connect()'. To 
configure this method we have to check the information configured in docker-compose.yml.

6. Put docker image up with '$ docker-compose up -d'. You can check running containers 
with '$ docker ps -a'

7.We run our server '$ node index.js' and can access it in the browser through
http://localhost:8080/ 

Resume: We put up a docker container with mongodb running and configured mongoose
to access it. In the server we first inserted a piece of data to the mongo database
and later we read this information and send it to the front-end user (browser).

* Reminder: Before all that we had to configure docker-compose.yml and create
a package.json file with 'yarn init' to specify our project's dependencies.

------------------------------------------------------------------------
Class 11 - Creating Routes

1. We added to the package.json file the following:

"scripts": {
    "start": "nodemon index.js"
}

It creates a script named 'start'. So running '$ yarn start' will run the 
script. The script runs 'nodemon index.js' running our server. Instead of 
using 'node index.js' to run the server, nodemon will stop and restart our 
server automatically every time we alter and save index.js

Nodemon is a good tool for a developing environment.

Try altering the index.js file and save it. Keep an eye at the terminal to 
check the server being restarted by nodemon.

2. We altered our server so it can send different messages to the user 
based on the url pathname. 

If the client enters in 'localhost:8080/users' 
than it will send the front-end the users from the mongo database.

If the client is at 'localhost:8080' or any other url path, than it send 
the client a message 'Another message'.

Resume: We created two routes for our application. One route is 
localhost:8080/users and all other url paths. For each of the two groups of 
urls we had an specific message sent to the client.

------------------------------------------------------------------------
Class 12 - API Requests

1. To simulate POST requests we actually have to build a html page a force 
a post. To avoid it we can use an application called Insomnia. You can
download the software here: https://insomnia.rest/download

2. Go to the command line and start the server with 'yarn start', which
will run our script configure in package.json

3. Start Insomnia software and create a new request (CTRL + N). Access
localhost:8080/users and select a GET or POST method. When you run the 
request you will see the return from the server on the console.
	* Insomnia is a software to work with HTTP requests.

Other alternatives:

1. Besides Insomnia there is still another application we can use fro HTTP
requests. It's called Postman: https://www.postman.com/downloads/.

2. There is a web version to mock api too: https://hoppscotch.io/pt-br

3. Command line approach using curl to mock APIs:

> curl -X POST 'http://localhost:8080/users'
> curl -X GET 'http://localhost:8080/users'

* Tip: In VSCode you can open two terminal with a split screen. In one
you run 'yarn start' to run the server. In the second you can use curl 
to mock requests.

4. VSCode Extension: REST Client
Allows us to send HTTP request and view the response in VSCode directly.

To use the extension first write either one of the requests below:

GET http://localhost:8080/users
POST http://localhost:8080/users

Copy one of them, press CTRL + SHIFT + p, type 'rest send', and select
the option 'Rest Client: Send Request'. Rest Client will understand the
request copied in memory (CTRL + C) and run the request/response in a
new tab.

------------------------------------------------------------------------
Class 13 - Registering data to database

1. When we use mongoose to save a data to the database we can create a data
to store and call the save() method:

	const user = new UserModel({
		name: 'João Gross',
	})

	// Save data to database
	await user.save()

We use await alongside the save method, because it returns a promise.

Running a curl -X POST 'localhost:8080/users' we are able to create 
a new entry to our database.

2. Now we want to POST data from the front-end, e.i., the client inserts
data in the front-end (browser) and we will get it on our server side
application

First we can prepare Insomnia to simulate a a POST. We create a new POST
request to localhost:8080/users and in the tab 'Body' we create a 'FORM 
URL Encoded'. We insert a pair name-value, such as 'name' - 'João Gross'.

Now we can prepare our server to receive this data. We create a callback
for the servers 'req' parameter:

req.on('data', callback) : On an event 'data' a callback is triggered.

The callback above is something similar to this:

let body = []
callback = (chunk) => {
	body.push(chunk)
}

So here we wait all pieces of data to come from the front-end client,
and add all this pieces to a 'body' variable.
	* You will see that this pieces of data come in the form Buffer bytes.

Later, when all pieces of data arrive, another event will be triggered 
by node.js, called 'end'. We create another callback to this event.

To make the POST in the front-end we have to send a message in Insomnia.

------------------------------------------------------------------------
Class 14 - Dynamic Routes

We encapsulated the behavior for each route and method inside a 'routes'
variable. Our code is now cleaner and easier to read.

We also created new files so we could put each functionality of our 
application in a different file.

------------------------------------------------------------------------
Class 15 - Database Update

1. Always remember to enter the applications folder and run 'yarn start'
to run the script defined in package.json

2. We created another function in controller.js to update the database.
We configured another request at Insomnia to make a Put Request. Using
'Form URL Encoded' we make a request Put of 'id' and 'name'. 
	* The 'id' will tell us which register to update
	* 'name' will be the new name set to the register with id equal to 'id'.

In the update function from controller.js we use mongoose method updateOne
to make an update to a single register, identified by its id.

3. To make the PUT request, first make a GET request and in the listing 
choose a register and save its id. This id will be used in the PUT request.
In the PUT request insert the following information to the FORM:

id - saved id
name - new name

After sending the message the updated will be completed, updating the name
to the register with id 'id'.

4. Now we can make a GET request to check the altered register. In the 
listing of user search for the id you previously copied and check the 
new name (updated).

------------------------------------------------------------------------
Class 16 - Database remove

1. Similar to the update operations, we first have to create a DELETE 
request in Insomnia. We use 'Form URL Encoded' to send the id we want to 
remove from the users table in mongo db.
	* We just have to specify the id to remove the register.

2. After running the DELETE operation we can check the user listing in the
GET Request tab of Insomnia.

3. The remove function in controller.js uses the deleteOne method from 
mongoose to DELETE a register from the database.

------------------------------------------------------------------------
Class 17 - API, Frameworks (Theory)

What is an API (Application Programming Interface)?
* Every exposed interface that a software or developer can use
* Methods of data structures are APIs
* API is not just related to the back-end, but it is the most common use.

Framework
* It is a software package that implements many tasks, making the developer
job easier, avoiding to re-implement some functions

Node.js frameworks
* Express: The most used framework to Node.js. It is very simple to use and 
abstracts a lot of operations. 
	* Works with middlewares. We can add code inside our routes.
	* The downside is that it has some security issues.
	* Has a vast collection of plugins.
	* Easy to integrate with a lot of different services.

* Koa: Developed by the same team that created Express. It is intended
to be an improvement over Express. 

* Restify: Designed to create Node.js REST . Has many functionalities similar
to Express.js.
	* Has many built-in plugins

* Nest.js: Robust, has been used to work with big applications, like enterprise
applications.
	* Very good documentation.
	* Has a lot of built-in functionality. No need for external software for
	most uses.

* hapi

* Micro: Created by Zeit. Designed to work with microservices and
serveless applications

------------------------------------------------------------------------
Class 17 - Restify Framework

Now we begin a new project. In this class we will create our first restify 
server.

1. First of all we start a project with '$ yarn init'. package.json is created.

2. '$ yarn add --dev nodemon'

3. '$ yarn add restify'

4. We create a file index.js and start coding our server.

Restify manages the routes for us. We don't need to worry about that as
we did for our pure node.js server.

5. Remember that we can use the VSCode Plugin to test HTTP Requests

------------------------------------------------------------------------
Class 18 - Middlewares

Middleware are functions that after execution they can chain with other
functions.

Middlewares have a parameter that is used to call the next middleware to 
execute.

Route resolution: Restify checks the client URL (path) and its request. 
Before deciding which route the client request came from, the pre() 
middleware functions are executed.

Two types of middlewares
* pre() : Executed before the routes resolution. Before restify can decide
which route to send a client request, all pre() functions are executed.
	* In a pre() function we can alter the routes resolution

* use() : Executed after the routes resolution. When a use() function 
executes the route is already defined. We already know which method to call
based on the URL the client made the request.

1. In our code example, the route for '/' with a GET request goes through
pre(), use() and then get(). The console.log() statements show how the 
middlewares chain between each other.
	* Check result for GET http://localhost:8080/
	* Check result for GET http://localhost:8080/users
	* To use the VSCode HTTP request plugin we have to copy the request and 
	press CTRL + SHIFT + p, write 'rest client' and select option 
	'Rest Client: Send Request'
		* It is import to make this procedure in the specified order, because
		copying the text and clicking anywhere else in the workplace it sufficient
		for the plugin to not work properly. 

------------------------------------------------------------------------
Class 19 - Restify Middlewares

Plugins: http://restify.com/docs/plugins-api/

sanitizePath
* Cleans sloppy URLs. Used before the route resolution.

acceptParser
* Parser the Accept header

Resume of class: Middlewares were configured.
------------------------------------------------------------------------
Class 20 - Routes and Parameters

1. We can create specific routes for each user by their 'id'. 

2. We copied the files database.js and docker-compose.yml from classes (see class16).
We also updated the file package.json, adding a script to run nodemon

3. In the terminal we have to add mongoose to our project:
> yarn add mongoose

4. The 'routes' folder from class16 has also been copied to the restify project.
It includes the 'users' folder.

5. File index.js from routes folder has to be updated with a route including the users id:.
The structure where the routes are defined has been also changed.

6. model.js stays the same

7. controller.js has been modified.
* parseBody has been deleted, because a middleware from restify now does the 
parseBody job.
* the use of parseBody in other functions has also been removed

8. res.write and res.end has been switched to res.send()

9. We added a map function to the routes at index.js (server file).

Both work:
	server.get()
	server["get"]()

------------------------------------------------------------------------
Class 21 - CORS (Theory)

* Browsers have a security mechanism called Same-Origin-Policy

* Same-Origin Policy: Responsible for restricting the way a document or script
from an origin can interact with a recourse from other origin
	* It's a security mechanism to isolated potential malicious files

* Cross-Site Request Forgery - CSRF: A common attack where a malicious website
tries to take advantage of the cookies storage system of the browser
	* For all HTTP request, the browser adds all HTTP cookies associated to 
	a certain domain, which is useful for authentication and session configuration
		* You can make login at a website, with your user and password, and later
		when you access that website again the cookies stored in the browser can
		be used to make an automatic login
	* This forgery technique can be used to steal login information form a user
	or even enable the attacker to access the logged area of the website in your 
	name.

* Cross-Origin Resource Sharing - CORS: Standard that eases the policy of the 
same origin, allowing applications to access resources from other origins
	* A CORS error tries to avoid the CSRF attack.
	* So resources shared in the same origin may trigger a CORS error if not
	implemented correctly. That is why projects in javascript tested in the
	browser that share resources between files (import/export clauses) can
	lead to CORS errors.
		* To avoid this error in the browser we have to use a local webserver.

Resume:
* CORS eases the Same-Origin Policy implemented in the browser (security policy),
which is important to avoid CSRF attacks.

Project
* Link: https://github.com/Rob--W/cors-anywhere
* Description: The project in the link above allows a client to make an HTTP without
using the a server. This can be useful to avoid de CORS error, because HTTP requests
can only be done server to server.
* Usage: This link https://youtu.be/gPzMRoPDrFk?t=217 explains exactly how to use
the proxy server in the client to make an HTTP request to a server, without using 
our own server.

More on CORS: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS

------------------------------------------------------------------------
Class 21 - CORS (Practice)

Working with CORS in our program

1. We create an index.html in the root folder of the project (restify folder).
* It has a fetch api for 'http://localhost:8080/users'
* /user it the path defined in our routes folder, in the index.js file
* The index.html is a front-end file that access the path we defined in the 
back-end

2. We install the package browser-sync from npm:
https://www.npmjs.com/package/browser-sync
https://browsersync.io/
> npm install browser-sync
We use browser-sync to run the .html file in the background

3. Functions list, save, update and remove from controller.js
* list: We added a try/catch statement. 
* save: We added and async/await clause to execute user.save()
* update: We added an async/await clause to execute UserModel.updateOne()
* remove: We added an async/await clause to execute UserModel.deleteOne()
* Check file controller.js for more details.

4. On a second terminal tab we run the server:
> yarn start

5. Server at localhost:8080/users
* At the browser we can access our server at localhost:8080/users
* If the database has no information, an empty object will show up

6. Running browser-sync:
> npx browser-sync start --server --file "./*.html" --no-open --no-notify --directory

7. index.html at localhost:3000/index.html
* At the browser we access localhost:3000/index.html
* We can open the developer tools with F12 and check the console tab
* In the console tab we will se the CORS error.

	"Access to fetch at 'http://localhost:8080/users' from origin 
	'http://localhost:3000' has been blocked by CORS policy: No 
	'Access-Control-Allow-Origin' header is present on the requested 
	resource. If an opaque response serves your needs, set the request's 
	mode to 'no-cors' to fetch the resource with CORS disabled."

8. To make it possible for the server and the front-end to communicate
we go to the index.js file and add the CORS headers to the response:

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  return next()
})

With this piece of code we will no longer face the CORS error.

9. We also have to make sure the database is loaded, so we add 
require('./database') in the top of the index.js file
------------------------------------------------------------------------
Class 22 - Error handling

1. We created a new file error.js
* Class Error to throw errors

2. In index.js we can create a new listening event on 'restifyError'
that will catch all the errors of class Error()

3. We also created a simple authentication middleware, just to test the 
error messages

4. To run the project:
* Project dependencies: yarn install --production=false
* Mongodb Docker container: docker-compose up -d
* Server - Back-end: yarn start 
* Front-end: npx browser-sync start --server --file "./*.html" --no-open --no-notify --directory

* Make sure that the authentication middleware is not yielding any error, 
so we can test the front-end accessing the database

------------------------------------------------------------------------
Class 23 - Running API with Docker

* We have already created our API, but if we want to share with other 
developers, or keep developing it, a docker container will help encapsulate
our API into a single software unit.

1. In the docker_compose.yml file we create a new service called 'api'

* ports: We will execute at port 8080 and point inside the service to the 
port 8080
* working_dir: At first, our external api will enter docker, so we need to create a working 
directory
* volumes: All of our files, represented by a . will be transferred to the
docker working_dir 
* command: The command we will run inside docker (in the working_dir) to
start our api

2. Our database will no longer connect to the server in the localhost, 
the localhost now refers to the docker image. So in the database.js file we
have to make the following changes:

From this: mongodb://root:example@localhost:27017/api?authSource=admin
To this: mongodb://root:example@mongodb:27017/api?authSource=admin

* This is needed because the server will access mongo from the docker image
directly. 
* The services 'mongodb'' and 'api' are in the same network, so they can see
each other

2. Running docker compose:
> docker-compose up -d

3. We can check the docker images with:
> docker ps -a

4. To remove all docker images we can do:
> docker-compose down

5. To check the logs of the dockers images:
> docker-compose logs -f

6. Checking the api working
* After running step 2. we can check the api running at localhost:8080/users

Resume: Docker compose will create a network with the two services, 'mongodb'
and 'api', and the name of the services will be mapped to the IP of each 
respective container, so we can use the name as host (as seem in the database.js
file)

Important: Before running the server we have to install all dependencies
and devDependencies

> yarn install --production=false

------------------------------------------------------------------------
Git commands

This is a special note on git commands:

* Configure github access:
git config --global user.name "jlggross"
git config --global user.email "joaolggross@gmail.com"
git config --list # check the configurations

* Create repository:
git init

* Add files to a commit:
git add . 					# Add all files
git add <filename> 	# Specific file

* Status of files:
git status 					# Say if file has been created, deleted, modified

* Make commit:
git commit -m "My message"

* See commit history:
git log

* Associate git repository to local repository:
git remote add origin git@github.com:jlggross/codar.me.git

* Check repository linking to github:
git remote -v

	Expected output:
	> origin  https://github.com/jlggross/codar.me.git (fetch)
	> origin  https://github.com/jlggross/codar.me.git (push)

* Send commits to github:
git push -u origin main
git push									# Also works. Clean version

------------------------------------------------------------------------
Project - Step 1 - Creating the server and configurations

* The project is an extension of the TODO list project from the javascript
course.
* Now are project will include a server side too
* The project is divided in:

- web: todo list project from javascript course
- server: server side

* Let's start building our server.

1. Yarn Init. Go to the server folder and use the command:
> yarn init

	* server name: server
	* version: 0.1.0
	* entry point: index.js
	* private: true (to avoid committing to the npm website)

File package.json is created.

2. Add dependencies
> yarn add mongoose restify

3. Add devDependencies
> yarn add --dev nodemon

4. We created our middlewares, cors access, and server listening
at port 3002.

5. We add a script at package.json to use 'yarn start' to run 
'nodemon index.js'

6. We run 'yarn start' to start the server and we can access the server
at http://localhost:3002/. 

------------------------------------------------------------------------
Project - Step 2 - Retrieving a list from the backend

1. We created a new route to the TODOS list ('/todos')

2. To run the server go to the server folder and run 'yarn start'

3. In the frontend we created a onLoad() function that 
executes when the window loads.

4. We create a fetch() in the function onLoad() to get 
the information from our server at http://localhost:3002/todos

Resume: In this step we configured a new route in the backend 
at path '/todos' and also created a function in the frontend
to fetch data from the backend

------------------------------------------------------------------------
Project - Step 3 - Integrating with database

We are going to create the persistence of data in our database

1. Add a require('./database.js') to our index.js file in the server
* The database.js has the configurations to connect to the database

2. Remove active mongodb container and respective volume
> docker rm -vf mongodb
> docker ps -a 	# To check if the container is still active

3. We create a docker-compose.yml file
* ports: mongodb will be accessed at port 271017 and docker
will map to port 27017 internally when this access happen

4. Run mongodb docker container
> docker-compose up -d

5. When starting the server with 'yarn start' we should
see a message 'MongoDB: Connected!'

6. we create a module/todos folder with model.js and 
controller.js files inside it
* model.js: Defines the mongoDB schema
* controller.js: Will have the actions to create and remove
items. The list from controller.js is exported and imported 
in index.js.
	* The list of tasks is them passed to our route with path 
	'/todos'

7. Checking result in frontend
* We should see an empty list of tasks in the frontend
* Hitting F12 in the keyboard and going to the Network tab
we should see the todos path getting a 200 message from
the server and an empty list of values

8. We also created a POST route in the index.js file
* The routes could have been created in a separate file.
* This POST route uses a save method from the controller.
* We also created a save method in the controller.js file.
* The save function is not operational yet

------------------------------------------------------------------------
Project - Step 4 - Saving data in the API

1. In the controller.js file we created a new function 
addInDOM().

2. We have to have a more robust CORS control.
> yarn add cors
> yarn start

* We added a middleware to deal with cors

3. We changed the save function from controller.js
* The model.js had a simple typing error in the schema,
we changed 'test' by 'text'. It allowed the text inserted 
in the frontend to be added end sent to the backend with POST
(save method from controller.js)

4. In function addTask() from main.js we configured the fetch POST,
that is, saving a task in the DB. The fetch returns a promise and 
we take the promises return, pass to JSON and then add the task in the
DOM with function addInDOM()

Resume:
* Now when we open the frontend in the browser we have already
the list of tasks displayed (GET from the DB). 
* We also can insert another item, saving it to the DB
* We can check all the itens in the database through the link
http://localhost:3002/todos
------------------------------------------------------------------------
Project - Step 5 - Removing data from the DB

1. We modified function removeTask() from main.js to fetch each
by by its id. 
* If the response to the fetch was ok (200) then remove the element
from the DOM.

2. We created a remove function in controller.js

3. We also created a new route in the index.js file (server)
to delete the item from the database by the id

Resume: Our application can now insert (POST), read (GET) and 
remove (DELETE) tasks to and from the database. The application
is complete with a frontend and backend, a full stack web app.

------------------------------------------------------------------------
Project - Running

1. Install dependencies and devDependencies
> yarn install --production=false

2. Put mongodb service up in air
> docker-compose up -d

3. Start application
> yarn start

4. Open frontend
* Open index.html in the browser

Enjoy.

------------------------------------------------------------------------
