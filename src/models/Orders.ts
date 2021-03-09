import runQueryOnDatabase from "../utils/runQueryOnDatabase";

export type ProductOrder = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: number;
  completed: boolean;
  user_id: number;
  orderedProducts?: ProductOrder[];
};

type Order_Products = {
  id: number;
  quantity: number;
  order_id: number;
  product_id: number;
};

export class OrderStore {
  async getOpenOrders(userId: number): Promise<Order[]> {
    const data = await runQueryOnDatabase(
      `SELECT * FROM orders INNER JOIN order_products ON orders.id = order_products.order_id WHERE user_id=$1 AND completed = false`,
      [userId]
    );
    return data.rows;
  }

  async getCompletedOrders(userId: number): Promise<Order[]> {
    const data = await runQueryOnDatabase(
      `SELECT * FROM orders INNER JOIN order_products ON orders.id = order_products.order_id WHERE user_id=$1 AND completed = true`,
      [userId]
    );
    return data.rows;
  }

  async addProduct(
    quantity: number,
    orderId: number,
    productId: number
  ): Promise<Order_Products> {
    const data = await runQueryOnDatabase(
      `INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *`,
      [quantity, orderId, productId]
    );
    return data.rows[0];
  }

  async createOrder(userId: number): Promise<Order> {
    const data = await runQueryOnDatabase(
      `INSERT INTO orders (completed, user_id) VALUES (false, $1) RETURNING *`,
      [userId]
    );
    return data.rows[0];
  }
}
