const { checkPrime } = require("./index");

describe("testing find Prime Function", () => {

  test("should return error message if the argument is not an array", () => {
    expect(checkPrime(1)).toBe("Praramiter should be an array");
  });

  test("should return error message if the input have any nonIntegers", () => {
    expect(checkPrime([1,"a",2,7,"b"])).toBe("arr Should only content integers but found nonIntegers");
  });

  test("should return [] if the input is []", () => {
    expect(checkPrime([])).toEqual([]);
  });

  test("should return empty array if no prime number is not present ", () => {
    expect(checkPrime([1])).toEqual([]);
  });

  test("should return correct answer", () => {
    expect(checkPrime([1,2,3,4,5,6,7])).toEqual([2,3,5,7]);
  });

  test("should return correct answer", () => {
    expect(checkPrime([2,7])).toEqual([2,7]);
  });

});
