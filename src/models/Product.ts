import dbClient from "../utils/dbClient";

type Product = {
  id: Number;
  name: string;
  price: Number;
  category: string;
};

export class ProductStore {
  async getAll(): Promise<Product[]> {
    try {
      const connection = await dbClient.connect();
      const sql = `SELECT * FROM products`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
    }
  }
  async addProduct(
    name: String,
    price: Number,
    category: String
  ): Promise<Product> {
    try {
      const connection = await dbClient.connect();
      const sql = `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *`;
      const result = await connection.query(sql, [name, price, category]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
    }
  }
}
