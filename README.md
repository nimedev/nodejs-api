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
The version should be at or above 6.9.4

If you don't have Node.js installed go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Install `mongoDB`
The version should be at or above 3.

#### 3) Check `yarn` version.
```sh
yarn --version
```
The version should be at or above 0.18.0

If you don't have yarn installed go to [yarn](https://yarnpkg.com/en/docs/install) and install the appropiate version.


## Workflow

### Environment variables

```sh
##
# nodejs-api environment variables
##

# Host configuration
## Environment for server.
export NODE_ENV="development"
## Port for api.
export NODEJS_API_PORT=8080

# MongoDB configuration
## Uri for default database.
export NODEJS_API_MONGODB_URI="mongodb://localhost:27017/nodejs-api"
```

You can copy this script in bashrc file, modify the variables and delete variables that don't need modification or are undefined.

To change any of this variables:

```sh
export NODEJS_API_PORT=8000
```

### Development

#### Install the workspace dependencies.
```sh
# cd to your project folder
yarn
```

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
- Set the environment variables with production values. `export NODE_ENV='production'`, ...
- Use a process manager like `PM2`.

> If need install development dependencies run `yarn install:dev`

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


## Style Guides

### JavaScript

**[Nimedev JavaScript style guide](https://github.com/nimedev/javascript)**.


## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)
