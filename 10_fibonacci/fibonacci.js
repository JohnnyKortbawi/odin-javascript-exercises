const fibonacci = function(number) {
  if (typeof(number) == 'string') {
    number = parseInt(number);
  }
  if (number < 0) {return "OOPS";}
  else if (number == 0) {return 0;}
  else {
    num1 = 0;
    num2 = 1;
    let fib = 1;
    for (let i=1; i<number; i++) {
      fib = num1 + num2;
      num1 = num2;
      num2 = fib;
    }
    return fib;
  }
};

// Do not edit below this line
module.exports = fibonacci;
