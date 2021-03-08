import runQueryOnDatabase from "../utils/runQueryOnDatabase";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export class ProductStore {
  async getAll(): Promise<Product[]> {
    try {
      const data = await runQueryOnDatabase(`SELECT * FROM products`);
      return data.rows;
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
    }
  }

  async getAllByCategory(): Promise<Product[]> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT * FROM products ORDER BY category ASC`
      );
      return data.rows;
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
    }
  }

  async getTop5(): Promise<Product[]> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT SUM(quantity), (SELECT name FROM products WHERE order_products.product_id = products.id)
          FROM order_products 
          GROUP BY product_id
          ORDER BY SUM (quantity) 
          DESC LIMIT 5;`
      );
      return data.rows;
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
    }
  }

  async getProduct(id: number): Promise<Product> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT * FROM products WHERE id=($1)`,
        [id]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get product ${e}`);
    }
  }

  async addProduct(
    name: string,
    price: number,
    category: string
  ): Promise<Product> {
    try {
      const data = await runQueryOnDatabase(
        `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *`,
        [name, price, category]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Could not add product ${e}`);
    }
  }
}
