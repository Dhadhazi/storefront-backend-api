# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index - GET products/
- Show - GET products/:id
- Create [token required] POST products/
- [OPTIONAL] Top 5 most popular products GET products/top/
- [OPTIONAL] Products by category (args: product category) GET products/category/

#### Users

- Index [token required] GET users/
- Show [token required] GET users/:id
- Create [token required] POST users/

#### Orders

- Current Order by user (args: user id)[token required] orders/current/
- [OPTIONAL] Completed Orders by user (args: user id)[token required] orders/completed/

## Data Shapes

#### Products

##### Table name: products

| name     | type                  |
| -------- | --------------------- |
| id       | SERIAL PRIMARY KEY    |
| name     | VARCHAR(100) NOT NULL |
| price    | INTEGER               |
| category | VARCHAR(50)           |

#### Orders

##### Table name: users

| name      | type               |
| --------- | ------------------ |
| id        | SERIAL PRIMARY KEY |
| firstName | VARCHAR(100)       |
| lastName  | VARCHAR(100)       |
| password  | VARCHAR(100)       |

#### Orders

##### Table name: orders

| name      | type                        |
| --------- | --------------------------- |
| id        | SERIAL PRIMARY KEY          |
| completed | BOOLEAN                     |
| user_id   | BIGINT REFERENCES users(id) |

#### Order to Products table

##### Table name: order_products

| name        | type                           |
| ----------- | ------------------------------ |
| id          | SERIAL PRIMARY KEY             |
| quantity    | INTEGER                        |
| order_id    | BIGINT REFERENCES orders(id)   |
| products_id | BIGINT REFERENCES products(id) |
