# Change Log

## [8.1.5] - 2017-05-29

### Fixed
- Fix enumeration in install dependencies steps.


## [8.1.4] - 2017-05-29

### Modified
- Upgrade to npm v5.0.0 and update README.md documentation.

### Updated
- Upgrade dep: body-parser express mongoose.
- Upgrade devDep: eslint-config-nimedev-base eslint-plugin-import mocha morgan.


## [8.1.3] - 2017-05-23

### Fixed
- Fix some comments.


## [8.1.2] - 2017-05-21

### Fixed
- Fix name of user.schema file.


## [8.1.1] - 2017-05-21

### Modified
- Hide console.log in server when NODE_ENV is equal to 'test'.


## [8.1.0] - 2017-05-21

### Modified
- Rename user.tools to user.dam.


## [8.0.1] - 2017-05-21

### Added
- Add NODEJS_API_API_PORT to README file.


## [8.0.0] - 2017-05-20

### Deleted
- [Breaking change] Delete NODEJS_API_LAMBDA environment variable.

### Modified
- [Breaking change] Rename functions folder to services.


## [7.2.0] - 2017-05-19

### Added
- Implement detection of services in funcitons folder.

### Modified
- Rename the environment variable used to load services.


## [7.1.0] - 2017-05-19

### Added
- Implement dynamic loading of services.
- Add RAML documentation.


## [7.0.0] - 2017-05-19

### Modified
- [Breaking change]: rebuild the file structure to use with AWS lambda.


## [6.0.0] - 2017-05-19

### Added
- Add ecosystem.config.js file to run PM2

### Modified
- [Breaking change]: change to a file structure as a service.


## [5.0.0] - 2017-05-08

### Modified
- Update database module.
- Update error-handler module.
- Breaking Change: Rename components folder to services.
- Move controller test to main test folder.

### Updated
- Upgrade dep: cors mongoose.
- Upgrade devDep: eslint eslint-config-nimedev-base mocha.


## [4.13.1] - 2017-03-29

### Updated
- Upgrade dep: body-parser cors express mongoose.
- Upgrade devDep: eslint.


## [4.13.0] - 2017-02-27

### Updated
- Upgrade dep: body-parser and mongoose.
- Upgrade devDep: eslint and morgan.


## [4.12.0] - 2017-02-10

### Updated
- Upgrade devDep: eslint and morgan.


## [4.11.0] - 2017-02-03

### Deleted
- Remove .jsbeautifyrc file.

### Updated
- Upgrade devDep: eslint.
- Update dep: express and mongoose.
- Updated to nodejs 6.9.5.


## [4.10.0] - 2017-01-24

### Added
- Add .jsbeautifyrc file to control vscode autoformating.

### Updated
- Upgrade mongoose and eslint.


## [4.9.0] - 2017-01-19

### Modified
- Implement tests for user.dao module.

### Updated
- Upgrade dep: body-parser.
- Upgrade to yarn 0.19.1.


## [4.8.1] - 2017-01-17

### Modified
- Rename user.schema file to user-schema.


## [4.8.0] - 2017-01-16

### Added
- Implement errorLogger function.

### Updated
- Upgrade devDep: eslint-config-nimedev-base.
- Upgrade dep: mongoose.


## [4.7.1] - 2017-01-15

### Fixed
- Improve documentation in workflow section.

### Modified
- Update vscode settings.


## [4.7.0] - 2017-01-14

### Modified
- Improve workflow documentation.


## [4.6.0] - 2017-01-13

### Fixed
- Fix bug in with paging in database-service.

### Modified
- Improve error handling.
- Move morgan and errorhandler to devDependencies.


## [4.5.0] - 2017-01-12

### Modified
- Update database-service module.

### Updated
- Upgrade eslint-config-nimedev-base.


## [4.4.0] - 2017-01-12

### Added
- Add link to javascript style guide in README.md file.

### Modified
- Rebase database module.
- Rename config-express modules to express-setup.
- Reorganize config module.


## [4.3.0] - 2017-01-10

### Modified
- Improve documentation for environment variables.

### Updated
- Upgrade eslint.


## [4.2.0] - 2017-01-05

### Updated
- Upgrade mongoose and eslint-config-nimedev-base.
- Upgrade NodeJS to v6.9.4.


## [4.1.0] - 2016-12-28

### Added
- Add .nvmrc file.


## [4.0.0] - 2016-12-28

### Modified
- Implement eslint-config-nimedev-base.
- Add .editorconfig file.

### Deleted
- Remove unnecesary vscode settings.
- Remove unnecesary 'use strict'.


## [3.2.1] - 2016-12-27

### Updated
- Upgrade mongoose.


## [3.2.0] - 2016-12-20

### Added
- Implement eslint-config-nimedev-node.

### Updated
- Upgrade mongoose, eslint and pre-commit.


## [3.1.1] - 2016-12-12

### Updated
- Upgrade mongoose and eslint.
- Use node 6.9.2.


## [3.1.0] - 2016-12-05

### Updated
- Upgrade mongoose, eslint and mocha.


## [3.0.0] - 2016-11-20

### Modified
- Rebase database module and put database configuration in database module.


## [2.4.0] - 2016-11-16

### Modified
- Improve user tests.

### Updated
- Upgrade eslint, mongoose and errorhandler.


## [2.3.0] - 2016-11-09

### Deleted
- Remove typings.

### Updated
- Upgrade mongoose and eslint.


## [2.2.2] - 2016-10-14

### Added
- Add .nvmrc file.


## [2.2.1] - 2016-10-14

### Modified
- Sanitize user before create it.


## [2.2.0] - 2016-10-13

### Modified
- Add validation to test-api helper.
- Improve test descriptions.

### Updated
- Use nodejs v6.8.0 and npm >=3.10.8


## [2.1.0] - 2016-10-12

### Modified
- Improve validation of error in api-test helper.


## [2.0.1] - 2016-10-12

### Fix
- Fix installation order in README.md file.


## [2.0.0] - 2016-10-12

### Modified
- Improme schema validation.
- Replace npm with yarn.
- Rebase structure in some modules.
- Group user schema in user.model module.
- Add NODE_ENV=test to tests files.
- Improve config module.

### Updated
- Upgrade mocha package.


## [1.3.0] - 2016-10-09

### Modified
- Improve config module using environment variables.


## [1.2.2] - 2016-10-08

### Modified
- Improve controllers style.

### Updated
- Upgrade eslint-config-nimedev and mongoose packages.


## [1.2.1] - 2016-10-05

### Modified
- Remove reference to models in tests files.
- Improve comments in tests descriptions.


## [1.2.0] - 2016-10-04

### Modified
- Remove save=true from .npmrc file.
- Update shrink script.
- Use schemaOptions as constant in user.schema.js file.
- Add projection param to findingUser in user.dao file.
- Improve response error handling.
- Move api tests to each component or module.

### Updated
- Upgrade eslint and mongoose packages.


## [1.1.4] - 2016-09-30

### Modified
- Improve listingUsers function in user.dao module.


## [1.1.3] - 2016-09-30

### Modified
- Improve user.dao and user.controller.
- Improve api test.


## [1.1.2] - 2016-09-29

### Updated
- Upgrade node typings.


## [1.1.1] - 2016-09-29

### Modified
- Change nodejs version range in engines field of package.json.


## [1.1.0] - 2016-09-29

### Added
- Add mongoDB as a prerequisite in README.md.

### Modified
- Improve api-test descriptions.

### Updated
- Use nodejs v6.7.0.
- Upgrade eslint and mocha packages.


## [1.0.0] - 2016-09-28

### Added
- Implement api test.
- Implement sandbox test.

### Modified
- Improve sandbox module.
- Use Object.freeze in some modules.

### Updated
- Upgrade mongoose, eslint and mocha package


## [0.2.1] - 2016-09-13

### Added
- Add pre-commit hook.

### Modified
- Update README.md file.

### Updated
- Upgrade eslint, eslint-config-nimedev, cors and mongoose.


## [0.2.0] - 2016-08-07

### Added
- Add link to license in README.md.

### Modified
- Rename users module to user.
- Implement sandbox for each component.

### Updated
- Upgrade mongoose and eslint.


## [0.1.1] - 2016-07-28

### Added
- Change some index files.


## [0.1.0] - 2016-07-27

### Added
- Implement database pool.

### Modified
- Update README.md file.
- Update vscode workspace settings.


## [0.0.1] - 2016-07-25

* Initial release.
