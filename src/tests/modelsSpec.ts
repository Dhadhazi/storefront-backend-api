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
    product1 = await PRODUCT.addProduct("Product1", 1, "ProductsTest");
    expect(product1.category).toEqual("ProductsTest");
    expect(product1.name).toEqual("Product1");
    expect(product1.price).toEqual(1);
  });
  it("Adds a products with NotTest category", async () => {
    product2 = await PRODUCT.addProduct("Product2", 2, "NotTest");
    expect(product2.category).toEqual("NotTest");
    expect(product2.name).toEqual("Product2");
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
    const data = await PRODUCT.getAllByCategory("ProductsTest");
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
