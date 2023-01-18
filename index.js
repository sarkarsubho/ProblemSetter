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
    return "Praramiter should be an array";
  }

  for(let i=0;i<arr.length;i++){
    if(isNaN(arr[i])){
      return "arr Should only content integers but found nonIntegers"
    }
  }

  let ans = arr.filter((e) => isPrime(e));

  return ans;
}

module.exports = { checkPrime };
