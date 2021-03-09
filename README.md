# Storefront Backend Project

A storefront backend made for the Udacity Full Stack Javascript Nanodegree, therefore some aspects of it might be weird (orders / add products to orders) to match the criteria. Additional information can be found in the REQUIREMENTS.md

## Setup

- Setup your prostges database
- Clone the repo
- Fill in the [.env requirements](#.env) or just fill in the config.ts file
- Create a [database.json based on the requirements](#database.json) and migrate the DBs
- Run NPM install to install the node packages
- Start the app with NPM start
- Application runs in port 8000 by default (can be changed in config)

## Tests

To be able to run tests, the app needs a test database. Either add it directly to config (under tests) or better, define the details in .env file:

```
POSTGRES_TEST_HOST - the host address
POSTGRES_TEST_DB - name of the database
POSTGRES_TEST_USER - username
POSTGRES_TEST_PASSWORD - password
```

After that, to run the tests just enter _npm run test_

## API Endpoints

#### Products

- Index - GET products/
- Show - GET products/:id
- Create [token required] POST products/
- [OPTIONAL] Top 5 most popular products GET products/top/
- [OPTIONAL] Products by category (args: product category) GET products/category/:category

#### Users

- Index [token required] GET users/
- Show [token required] GET users/:id
- Create [token required] POST users/

#### Orders

- Current Order by user (args: user id)[token required] orders/
- [OPTIONAL] Completed Orders by user (args: user id)[token required] orders/completed/
- [ADDED FOR TESTING] Creating an order [token required] orders/createOrder/
- [ADDED FOR TESTING] Add product to order [token required] orders/:orderId

### database.json shape

```
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
```

### .env requirements

The following must be in the .env file:

```
POSTGRES_HOST - the host address
POSTGRES_DB - name of the database
POSTGRES_USER - username
POSTGRES_PASSWORD - password
SECRET - JWT secret
```

### Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- DB-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
