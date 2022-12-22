const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  total = 0
	arr.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(arr) {
  total = 1;
  arr.forEach(num => {
    total *= num;
  })
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
