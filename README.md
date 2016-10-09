## NODEJS API

> A starting point to implement APIs with NodeJS and mongoDB.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [mongoDB](https://www.mongodb.com/download-center?jmp=nav#community)

## Install dependencies

#### 1) Check Node.js version.
```sh
node --version
```
The version should be at or above 6.7.0

If you don't have Node.js intalled go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Install mongoDB
The version should be at or above 3.

#### 3) Install the workspace `npm` dependencies.
```sh
# cd to your project folder
npm install
```

#### 4) (Development) Install a manager for TypeScript definitions `typings`.
You can use `typings` for intellisense (I use this in VScode).

```sh
# install typings globally
npm install typings -g

# cd to your project folder
npm run typings
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

#### Start the server with npm
```sh
# cd to your project folder
npm start
```

#### Server with nodemon tool
```sh
# install nodemon globally
npm install nodemon -g
# cd to your project folder
nodemon
```

#### Debug with vscode
Press F5 or run debug command.


### Production workflow
You can use `PM2` or other tools.

### Install/Uninstall/Update dependencies
Follow this rules to update dependencies:

- Uninstall old dependency and install again

```sh
# cd to your project folder
npm uninstall eslint && npm install eslint -D
```

### Others scripts

To run eslint in console type:

```sh
# cd to your project folder
npm run lint
```

## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)