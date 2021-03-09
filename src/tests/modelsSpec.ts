/*
Testing the models in one file, because the order of the tests matters
*/

import { Product, ProductStore } from "../models/Product";

const PRODUCT = new ProductStore();

// Declaring products for later tests
let product1: Product;
let product2: Product;

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
