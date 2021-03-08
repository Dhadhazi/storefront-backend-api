import dbClient from "../utils/dbClient";

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
}
