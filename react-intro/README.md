# React Introduction Course

# Summary

- [React Introduction Course]()
- [Technologies of this course]()
  - [Packages]()
- [Course Classes]()
  - [Class 01 - What is React?]()
  - [Class 02 - Using Browser-Sync]()
  - [Class 03 - Adding elements to the DOM - Vanilla JS]()
  - [Class 04 - React createElement API]()
  - [Class 05 - Using JSX]()
  - [Class 06 - Beyond JSX]()
  - [Class 07 - React Fragments]()
  - [Class 08 - Class Components vs Functional Components]()
  - [Class 09 - Reusable Components]()
  - [Class 10 - Properties Validation with PropTypes]()
  - [Class 11 - JSX Interpolation]()
  - [Class 12 - Re-Render]()
  - [Class 13 - Styling with className and inline styles]()
  - [Class 14 - Event Handlers]()
  - [Class 15 - State Management with useState Hook]()
  - [Class 16 - Side Effects Management with useEffect]()
  - [Class 17 - Lazy Initializer with useState]()
  - [Class 18 - useEffect dependencies array]()
  - [Class 19 - Custom Hook]()
  - [Class 20 - Hook Lifecycle]()
  - [Class 21 - Lifting State]()
  - [Class 22 - Basic Forms]()
  - [Class 23 - Dynamic Forms]()
  - [Class 24 - Controlled and uncontrolled components]()
  - [Class 25 - Managing multiple inputs]()
  - [Class 26 - Sending Forms]()
  - [Class 27 - Ready-made solutions]()
  - [Class 28 - Generators]()
  - [Class 29 - Organizing the Application]()
  - [Class 30 - Components]()
  - [Class 31 - API Communication]()
  - [Class 32 - Removing Items]()

# Technologies of this course

## Packages

- react
- unpkg: CDN for npm packages.
- JSX/babel
- browser-sync

# Course Classes

## Class 01 - What is React?

- React is not a framework, it is a JavaScript library.
  - A library is designed to solve a specific problem
  - A framework gives functionality to work with a bigger set of problems
- Angular.js is a front-end framework, working with interface, DOM elements, HTTP requests, etc.
- React, on the other hand, is focused in DOM (Document Object Model)
  - React is a library to create user interfaces
  - Has a very big market, many companies use React
  - Its maintained by Facebook
- It is recommended to check the React documentation: <https://pt-br.reactjs.org/>

## Class 02 - Using Browser-Sync

- Browser-Sync is a tool that can do automatic reload of an HTML page after a change. It is very useful for testing.
- To download and execute browser-sync type the following commands in the terminal:

```bash
npm install -g browser-sync
browser-sync start --server --file --watch "." --no-open --directory
```

- Make sure that the message "[Browsersync] Watching files..." appears in your terminal, indicating that browser-sync reload functionality is active.
- Just go to <http://localhost:3000>, open your html file and check it reload as you make changes in your code editor and saves the file.

## Class 03 - Adding elements to the DOM - Vanilla JS

- React add elements to the DOM in the div with root id
  - Our application is created inside this div
- The index.html file of this class is an example of how react works underneath its interface

## Class 04 - React createElement API

- To import react its possible to use a CDN (Content Delivery Network)
- UNPKG is a CDN that statically references all npm packages, and provides links to the packages.
  - Its possible to reference a package using the path provided by UNPKG
  - The URL to import react: 'http://unpkg.com/react/umd/react.production.min.js'
  - The URL to import react DOM: 'http://unpkg.com/react-dom/umd/react.production.min.js'

Class resume: We created our first react element and inserted it in the DOM.

## Class 05 - Using JSX

- Creating elements with React can be confusing at some point, if the project expands and there are too many elements to manage.
- JSX: Created to allow the use of HTML directly into JavaScript
- To use JSX we have to compile/transpile the code to pure JavaScript before execution
- Babel compiler converts JSX syntax to pure JavaScript
  - We have to add the babel package to our project
  - babel package URl: 'http://unpkg.com/@babel/standalone@7.9.6/babel.js'

## Class 06 - Beyond JSX

- When using JSX we can add JavaScript code inside the HTML sentences in an interval specified with {}

## Class 07 - React Fragments

- Introduced React.Fragment to add multiple HTML elements to the DOM with React
- We can either use <React.Fragment></React.Fragment> or an empty tag <></>

## Class 08 - Class Components vs Functional Components

- So far we just saw the JSX syntax. Now its time to learn about components.
- We can work with components using two approaches:

  - Class Components: Defined in a Class
  - Functional Components: Pure JavaScript functions

- To execute a class component or functional component we use <Component /> instead of Component()

  - React expects us to use this tag syntax

- Component syntax:
  - <div></div>
  - <span></span>
  - <Component></Component>
  - <CreateANameHere></CreateANameHere>

## Class 09 - Reusable Components

Class resume: We created a function that was reused. Also, we created different function that receive arguments and those arguments are threated differently in each function. Check the examples.

## Class 10 - Properties Validation with PropTypes

- We must take some precautions to avoid our application from breaking.
- To use propTypes we have to change the react and react-dom libraries to a development version:
  - <http://unpkg.com/react/umd/react.development.js>
  - <http://unpkg.com/react-dom/umd/react-dom.development.js>"
- Component.propTypes is set with the validation

- Another way to make the validations is to use a prop-types library
- Add <https://unpkg.com/prop-types/prop-types.js> to your project
  - It is a library that does all the validation handling for us

## Class 11 - JSX Interpolation

- JSX interpolation: concatenate different JSX elements

## Class 12 - Re-Render

- Re-rendering is a functionally to add performance to our application
- When enabled just the parts that we want are re-rendered, not the whole page

- The great thing about react is that instead of rendering the entire application after a change, just the element that changed in the DOM gets rendered. The rest keeps still.
  - That is one of the features introduced by react

## Class 13 - Styling with className and inline styles

Class resume: Created a Box component with color and size to style different box elements

## Class 14 - Event Handlers

- Some events:
  - onCLick
  - onBlur
  - onChange
  - onMouseOut
  - ...

## Class 15 - State Management with useState Hook

- React.useState(initialState) returns an array with two values
  - The first is the initial state of the variable we want to monitor
  - The second is a function to set a new state
  - The initial state is a value we pass to React.useState for the initial state
- React.useState() is also called a Hook, because on every change we have in the state a virtual hook can be triggered (setState) to alter the state of our monitored variables
- We can have as make Hooks as we want

```javascript
const [state1, setState1] = React.useState(0)
const [state2, setState2] = React.useState(0)
...
```

- React Hooks were created to work with functional components in a straightforward way.
- When dealing with Class Components the re-render operations were defined inside the classes. But with functional components the re-render would occur re-executing the complete component.
  - The React Hooks will re-render just the parts that change

## Class 16 - Side Effects Management with useEffect

- React.useEffect(): Its a side effect function called every time a re-render of a component is done.
  - After the setState() Hook executes the useEffect() function is also called

## Class 17 - Lazy Initializer with useState

- When initializing a Hook with React.useState(initial) we can pass a callback as 'initial'
- In the class example the initial value of the Hook is executed just one time and every time the component changes a new rendering occurs

## Class 18 - useEffect dependencies array

- We can add a second argument to useEffect including all the variables useEffect must look at to be triggered.
  - It is called a dependency array
- useEffect will just execute if any of the variables in the array change

## Class 19 - Custom Hook

- We can create our own Hooks
- To create a new Hook we just need to create a new function

## Class 20 - Hook Lifecycle

Class resume: In this class we saw the order of execution of different Components, the order of re-rendering with nested components and also the order of execution of useState and useEffect

## Class 21 - Lifting State

- We lifted the state of the children components to be inside the parents component (App)
- State Collocation is the process to send the state back to the child, close to where it is going to be used

## Class 22 - Basic Forms

- Here we create a From using pure React, without any additional framework
- In react the best approach to retrieve values from a input is first specify a name or id for the element:

```HTML
<input id="myname" type="text" />
<input name="myname" type="text" />
```

Than, to retrieve the value of the input we use 'event.target.elements.myname.value'

## Class 23 - Dynamic Forms

- Class 22 was intended to understand how value retrieval works, but it is not the best way to do it in a real project
  - We were accessing 'name' with event.target.elements.name.value in function handleSubmit()
- Here we use React.useState(), which creates a Hook for 'name'. Its easier to manage 'name' this way.
- When the input changes, handleChange() is triggered and executes setName(), which alters 'name'. And when 'name' alters 'error' is calculated and used to display an error and enable/disable the Send button.

## Class 24 - Controlled and uncontrolled components

- New functionality to force lowercase in the input as the user types
- Uncontrolled components: The state of the component is not controlled by the application. Ex.: An input component that receives data from the user.
- Controlled components: The state of the component is controlled by the application. Ex.: The user types in a input component and as he writes the text is automatically set to lower case.
- Try writing some text in the input component with capslock enabled to see that the text stays lower case.
- For a UX point of view its important that the uses and the application see the same data. So, if the application expects the text to be lower case, instead of just getting the text from the input component and converting to lower case, we can also show this result to the user, so he knows what the application expects.

## Class 25 - Managing multiple inputs

- Now we have all the necessary knowledge to create a real form
- We create a state for every input
- We also created a handle do update variable changes using a structure with nested arrow functions

## Class 26 - Sending Forms

- handleSubmit() will be used to send the form
- Using fetch() and async/await we made a POST to localhost:3002/todos to send the data
  - localhost:3002/todos is not configured, so the fetch will return an error, but we can see that it tries to send, because the status of the button changes while trying to make the POST

## Class 27 - Ready-made solutions

- When working with forms we don't need to make all the management by hand, we can use a library instead
- Some options:
  - React Hook Form: <https://react-hook-form.com/>
  - Formik: <https://formik.org/docs/overview>
    - Its very easy to add validation into Formik using another tool called Yup: <https://github.com/jquense/yup>
    - Formik can get the messages that Yup provides and put inside the form management it does

## Class 28 - Generators

- Until now we saw how to create React applications, but this is not the way used in the industry
- The correct way of working is configuring imports, babel and other packages outside our html file
  - Example: babel can be configured as a project dependency.

1. To create a React project and configure its dependencies we run:

```
npx create-react-app <projectName>
npx create-react-app todo
```

- more info of create-react-app in the webiste: <https://create-react-app.dev/>

2. Go to todo/ and run `yarn start`

- 'react-scripts start' is executed, initializing our react project

3. class28-generators folder has all the files created by create-react-app, except for node_modules

## Class 29 - Organizing the Application

- The app created by create-react-app has a lot of files we don't need, so lets organize them
- First, create a folder pages/ inside src/
- Deleted files: logo.svg, App.test.js, App.css, reportWebVitals.js, setupTest.js
- Inside pages/: App.js (change name to home.js)
- File index.js has been cleaned

## Class 30 - Components

- Now we are going to break our Home() function into components
- A component should begin its name with and upper case letter
- We divided you webpage into components: Form(), TaskList(), Task() and Home()
- Each component has a file in components/<componentName>/

## Class 31 - API Communication

- The items we are going to create have to be added to an API
- To develop the API we will use the website JSONPlaceholder: <https://jsonplaceholder.typicode.com/>

  - It does a fake backend, so we don't have to create it.
  - It has some available paths, such as todos/ : <https://jsonplaceholder.typicode.com/todos>

- Just remember, to load our project, you have to run `yarn start` and wait for the server to run at <http://localhost:3000/>

1. In the home.js file create a useEffect callback that will run every time we change the state of the hooked variables.

- The useEffect callback will be as follows:

```javascript
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => setState(json))
}, [])
```

- This piece of code will run just in the mount of the component

2. We also have to change our component TaskList, because its <li> tag was printing {item.text}, but now we have to change to {item.title}

3. How to create a task in the back-end using JSONPlaceholder?

- Let's check the code provided in the website in section 'Creating a resource': <https://jsonplaceholder.typicode.com/guide/>
- This code is added in the home.js file

4. We also added a new style to the index.css file, which is the same from the project create in the javascript course

Class Resume: We made our application communicate with an API

## Class 32 - Removing Items

- To remove items we will create one more component
- In file TaskList/index.js we are going to create a TaskItem component

1. Create the TaskItem component

- TaskList now has the code:

```javascript
<ul id="tasks">
  {tasks.map((item) => (
    <TaskItem key={item.id} {...item} />
  ))}
</ul>
```

- The destructuring operator is used to add all the properties to the component, without the need to add each manually, such as id={item.id}, title={item.title}, and so on.

1. To delete an item we are going to make another fetch from the API.

- In this URL <https://jsonplaceholder.typicode.com/guide/>, go to 'Deleting a resource'

2. The delete method will be available in home.js, decoupled from the component.

- In TaskList/index.js we just make a call for onRemove(), to remove the item, instead of putting inside TaskItem all the logic to remove the item
