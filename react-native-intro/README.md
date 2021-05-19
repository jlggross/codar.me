# React Native Introduction Course

# Summary

- [React Native Introduction Course]()
- [Technologies of this course]()
- [Running the server and the emulator]()
- [Course Classes]()
  - [Class 01 - About React Native]()
  - [Class 02 - Programs for React Native]()
  - [Class 03 - Creating a New Project]()
  - [Class 04 - Structuring the Project]()
  - [Class 05 - Creating a List]()
  - [Class 06 - Style to our App]()
  - [Class 07 - Creating a Form]()
  - [Class 08 - Creating a new task]()
  - [Class 09 - Removing task from list]()

# Technologies of this course

- JavaScript
- React
- React Native
- Axios
- Yarn
- Android Studio/Emulator

# Running the server and the emulator

```bash
yarn run android
```

- The emulator and the server will start. If you prefer to have the server log in the terminal inside you IDE you can kill the server and run it separately:

```bash
yarn start --reset-cache
```

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
- React Native, on the other hand, will map our JavaScript classes and objects to native objects on the target platforms (iOS and Android)
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
- If we want to build a plugin for the smartphone camera we can do this with Java (Android) os Swift (iOS). We can build a bridge with this code (native code) and JavaScript. This is also called hybrid development, so not only related to having a web view or not.
- In resume, React Native is considered hybrid development even though it compiles to native code.

## Class 02 - Programs for React Native

Emulators:

- Used to emulate the mobile device
- Needed so we can test our application
- For iOS you need a Mac to test your app. Apple does not allow emulators on other operating systems
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

## Class 06 - Style to our App

- We are able to get the data from the API. Now its time to adjust this information in the screen.
- In this class we have created the styles of our components
- Also, we organized the components is separated files in the components folder
- Pay attention to the index.js file inside components/ that is used to export the components to the index.js file inside the src/ folder

## Class 07 - Creating a Form

- We added a textbox and a button to the app.
- The text inserted in the text box can be added to the task list after hitting the button
- The button was configured to it is only enabled it there is some text in the text box
- The next step is sending the new tasks to the API and just add them in the task list if the API returns success

## Class 08 - Creating a new task

- Our Form is ready, we just need to integrate it with the back end
- The Form will validate the text and if its ok, the onSuccess function will send the task to the back end

## Class 09 - Removing task from list

- In the web application there is a button to remove items
- In the mobile application the user experience has to be different, so to remove items we will use another method
  - We will use the Alert Object
- We added two functions to remove the task called onRemove and handleRemove

## Class 10 - Building the App (Android)

- Steps to publish a App in the Google Play Store: <https://reactnative.dev/docs/signed-apk-android>

1. Generating an upload key : To ensure the app is ours, and not a copy

```
keytool -genkeypair -v -storetype PKCS12 -keystore release.keystore -alias todoList -keyalg RSA -keysize 2048 -validity 10000
```

- This command creates a file release.keystore that holds a secret key
  - You have to put this file inside android/app/

2. Configure android/app/graddle.properties

3. Configure android/app/build.graddle

```javascript
signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }

        release {
            if (project.hasProperty('APP_STORE_FILE')) {
                storeFile file(APP_STORE_FILE)
                storePassword APP_STORE_PASSWORD
                keyAlias APP_KEY_ALIAS
                keyPassword APP_KEY_PASSWORD
            }
        }
    }
```

4. Enter folder android and run `./gradlew bundleRelease`

- It may take a while to create the .aab file (release app)
- File will be in android/app/build/outputs/bundle/release/app-release.aab

5. Enter Developer Account in Play Store: <https://play.google.com/console/signup>

- In your account, create a new app
- More info here: <https://support.google.com/googleplay/android-developer/answer/9859152?hl=pt-BR&ref_topic=7072031>
