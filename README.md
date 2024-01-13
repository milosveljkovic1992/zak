# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Zak summary

This project is designed for quick and easy reservation management.

#### Technologies

This project is built in React and TypeScript.  
Material UI is used for styling purposes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build:dev`

Builds the app for development to the `build` folder using .env.development variables.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:prod`

Builds the app for production to the `build` folder using .env.production variables.

### `npm run check-format`

Runs `prettier --check` script and checks all files that are not included in .prettierignore if the code is formatted according to styles set in .prettierrc.json.

### `npm run check-lint`

Runs the eslint check to see if code adheres to rules set in .eslintrc.json.

### `npm run check-types`

Runs TypeScript Compiler: `tsc --pretty --noEmit`\
This will only perform type checking and report errors without generating (creating) JavaScript files. It is used for checking types in TypeScript code without producing any compiled JavaScript output. It is useful for catching type-related issues.

### `npm run format`

Runs `prettier --write` script and applies the code formatting styles set in .prettierrc.json to all files that are not included in .prettierignore.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Husky rules

### pre-commit

Runs the following scripts:
`npm run check-format`  
`npm run check-lint`  
`npm run check-types`  
`npm run build:prod`

If everything passes, the commit is created.
