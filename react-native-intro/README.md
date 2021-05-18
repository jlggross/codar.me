# React Native Introduction Course

# Summary

- [React Native Introduction Course]()
- [Technologies of this course]()
- [Course Classes]()
  - [Class 01 - About React Native]()
  - [Class 02 - Programs for React Native]()
  - [Class 03 - Creating a New Project]()
  - [Class 04 - Structuring the Project]()
  - [Class 05 - Creating a List]()

# Technologies of this course

# Course Classes

Important:

- To save space folders android/, ios/ and node_modules/ were migrated from one class to the next

## Class 01 - About React Native

Some questions:

- How react Native Works?
- What are the main differences between React and React Native?

Goal:

- Develop a simple TODO list application integrated with the back end

Resources:

- React native Documentation: <https://reactnative.dev/>
- React native offers fast refresh, so during development we can see the changes automatically loaded in the mobile view

Ionic vs. React Native:

- On Ionic the application is developed in a view similar to a browser (Web View), so it is not directly implemented in the target platform
- React Native, on the other hand, will map our JavaScript classes and objects to native objects on the target platforms (IoS and Android)
  - Performance using React Native is improved

Framework

- Expo is a framework for React Native: <https://expo.io/>
  - We are not going to use it in this course

React Native

- Developing an app with React Native is said to be hybrid.
  - Some people thing that hybrid development is just when we have an web view, like Ionic does
  - In fact, hybrid refers to the ability to develop your project in different programming languages, non native, such as JavaScript, and can mix this with native code. React Native gives this possibility.
- React Native compiles (builds) in native code.
- We can work on React Native with native code and with JavaScript.
- If we want to build a plugin for the smartphone camera we can do this with Java (Android) os Swift (IoS). We can build a bridge with this code (native code) and JavaScript. This is also called hybrid development, so not only related to having a web view or not.
- In resume, React Native is considered hybrid development even though it compiles to native code.

## Class 02 - Programs for React Native

Emulators:

- Used to emulate the mobile device
- Needed so we can test our application
- For IoS you need a Mac to test your app. Apple does not allow emulators on other operating systems
  - If you have a Mac, just download and install Xcode: <https://apps.apple.com/br/app/xcode/id497799835?mt=12>
  - If you don't you can't test it.
- For Android you can download Android Studio: <https://developer.android.com/studio>

Environment Setup:

- Just follow the instruction here: <https://reactnative.dev/docs/environment-setup>
  - Go to 'React Native CLI QuickStart'
  - Choose 'Android'
  - Follow the Steps for your OS

## Class 03 - Creating a New Project

- React Native CLI (Command Line Tools): <https://github.com/react-native-community/cli>
- To create a react native app we will use the command:

```bash
npx react-native init MyApp
npx react-native init todoList
```

- If you don't have react-native installed yet, then you will be asked to install it before creating the app

Differences from React:

1. We do not work with .css

- In the App.js file there is another style syntax
  - We use StyleSheet from the 'react-native' package

2. We do not work with native HTML

- Instead, we work with specific components from React Native
- Some examples: View, Text and StatusBar
  - View is like a <div>
  - Text is like a <span>
- These components are later used by React Native to make the bind to the final build with native code

Running the app:

- Enter the todoList/ folder and run the server:

```bash
yarn start
```

- Also, we run the emulator:

```bash
yarn run android
```

- `yarn run android` alone runs the server and the emulator, but it opens a separate window for the server. So, running first `yarn start` in the terminal keeps the logs of the server inside the VSCode IDE.
- The React Native project is loaded inside the emulator

Problems:

- I had some trouble with the Android Emulator. You have to make sure you follow the documentation steps before running the application.
- In my case I needed to install Android 10.0 (Q), even though Android 11.0 (R) already came with Android Studio
- Also, I had to install a Virtual Device, with didn't came in the Android Studio installer.

## Class 04 - Structuring the Project

- When we create the app an initial structure is created

Structure

- todoList/index.js :

```javascript
// from
import App from './App'

// to
import { App } from './src'
```

- src/ folder : With an index.js file

```javascript
import { View, Text } from 'react-native'

export const App = () => (
  <View>
    <Text>Text</Text>
  </View>
)
```

Class Resume: We made a simple organization of the structure of our app. Also we created a Hello World screen with a clickable button.

## Class 05 - Creating a List

- Now we are going to build our application
- In the React Web course we used fetch API to handle requests. Now we are going to use Axios

1. Add Axios to your project:

```bash
yarn add axios
```

2. Clean cache and start emulator, run each in a separate terminal

```
yarn start --reset-cache
yarn run android
```

Components:

- ScrollView: Creates a list with the option to scroll through all items
- FlatList: Also have a scroll, but the elements are loaded just is the visible area (better for performance)
