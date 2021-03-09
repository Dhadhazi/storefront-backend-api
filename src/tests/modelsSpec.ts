/*
Testing the models in one file, because the order of the tests matters
*/
import { v4 as uuidv4 } from "uuid";
import { Order, OrderStore } from "../models/Orders";
import { Product, ProductStore } from "../models/Product";
import { User, UserStore } from "../models/User";

const PRODUCT = new ProductStore();
const USER = new UserStore();
const ORDER = new OrderStore();

// Declaring products for later tests
let product1: Product;
let product2: Product;
let user: User;
let order: Order;
const product1Name = uuidv4();
const product2Name = uuidv4();
const uniqueCategory = uuidv4();

describe("MODEL TESTS", () => {
  describe("Products Model tests", () => {
    it("Adds a products with test category", async () => {
      product1 = await PRODUCT.addProduct(product1Name, 1, uniqueCategory);
      expect(product1.category).toEqual(uniqueCategory);
      expect(product1.name).toEqual(product1Name);
      expect(product1.price).toEqual(1);
    });
    it("Adds a products with NotTest category", async () => {
      product2 = await PRODUCT.addProduct(product2Name, 2, "NotTest");
      expect(product2.category).toEqual("NotTest");
      expect(product2.name).toEqual(product2Name);
      expect(product2.price).toEqual(2);
    });
    it("Returns a product based on it's ID", async () => {
      const data = await PRODUCT.getProduct(product1.id);
      expect(data).toEqual(product1);
    });
    it("Returns all the products", async () => {
      const data = await PRODUCT.getAll();
      expect(data.length).toBeGreaterThan(1);
    });
    it("Returns all the products in Test category", async () => {
      const data = await PRODUCT.getAllByCategory(uniqueCategory);
      expect(data[0]).toEqual(product1);
    });
  });

  describe("User Model tests", () => {
    it("Creates a user", async () => {
      user = await USER.createUser("Test", "Tset", "password");
      expect(user.firstname).toEqual("Test");
      expect(user.lastname).toEqual("Tset");
    });
    it("Gets all the users", async () => {
      const data = await USER.getAll();
      expect(data.length).toBeGreaterThan(0);
    });
    it("Gets user by ID", async () => {
      const data = await USER.getUser(user.id);
      expect(data).toEqual(data);
    });
  });

  describe("Order Model tests", () => {
    it("Creates an order", async () => {
      order = await ORDER.createOrder(user.id);
      expect(order.completed).toEqual(false);
      expect(order.user_id).toBe(user.id);
    });
    it("Adds a product to the order", async () => {
      const data = await ORDER.addProduct(5000, order.id, product1.id);
      expect(data.quantity).toBe(5000);
      expect(data.order_id).toBe(order.id);
    });
    it("It gets all open orders", async () => {
      const data = await ORDER.getOpenOrders(user.id);
      expect(data.length).toBe(1);
    });
    it("It gets all completed orders", async () => {
      const data = await ORDER.getCompletedOrders(user.id);
      expect(data.length).toBe(0);
    });
  });

  // This test only runs if the DB is empty, or at least does not have other tests before it
  // describe("Products top list Model tests", () => {
  //   it("Gets the top selling products list", async () => {
  //     const data = await PRODUCT.getTop5();
  //     expect(data[0].name).toBe(product1.name);
  //   });
  //   it("Gets the top selling products list with new combined top", async () => {
  //     await ORDER.addProduct(4000, order.id, product2.id);
  //     await ORDER.addProduct(4000, order.id, product2.id);
  //     const data = await PRODUCT.getTop5();
  //     expect(data[0].name).toBe(product2.name);
  //   });
  // });
});
