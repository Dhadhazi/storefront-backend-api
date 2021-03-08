CREATE TABLE orders (
  id SERIAL PRIMARY KEY, 
  completed BOOLEAN, 
  user_id BIGINT REFERENCES users(id)
  );