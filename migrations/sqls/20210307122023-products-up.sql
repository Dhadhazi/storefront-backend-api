CREATE TABLE products (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  price INTEGER, 
  category VARCHAR(50)
);