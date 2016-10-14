## NODEJS API

> A starting point to implement APIs with NodeJS and mongoDB.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [yarn](https://yarnpkg.com/) a package manager for project dependencies.
- [mongoDB](https://www.mongodb.com/download-center?jmp=nav#community).

## Install dependencies

#### 1) Check `Node.js` version.
```sh
node --version
```
The version should be at or above 6.8.0

If you don't have Node.js installed go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Install `mongoDB`
The version should be at or above 3.

#### 3) Check `yarn` version.
```sh
yarn --version
```
The version should be at or above 0.15.1

If you don't have yarn installed go to [yarn](https://yarnpkg.com/en/docs/install) and install the appropiate version.

#### 4) Install the workspace dependencies.
```sh
# cd to your project folder
yarn
```

#### 5) (Development) Install a manager for TypeScript definitions `typings`.
You can use `typings` for intellisense (I use this in VScode).

```sh
# install typings globally
yarn global add typings

# cd to your project folder
yarn run typings
```
This create a `typings` folder which you can reference in your JavaScript files to get intellisense.


## Workflow

### Environment variables

#### Host configuration
- `NODE_ENV="development"`. Environment for server.
- `NODEJS_API_PORT=8080`. Port for api.

#### MongoDB configuration
- `NODEJS_API_MONGODB_URI=undefined`. Uri for default database.

To change any of this variables:

```sh
export NODEJS_API_PORT=8000
```

### Development workflow

#### Start the server with yarn
```sh
# cd to your project folder
yarn start
```

#### Server with nodemon tool
```sh
# install nodemon globally
yarn global add nodemon
# cd to your project folder
nodemon
```

#### Debug with vscode
Press F5 or run debug command.

### Production workflow
You can use `PM2` or other tools.

### Install/Uninstall/Update dependencies
Follow this rules to update dependencies:

- Install dependencies

```sh
# To install production dependencies
# cd to your project folder
yarn add express --exact
```
```sh
# To install development dependencies
# cd to your project folder
yarn add eslint --exact --dev
```

- Uninstall dependencies

```sh
# cd to your project folder
yarn remove express
```

- **To Upgrade any dependencies follow `Uninstall dependencies` step and install again like `Install dependencies`.**

### Others scripts

To run eslint in console type:

```sh
# cd to your project folder
yarn run lint
```

## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)