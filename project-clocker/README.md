# Project - Clocker

This project was created during a 8-hour the Webinar "Semana Full Stack sem custo", taught by Codar.me.
An application was developed from scratch to production.

The Webinars week was designed focusing on a real app, where the client wants to consume features of the application during the development phase. Small deliveries were made at each step of the development process, until conclusion.

Some steps of the Webinar:

- Project creation
- File configuration
- Buying the domain
- Development phases
- Putting app to production

## About Clocker

Clocker is an application that allows customers to schedule a time with a professional to perform a certain service. It can be used by any professional that has an agenda and needs to book appointments with its clients, such as doctors, hairdressers, equipment installers, etc.

## Technologies of this project

Tools:

- VSCode
- Figma (screen design)
- yarn
- git and gitk
- JavaScript

Packages / Frameworks:

- React / Next.js
- Chakra UI (Style)
- Formik (Form Validation)
- Yup (Form Schema)
- firebase (Database front-end)
- Node.js (back-end)
- firebase-admin (Database back-end)
- axios (Promise based HTTP client)

# Project Classes

This project was developed in five classes. Each one of them is detailed in the topics that follow.

## Class 01 - Creating the project and beginning the authentication (Next.js)

1. Create a Next.js app using a boilerplate: `yarn create next-app`

- Next-app creates the bases (bootstrap) for a Next.js app

2. Enter clocker/ and run `yarn dev`

- Starts a server for development
- On <http://localhost:3000/> the Next app will be running
- This URl has hot reload, so on every change on the code the result will appear in the URL

3. Project Structure

- pages/ : Every .js file is a page and Next.js does the page routing for us
- pages/\_api.js : Special file that encompasses all the project. This file runs before all the others. All pages will "fall" into_api.js
- pages/api/hello.js : A simple page. The hello.js file prints in the browser a value. Works as an API, where we can retrieve values from.

4. About the files

- pages/index.js : Has a simple React component using modules.css. 'styles' separate the layers of CSS so one layer does not affect the other. 'styles' is useful to make a CSS style configuration scoped to an specific React element

5. Crakra

- Crakra UI: <https://chakra-ui.com/>
  - For styled components

6. Figma

- Used to design the screens of our application
- App Screens:
  - Login : The professional providing the service performs his login.
  - Time Block : The client chooses a date and time for the service to be performed. Dates and times already taken by other clients will be unavailable.
  - Agenda : Area where the professional can see all of his appointments

7. Formik and Yup

`yarn add formik yup`

- Formik : Manage Form state.
  - Link: <https://formik.org/docs/overview>
  - Formik Hooks: useFormik
- Yup: <https://github.com/jquense/yup>
  - Used to create a validationSchema for Formik
- For some reason I still don't know, when using 'validateSchema' in useFormik with a Yup object, the 'errors' variable from formik always return an empty object
  - The problem appears to be the one detailed here: <https://github.com/formium/formik/issues/1180>
  - But, using formik version 2.2.8 seems to have this same issue.
  - I had to create a 'validate' variable with validation made by hand, and use it in useFormik, so formik.errors could work properly.
    - See 'Validation' here: <https://formik.org/docs/tutorial>
- In short, Yup was not needed, because validateSchema had this problem returning formik.errors an empty object (but i still kept Yup in package.json for reference)

8. Buying a domain

- <https://www.godaddy.com/>

9. To load SVG

- `yarn add @svgr/webpack`
- Configure next.config.js : <https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js>

10. Color Palette

- <https://flatuicolors.com/>

11. Firebase

- Firebase can be used for database and authentication
- If we have a small app and not so many data, Firebase is a good free option, because it has a considerably big free quota to use
- Create account: <https://firebase.google.com/>
  - Go to Console: <https://console.firebase.google.com/>
  - Add project / Create project]
  - Add Firebase to Web App
    - We don't need Firebase Hosting, because we are going to use Next.js Hosting
- Install Firebase: `yarn add firebase firebase-admin`
- Configure Firebase

  - Create folder config/firebase/index.js
  - In index.js insert code provided by firebase:

  ```javascript
  import firebase from 'firebase/app'
  import 'firebase/auth'

  const firebaseConfig = {
    apiKey: '******',
    authDomain: 'clocker-jlggross.firebaseapp.com',
    projectId: 'clocker-jlggross',
    storageBucket: 'clocker-jlggross.appspot.com',
    messagingSenderId: '******',
    appId: '******',
    measurementId: '******',
  }

  export default firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig)
  ```

- Firebase Authentication: Inside Firebase configure an Authentication Login method in the Authentication tab
  - Select the Email/Password option

12. Environment file

- We created a .env file and added it to .gitignore
- Firebase has some sensitive login information, such as secret keys, and they can't be exposed in a public git repository.
- The .env file encapsulate these information, which are kept locally and not versionated

13. Git

- Switch to branch development: `git checkout -b develop`
- Add all items: `git add .`
- Remove items from versioning: `git restore --staged config/firebase/index.js`
- Check items for commit: `git status`
- Commit: `git commit -m "My message"`
- Configure github: `git remote add origin <ssh from github>`
  - Add a remote server to the git repository

1. Notes

- handleSubmit from useFormik calls onSubmit

## Class 02 - Finishing authentication and making our first deploy

1. Firebase Documentation

- First Steps Web: <https://firebase.google.com/docs/web/setup?authuser=0>
- Authentication / Persistence os Authentication State: <https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0>
- In the firebase config file we added a LOCAL authentication persistence

2. index.js

- Save authentication status
- Redirect from Login to Agenda and from Agenda to Login. Agenda is the logged area.

3. Gitk

- Visual Git tool
- To open, run: `gitk`

4. Vercel.com

- Go to <https://vercel.com/dashboard>
- New Project -> Import Git Repository -> Choose Clocker folder
- Vercel.com -> Settings -> Environment Variables -> Add variables from .env file
- Deployments -> Redeploy
- Change Domain:
  - Settings -> Domains -> Add Domain -> Copy Nameservers A - @
  - GoDaddy -> Select Domain -> DNS -> Add Register -> Refresh
  - Check DNS Propagation: DNS Checker (<https://dnschecker.org/>) -> Search Domain

5. Back-end

- package 'firebase' used in front-end
- package 'firebase-admin' used in back-end
- Firebase Website -> Cloud Firebase -> Create Database -> Test Mode
  - Configuration -> Project Configurations -> Service Accounts -> Create Service Account -> Select Node.js -> Create new private key
  - This creates a file with secret information for our Firebase admin in the server
  - The value of these secret variables will be saved in an .env file and not committed, to avoid data exposure.
  - In the app in Vercel.com we have to add these variables to the apps environment: Settings -> Environment Variables -> Add Variables

Class Resume:

- Configured Vercel to publish the app
  - Connected to github repository
  - Defined a domain bought from GoDaddy
  - Configured Environment Variables at Vercel to encapsulate secret firebase values
- We created two branches at Vercel, one develop and one main. The main is the production branch
  - Each branch has its own url

## Class 03 - Database and data for logged users

- User profile: Load user agenda based on his login information

Signup

- When user make signup we have to:
  - Create the user
  - Save the username in the backend
  - Make the login and redirect to agenda

Axios

- Add axios: `yarn add axios`

Pages/index.js

- Became a redirect file

Backend

- Got user data from login
- Got user token id
- We created a firestore database, the firebase database
- Finally we created a 'profiles' collection and added our user

In next class next:

- Create user agenda

## Class 04 - Working with dates to create the agenda

- Added dependencies

  - axios
  - @refetty/react@1.0.0-rc.11
  - date-fns : Work with dates
  - @chakra-ui/icons
  - formik
  - yup

- Banckend
  - We have to send the backend which days we want the agenda

# Final Thoughts

- There is no perfect app. Even when the software is complete, changes will be needed. Delivering features incrementally is a good way to shape the software to final use during its development lifecycle.
- After every delivery step a validation will be made by the client, and changes can happen, but most certainly, will be needed.
- We try to deliver more value in less time.
