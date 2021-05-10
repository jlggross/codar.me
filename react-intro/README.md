# React Introduction Course

# Summary

- [React Introduction Course]()
- [Technologies of this course]()
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

# Technologies of this course

- react
- unpkg: CDN for npm packages.
- JSX
- babel

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