const first = require("../exo1");
describe("exo 1 first", () => {
  test("first should return the first element in the array ", () => {
    expect(first([1, 2, 3])).toBe(1);
  });
});
