CREATE TABLE orders (
  id SERIAL PRIMARY KEY, 
  completed BOOLEAN, 
  user_id INTEGER REFERENCES users(id)
  );