import supertest from "supertest";
import { app } from "../server";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("gets the api endpoint", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });
});

// describe("API Endpoint Tests", () => {
//   describe("Useres endpoints /users", () => {
//     it("Creates a new user - POST users/", () => {

//     })
//   })

// })

/*
#### Products
- Index - GET products/
- Show - GET products/:id
- Create [token required] POST products/
- [OPTIONAL] Top 5 most popular products GET products/top/
- [OPTIONAL] Products by category (args: product category) GET products/category/:category

#### Users
- Index [token required] GET users/
- Show [token required] GET users/:id
- Create [token required] POST users/

#### Orders
- Current Order by user (args: user id)[token required] orders/
- [OPTIONAL] Completed Orders by user (args: user id)[token required] orders/completed/
- [ADDED FOR TESTING] Creating an order [token required] orders/createOrder/
- [ADDED FOR TESTING] Add product to order [token required] orders/:orderId
*/
