## NODEJS API

> A starting point to implement APIs with node js.


### Install dependencies

#### For experienced users
```sh
  npm install nodemon -g && npm install
```

#### Prerequisites

- [Node.js](https://nodejs.org/en/download/), used to run nodemon, gulp and the server from command line.
- [npm](https://www.npmjs.com/), installed with Node.js. Used to install development dependencies (Gulp).

**To install dependencies:**

1) Check Node.js version.

```sh
node --version
```

The version should be at or above 6.x.

2) If you don't have Node.js intalled go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version.

3) Install `nodemon` globally.

```sh
npm install nodemon -g
```

This lets you run `nodemon` from the command line.

4)  Install the local `npm` dependencies.

```sh
# cd to your project folder (default: angular-es6)
npm install
```

This all project dependencies required for the server.

5) (Optional) Install a manager for TypeScript definitions `typings`.

You can use `typings` for intellisense (I use this in VScode).

```sh
npm install typings -g
# cd to your project folder
typings install
```

This create a typings folder which you can reference in your JavaScript files to get intellisense.


### Development workflow

**Run server with nodemon tool**

```sh
#cd to your project folder
nodemon
```


You also can use `PM2` or other tools.

## Editors
This project is configured to use with `VScode`.
See `.vscode` folder to explore the options.

## [Contributing](CONTRIBUTING.md)

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)