# Storefront Backend Project

A storefront backend made for the Udacity Full Stack Javascript Nanodegree, therefore some aspects of it might be weird (orders / add products to orders) to match the criteria.

All the endpoints can be found in the REQUIREMENTS.md file

## Setup

- Setup your prostges database
- Clone the repo
- Fill in the [.env requirements](#.env) or just fill in the config.ts file
- Create a [database.json based on the requirements](#database.json) and migrate the DBs
- Run NPM install to install the node packages
- Start the app with NPM start
- Application runs in port 8000 by default (can be changed in config)

### database.json shape

{
"dev": {
"driver": "pg",
"host": "",
"database": "",
"user": "",
"password": ""
},
"test": {
"driver": "pg",
"host": "",
"database": "",
"user": "",
"password": ""
}
}

### .env requirements

The following must be in the .env file:
POSTGRES_HOST - the host address
POSTGRES_DB - name of the database
POSTGRES_USER - username
POSTGRES_PASSWORD - password
SECRET - JWT secret

### Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- DB-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
