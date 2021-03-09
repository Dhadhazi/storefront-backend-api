/*
Testing the models in one file, because the order of the tests matters
*/

import { ProductStore } from "../models/Product";

const PRODUCT = new ProductStore();

// Declaring products for later tests
let product1;
let product2;

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
});
