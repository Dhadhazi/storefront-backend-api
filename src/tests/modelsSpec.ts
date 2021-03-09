/*
Testing the models in one file, because the order of the tests matters
*/

import { Product, ProductStore } from "../models/Product";
import { User, UserStore } from "../models/User";

const PRODUCT = new ProductStore();
const USER = new UserStore();

// Declaring products for later tests
let product1: Product;
let product2: Product;
let user: User;

describe("Products Model tests", () => {
  it("Adds a products with test category", async () => {
    product1 = await PRODUCT.addProduct("Product1", 1, "Test");
    expect(product1).toEqual({
      id: 1,
      name: "Product1",
      price: 1,
      category: "Test",
    });
  });
  it("Adds a products with NotTest category", async () => {
    product2 = await PRODUCT.addProduct("Product2", 2, "NotTest");
    expect(product2).toEqual({
      id: 2,
      name: "Product2",
      price: 2,
      category: "NotTest",
    });
  });
  it("Returns a product based on it's ID", async () => {
    const data = await PRODUCT.getProduct(1);
    expect(data).toEqual(product1);
  });
  it("Returns all the products", async () => {
    const data = await PRODUCT.getAll();
    expect(data.length).toEqual(2);
  });
  it("Returns all the products in Test category", async () => {
    const data = await PRODUCT.getAllByCategory("Test");
    expect(data[0]).toEqual(product1);
  });
});

describe("User Model tests", () => {
  it("Creates a user", async () => {
    user = await USER.createUser("Test", "Tset", "password");
    expect(user).toEqual({
      id: 1,
      firstname: "Test",
      lastname: "Tset",
    });
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
