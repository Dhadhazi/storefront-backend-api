import supertest from "supertest";
import { app } from "../server";
import { signToken, tokenToData } from "../utils/jwt";
import { User } from "../models/User";
import { Product } from "../models/Product";
import { Order } from "../models/Orders";

const request = supertest(app);
const BadUser = signToken({});
const FakeUserForAuth = signToken({ user: {} });
let RealUser: User;
let RealUserToken: string;
let product1: Product;
let product2: Product;
let order: Order;

describe("API Endpoint Tests", () => {
  describe("/ endpoint test, server running", () => {
    it("gets the api endpoint", async (done) => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
      done();
    });
  });
  describe("Authentication tests", () => {
    it("Deny authentication because no header", async (done) => {
      const response = await request.post("/users");
      expect(response.status).toBe(401);
      done();
    });
    it("Deny authentication because invalid token", async (done) => {
      const response = await request
        .post("/users")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXJ1c2VyIjp7ImlkIjoxMSwiZmW4iLCJsYXN0bmFtZSI6ImFkbWluIn0sImlhdCI6MTYxNTIwNTI5OH0.ckOCsxsoAlZk48MbMSyk_Aw-r1w8OIFxho2-ko1_eZQ"
        );
      expect(response.status).toBe(400);
      done();
    });
    it("Deny authentication because token error - no user", async (done) => {
      const response = await request
        .post("/users")
        .set("Authorization", `Bearer ${BadUser}`);
      expect(response.status).toBe(404);
      done();
    });
  });

  describe("USERS/ endpoint", () => {
    it("Create new user at / - POST", async (done) => {
      const response = await request
        .post("/users")
        .type("form")
        .send({ firstName: "Test", lastName: "Elek", password: "password" })
        .set("Authorization", `Bearer ${FakeUserForAuth}`);
      expect(response.status).toBe(200);
      RealUserToken = response.body;
      RealUser = tokenToData(RealUserToken).user;
      done();
    });
    it("List all users", async (done) => {
      const response = await request
        .get("/users")
        .set("Authorization", `Bearer ${FakeUserForAuth}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      done();
    });
    it("Get user by ID", async (done) => {
      const response = await request
        .get(`/users/${RealUser.id}`)
        .set("Authorization", `Bearer ${FakeUserForAuth}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(RealUser);
      done();
    });
  });
  describe("PRODUCTS/ endpoint", () => {
    it("Create new product at / - POST", async (done) => {
      const response = await request
        .post("/products")
        .type("form")
        .send({ name: "APIProduct1", price: 2, category: "APITest" })
        .set("Authorization", `Bearer ${FakeUserForAuth}`);
      expect(response.status).toBe(200);
      product1 = response.body;
      expect(product1.category).toBe("APITest");
      expect(product1.price).toBe(2);
      expect(product1.name).toBe("APIProduct1");
      done();
    });
    it("List all products", async (done) => {
      const response = await request
        .get("/products")
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      done();
    });
    it("Get product by ID", async (done) => {
      const response = await request
        .get(`/products/${product1.id}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(product1);
      done();
    });
    it("Get product by Category", async (done) => {
      const response = await request
        .get(`/products/category/${product1.category}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body[0].category).toEqual(product1.category);
      done();
    });
  });
  describe("ORDERS/ endpoint", () => {
    it("Create new order at /createOrder - POST", async (done) => {
      const response = await request
        .post("/orders/createOrder")
        .set("Authorization", `Bearer ${RealUserToken}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      order = response.body;
      expect(order.completed).toBe(false);
      expect(order.user_id).toBe(RealUser.id);
      done();
    });
    it("Add a product to the order /:id - POST", async (done) => {
      const response = await request
        .post(`/orders/${order.id}`)
        .set("Authorization", `Bearer ${RealUserToken}`)
        .type("form")
        .send({ quantity: 2000, productId: product1.id })
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body.quantity).toBe(2000);
      expect(response.body.order_id).toBe(order.id);
      done();
    });
    it("List all incomplete orders", async (done) => {
      const response = await request
        .get("/orders")
        .set("Authorization", `Bearer ${RealUserToken}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(1);
      done();
    });
    it("List all completed orders", async (done) => {
      const response = await request
        .get("/orders/completed")
        .set("Authorization", `Bearer ${RealUserToken}`)
        .expect("Content-Type", /json/);
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(0);
      done();
    });
  });
});

/*
#### Products
- [OPTIONAL] Top 5 most popular products GET products/top/

#### Orders
- Current Order by user (args: user id)[token required] orders/
- [OPTIONAL] Completed Orders by user (args: user id)[token required] orders/completed/
- [ADDED FOR TESTING] Creating an order [token required] orders/createOrder/
- [ADDED FOR TESTING] Add product to order [token required] orders/:orderId
*/
