const axios = require("axios");

const { checkPrime, checkPromoted, checkApiResponse } = require("../index");

// mock data for Question2

const mockData = [
  {
    name: "Hewie",
    age: 9,
    promoted: true,
    gender: "Male",
  },
  {
    name: "Brantley",
    age: 14,
    promoted: true,
    gender: "Female",
  },
  {
    name: "Sophie",
    age: 8,
    promoted: true,
    gender: "Female",
  },
  {
    name: "alvin",
    age: 14,
    promoted: false,
    gender: "Male",
  },
];

const mockAns = {
  totalPromoted: 3,
  totalPromotedAvgAge: 10,
  totalPromotedUnder15: 3,
  totalAgePromotedMale: 9,
  totalPromotedFemaleAscByAge: [
    { name: "Sophie", age: 8, promoted: true, gender: "Female" },
    { name: "Brantley", age: 14, promoted: true, gender: "Female" },
  ],
};

// api Data

const mockApiResponse = [
  {
    name: "house2",
    ownerName: "Krishna",
    address: "Patna",
    areaCode: "100000",
    rent: "1100",
    isBachelorAllowed: true,
    isMarriedAllowed: true,
    id: 2,
  },
  {
    name: "house3",
    ownerName: "Bicky",
    address: "Bangal",
    areaCode: "300000",
    rent: "900",
    isBachelorAllowed: true,
    isMarriedAllowed: false,
    id: 3,
  },
];

// Question 1

describe("testing find Prime Function", () => {
  test("should return error message if the argument is not an array", () => {
    expect(checkPrime(1)).toBe("Parameter should be an array");
  });

  test("should return error message if the input have any nonIntegers", () => {
    expect(checkPrime([1, "a", 2, 7, "b"])).toBe(
      "arr Should only content integers but found nonIntegers"
    );
  });

  test("should return [] if the input is []", () => {
    expect(checkPrime([])).toEqual([]);
  });

  test("should return empty array if no prime number is not present ", () => {
    expect(checkPrime([1])).toEqual([]);
  });

  test("should return correct answer", () => {
    expect(checkPrime([1, 2, 3, 4, 5, 6, 7])).toEqual([2, 3, 5, 7]);
  });

  test("should return correct answer when negative number also added", () => {
    expect(checkPrime([1, -2, -3, 4, -5, 6, -7])).toEqual([]);
  });

  test("should return correct answer", () => {
    expect(checkPrime([2, 7])).toEqual([2, 7]);
  });
});

// question 2

describe("testing 2nd Function, promoted and not promoted  students.", () => {
  test("should return error message if the argument is not an array", () => {
    expect(
      checkPromoted({
        name: "Sophie",
        age: 8,
        promoted: true,
        gender: "Female",
      })
    ).toBe("Input should be an array");
  });

  test("should return the correct answer for totalPromoted", () => {
    expect(checkPromoted(mockData).totalPromoted).toEqual(
      mockAns.totalPromoted
    );
  });

  test("should return the correct answer for totalPromotedAvgAge", () => {
    expect(checkPromoted(mockData).totalPromotedAvgAge).toEqual(
      mockAns.totalPromotedAvgAge
    );
  });

  test("should return the correct answer for totalPromotedUnder15", () => {
    expect(checkPromoted(mockData).totalPromotedUnder15).toEqual(
      mockAns.totalPromotedUnder15
    );
  });

  test("should return the correct answer for totalAgePromotedMale", () => {
    expect(checkPromoted(mockData).totalAgePromotedMale).toEqual(
      mockAns.totalAgePromotedMale
    );
  });

  test("should return the correct answer for totalPromotedFemaleAscByAge ascending value", () => {
    expect(checkPromoted(mockData).totalPromotedFemaleAscByAge[0]).toEqual(
      mockAns.totalPromotedFemaleAscByAge[0]
    );
  });

  test("should return the correct answer for totalPromotedFemaleAscByAge ascending value2", () => {
    expect(checkPromoted(mockData).totalPromotedFemaleAscByAge[1]).toEqual(
      mockAns.totalPromotedFemaleAscByAge[1]
    );
  });

  test("should return the correct answer", () => {
    expect(checkPromoted(mockData)).toEqual(mockAns);
  });
});

// question 3

describe("checking the api call is made and return the correct response", () => {

  test("should return the Correct Response", () => {
    return expect(checkApiResponse()).resolves.toEqual(mockApiResponse);
  });

  test("should make the API call with /houses endpoient", async () => {
    // mock fn
    axios.get = jest.fn().mockImplementation(() => mockApiResponse);

    // when
    const response = await checkApiResponse();

    // then
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/houses");
  });
});
