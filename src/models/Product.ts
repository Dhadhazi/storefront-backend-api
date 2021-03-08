import runQueryOnDatabase from "../utils/runQueryOnDatabse";

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

  async getProduct(id: number): Promise<Product> {
    try {
      const data = await runQueryOnDatabase(
        `SELECT * FROM products WHERE id=($1)`,
        [id]
      );
      return data.rows[0];
    } catch (e) {
      console.log(e);
      throw new Error(`Cannot get products ${e}`);
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
      throw new Error(`Cannot get products ${e}`);
    }
  }
}
