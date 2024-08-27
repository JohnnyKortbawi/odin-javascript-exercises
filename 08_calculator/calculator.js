const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arrayToSum) {
	sumOfArray = 0;
  let i = 0;
  while (i < arrayToSum.length){
    sumOfArray += arrayToSum[i];
    i++;
  }
  return sumOfArray;
};

const multiply = function(arrayToMultiply) {
  productOfArray = 1;
  let i = 0;
  while (i < arrayToMultiply.length){
    productOfArray *= arrayToMultiply[i];
    i++;
  }
  return productOfArray;
};

const power = function(num, exponent) {
	powerNum = num;
  for (let i=0; i<exponent-1;i++) {
    powerNum *= num;
  }
  return powerNum;
};

const factorial = function(num) {
	factorialNum = 1;
  while (num > 0) {
    factorialNum *= num;
    num--;
  }
  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
