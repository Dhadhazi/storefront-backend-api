import { signToken, tokenToData } from "../utils/jwt";
import { encryptPassword } from "../utils/password";
describe("Util tests", () => {
  describe("JWT tests", () => {
    const token = signToken({ test: "test" });
    it("should return a string after getting payload", () => {
      expect(typeof token === "string").toBe(true);
    });
    it("should return the passed in object", () => {
      const data = tokenToData(token);
      expect(data.test).toEqual("test");
    });
  });

  describe("Password tests", () => {
    it("Should hash the password", async () => {
      const password = await encryptPassword("password");
      expect(password != "password").toBe(true);
      expect(password.length).toBeGreaterThan(40);
    });
  });
});
