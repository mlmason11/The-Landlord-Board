# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Landlord Board

This is a single page application that uses routes to change the content of the webpage.

## Components

The folder ./src/components stores the following components:

### `About`

About page.

### `App`

Main parent component.

### `ErrorPage`

Error page.

### `Footer`

This component remains at the bottom of the screen.\
It currently does not contain any information, but is a great place to add contact information and socials in the future.

### `Heading`

This component remains at the top of the screen.\
It contains the title of the app, as well as the NavBar.

### `HomePage`

Home page.

### `NavBar`

Child of Heading.\
Remains at the very top of the page.\
Allows user to navigate to the desired route simply by clicking the corresponding section of the NavBar

### `NewPropertyForm`

Form where a user can submit a new property.

### `PropertyCard`

Card featuring an image and a few quick facts about the property.

### `PropertyList`

List of PropertyCards.\
Features filtering and sorting functionality.

### `PropertyPage`

Details page for an individual property.

### `SearchSort`

Child of PropertyList.\
Allows a user to filter properties by text input.\
Future functionality will be added so that the user can

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4001](http://localhost:4001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Launches the json server file (db.json) in the browser, enabling it to handle incoming requests, manage the database, and facilitate communication with the frontend.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
