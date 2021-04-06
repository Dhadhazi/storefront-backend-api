# Storefront Backend Project

A storefront backend made for the Udacity Full Stack Javascript Nanodegree, therefore some aspects of it might be weird (orders / add products to orders) to match the criteria. Additional information can be found in the REQUIREMENTS.md

## Setup

- Create your prostges database locally or with your favorite provider. My suggestion: https://www.elephantsql.com/
- Clone the repository
- Create a `.env` file in the root, and fill it with [the required variables](#.env) or just fill in the config.ts file (see below the variables needed)
- Run `npm install` to install the node packages
- Run `db-migrate up` command to migrate the database
- Start the app with `npm start`
- Application runs in port 8000 , database runs in port 5432 (can be changed in .env file or config)

## Tests

To be able to run tests, the app needs a test database. Either add it directly to config (under tests) or better, define the details in .env file:

```
POSTGRES_TEST_HOST=the host address
POSTGRES_TEST_DB=name of the database
POSTGRES_TEST_USER=username
POSTGRES_TEST_PASSWORD=password
POSTGRES_TEST_PORT=database port *OPTIONAL, default 5432*
```

After that, to run the tests just enter `npm run test`

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

### .env requirements

The following must be in the .env file, with your values:

```
POSTGRES_HOST=the host address
POSTGRES_DB=name of the database
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_PORT=Databse port *OPTIONAL, default 5432*
SECRET=JWT
ENV=dev
PORT=port number *OPTIONAL default 8000*
SALT_ROUNDS=salt rounds for the password *OPTIONAL default 10*
```

### Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- DB-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
