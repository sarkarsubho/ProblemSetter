const axios = require("axios");
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrime(arr) {
  let isArray = Array.isArray(arr);
  if (!isArray) {
    return "Parameter should be an array";
  }

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return "arr Should only content integers but found nonIntegers";
    }
  }

  let ans = arr.filter((e) => isPrime(e));

  return ans;
}

// Problem2

function checkPromoted(data) {
  let isArray = Array.isArray(data);
  if (!isArray) {
    return "Input should be an array";
  }

  let totalPromoted = 0;
  let totalPromotedUnder15 = 0;
  let totalAgePromotedMale = 0;

  let promotedAge = 0;
  let totalPromotedFemale = [];

  data.forEach((element) => {
    if (element.promoted) {
      totalPromoted++;
      promotedAge += element.age;

      if (element.age < 15) {
        totalPromotedUnder15++;
      }

      if (element.gender === "Male") {
        totalAgePromotedMale += element.age;
      }

      if (element.gender === "Female") {
        totalPromotedFemale.push(element);
      }
    }
  });

  let totalPromotedAvgAge = (promotedAge / totalPromoted) | 0;

  let totalPromotedFemaleAscByAge = totalPromotedFemale.sort(
    (a, b) => a.age - b.age
  );

  return {
    totalPromoted,
    totalPromotedAvgAge,
    totalPromotedUnder15,
    totalAgePromotedMale,
    totalPromotedFemaleAscByAge,
  };
}

// Problem3

let checkApiResponse = () => {

  try{
     return axios.get("http://localhost:8080/houses")
  .then((res) => {
    console.log(res.data);
    return res.data;
  });
  }catch(er){

  }
 
};

module.exports = { checkPrime, checkPromoted, checkApiResponse };
