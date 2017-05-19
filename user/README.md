## User service for NODEJS API

> Group API routes for user sevice.


## Environment variables

```sh
##
# Environment variables for user service
##

## Server setting.
export NODEJS_API_USER_PORT=8081

# MongoDB configuration
## Uri for user service database.
export NODEJS_API_USER_MONGODB_URI="mongodb://localhost:27017/nodejs-api-user"
```

You can copy this script in bashrc file, modify the variables and delete variables that don't need modification or are undefined.

To change any of this variables:

```sh
export NODEJS_API_USER_PORT=9091
```
