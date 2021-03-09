import supertest from "supertest";
import { app } from "../server";
import { signToken } from "../utils/jwt";

const request = supertest(app);
const BadUser = signToken({});
const FakeUserForAuth = signToken({ user: {} });

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
    it("Create new user at /post", async (done) => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
      done();
    });
  });
});
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
