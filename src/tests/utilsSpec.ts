import { signToken, tokenToData } from "../utils/jwt";

describe("JWT test", () => {
  const token = signToken({ test: "test" });
  it("should return a string after getting payload", () => {
    expect(typeof token === "string").toBe(true);
  });
  it("should return the the passed in object", () => {
    const data = tokenToData(token);
    expect(data.test).toEqual("test");
  });
});
