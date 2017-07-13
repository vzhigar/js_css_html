function addition(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function integerDivision(a, b) {
  var rest = a % b;
  return (a - rest) / b;
}

console.log('\nAddition:');
console.log('number + number: ' + addition(1.4, 2.67));
console.log('number + string: ' + addition(1, 'a'));
console.log('number + undefined: ' + addition(1, undefined));
console.log('number + true: ' + addition(1, true));
console.log('number + false: ' + addition(1, false));
console.log('number + NaN: ' + addition(1, NaN));
console.log('number + null: ' + addition(232, null));
console.log('number + object: ' + addition(1, {age: 28}));
console.log('number + array: ' + addition(-45, [55, 66, -12]));
console.log('addition with one argument: ' + addition(33));
console.log('addition without arguments: ' + addition());

console.log('\nSubtraction:');
console.log('number - number: ' + subtract(77, 55));
console.log('number - string: ' + subtract(3, 'x'));
console.log('number - undefined: ' + subtract(7, undefined));
console.log('number - true: ' + subtract(33, true));
console.log('number - false: ' + subtract(55, false));
console.log('number - NaN: ' + subtract(33, NaN));
console.log('number - null: ' + subtract(56, null));
console.log('number - object: ' + subtract(23, {}));
console.log('number - array: ' + subtract(-13, [-6, 5, 12]));
console.log('subtraction with one argument passed: ' + subtract(-4));
console.log('subtraction with no arguments passed: ' + subtract());

console.log('\nDivision:');
console.log('number / number: ' + divide(45.45, 13.2));
console.log('number / string: ' + divide(34, 'a'));
console.log('number / undefined: ' + divide(45, undefined));
console.log('number / true: ' + divide(33, true));
console.log('number / false: ' + divide(12, false));
console.log('number / NaN: ' + divide(56, NaN));
console.log('number / null: ' + divide(566, null));
console.log('number / object: ' + divide(555, {}));
console.log('number / array: ' + divide(-4, [-3, -4, -7]));
console.log('division with one argument: ' + divide(22));
console.log('division with no arguments: ' + divide());

console.log('\nMultiplication:');
console.log('number * number: ' + multiply(11, 34));
console.log('number * string: ' + multiply(12, 'asd'));
console.log('number * undefined: ' + multiply(23, undefined));
console.log('number * true: ' + multiply(33, true));
console.log('number * false: ' + multiply(55, false));
console.log('number * NaN: ' + multiply(11, NaN));
console.log('number * null: ' + multiply(-34, null));
console.log('number * object: ' + multiply(13, {name: 'Igor'}));
console.log('number * array: ' + multiply(-6, [3, 5, 99]));
console.log('multiplication with one argument passed: ' + multiply(555));
console.log('multiplication with no arguments passed: ' + multiply());

console.log('\nInteger division:');
console.log('number / number: ' + integerDivision(-11.3, 3.4));
console.log('number / number: ' + integerDivision(5.6, 2));
console.log('number / number string: ' + integerDivision(23.4, '22'));
console.log('number / string: ' + integerDivision(3.4, 'z'));
console.log('number / undefined: ' + integerDivision(5.6, undefined));
console.log('number / true: ' + integerDivision(34.5, true));
console.log('number / false: ' + integerDivision(-36.1, false));
console.log('number / NaN: ' + integerDivision(23.1, NaN));
console.log('number / null: ' + integerDivision(11, null));
console.log('number / object: ' + integerDivision(23.5, {name: 'Kate'}));
console.log('number / array: ' + integerDivision(45, [23, 44, 55]));
console.log('integer division with one argument passed: ' + integerDivision(-4.5));
console.log('integer division with no arguments passed: ' + integerDivision());
