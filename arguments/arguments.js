function sum() {
  let sum = 0;
  const arr = Array.from(arguments);
  arr.forEach(el => sum += el);
  return sum;
}

function sum(...args) {
  let sum = 0;
  args.forEach(el => sum += el);
  return sum;
}

Function.prototype.myBind = function(...bindArgs) {
  return (...callArgs) => {
    return this.apply(bindArgs[0], bindArgs.slice(1).concat(callArgs));
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function curriedSum(numArgs){
  const numbers = [];
  return function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      return numbers.reduce((acc = 0, el) => acc += el);
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function(numArgs) {
  const numbers = [];
  let _curry = (callArgs) => {
    numbers.push(callArgs);
    if (numbers.length === numArgs) {
      return this.apply("hello", anumbers);
    }
    else {
      return _curry;
    }
  };
  return _curry;
};