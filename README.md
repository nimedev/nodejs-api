## NODEJS API

> A starting point to implement APIs with NodeJS and mongoDB.


## Table of Contents

  1. [Prerequisites](#prerequisites)
  1. [Install dependencies](#install-dependencies)
  1. [Workflow](#workflow)
  1. [Style Guides](#style-guides)
  1. [Contributing](#contributing)
  1. [Changelog](#changelog)
  1. [License](#license)


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [mongoDB](https://www.mongodb.com/download-center?jmp=nav#community).


## Install dependencies

#### 1) Check `Node.js` version.

```sh
node --version
```
The version should be at or above 6.10.3

If you don't have Node.js installed go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Check `npm` version.

```sh
npm --version
```
The version should be at or above 5.0.0

Update npm version

```sh
npm install -g npm
```

#### 3) Install `mongoDB`
The version should be at or above 3.


## Workflow

  1. [Environment variables](#environment-variables)
  1. [Development workflow](#development-workflow)
  1. [Production workflow](#production-workflow)
  1. [Handle dependencies](#handle-dependencies)
  1. [Scripts](#others-scripts)

### Environment variables

```sh
##
# nodejs-api environment variables
##

# Host configuration
## Environment for server.
export NODE_ENV="development"
## Port for api.
export NODEJS_API_API_PORT=8080

## A list with the name of service (folder) to load. Separate by space.
export NODEJS_API_LOADER=undefined

```

You can copy this script in bashrc file, modify the variables and delete variables that don't need modification or are undefined.

To change any of this variables:

```sh
# Select services to load
export NODEJS_API_LOADER="folder1 folder2 folder3"

# Select only routes service
export NODEJS_API_LOADER="routes"
```

### Environment variables by sevice

- [user](services/user/README.md)

### Development workflow

#### Install the workspace dependencies.

```sh
# cd to project folder
npm install
```

#### Start with npm script

```sh
# cd to project folder
npm start
```

#### Use nodemon tool

```sh
# install nodemon globally
npm install nodemon -g
# cd to project folder
nodemon
```

#### Document with RAML

Write documentation in `raml` folder then run:

```sh
# cd to project folder
npm run document
```

The script create and html documentation in `services/routes/views/docs/docs.html` path.

### Production workflow
- Set the environment variables with production values. `export NODE_ENV='production'`, ...
- Install workspace dependencies.

```sh
# cd to project folder
npm install

# Or if need install development dependencies run
npm run install:dev
```

#### Use PM2 process manager.

```sh
# cd to project folder
pm2 start ecosystem.config.js
```

> If update the repository repeat the process since `Install workspace dependencies` step.

### Handle dependencies
Follow this rules to update dependencies:

- Install dependencies

```sh
# To install production dependencies
# cd to project folder
npm install express

# To install development dependencies
# cd to project folder
npm install eslint -D
```

- Uninstall dependencies

```sh
# cd to project folder
npm uninstall express
```

- Check outdated dependencies

```sh
# cd to project folder
npm outdated --long
```

- **To Upgrade any dependencies follow `Uninstall dependencies` step and install again like `Install dependencies`.**

### Others scripts

```sh
# Run eslint
npm run lint

# Run all tests
npm run test

# Run api tests
npm run test:api

# Run unit tests
npm run test:unit
```


## Style Guides

### JavaScript

**[Nimedev JavaScript style guide](https://github.com/nimedev/javascript)**.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)
