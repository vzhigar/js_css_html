'use strict';

function isArray(array) {
  return Array.isArray(array);
}

function isArray2(array) {
  return array instanceof Array;
}

function isArray3(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

console.log('isArray functions results:');
console.log('isArray1 result:');

console.log(isArray([1, 2, 3, 4]));
console.log(isArray('obj'));
console.log(isArray({name: 'John'}));
console.log(isArray([]));
console.log(isArray('apple', 'banana'));
console.log(isArray(['apple', 'banana']));

console.log('isArray2 result:');
console.log(isArray2(1));
console.log(isArray2({}));
console.log(isArray2(['a', 'b', 'c']));
console.log(isArray2(undefined));
console.log(isArray2(NaN));

console.log('isArray3 result:');
console.log(isArray3([1, 3, 4]));
console.log(isArray3(11));
console.log(isArray3({}));
console.log(isArray3(undefined));
console.log(isArray3(NaN));
console.log(isArray3([]));

function range(start, end, step) {
  var result = [];
  
  if (end == undefined) {
    end = start;
    start = 0;
  }
  
  if (step == undefined) {
    step = Math.abs(end) - start > 0 ? 1 : -1;
  }
  
  if (step > 0) {
    for (var i = start; i < end; i+=step) {
      result.push(i);
    }
  }
  
  if (step < 0) {
    for (var i = start; i > end; i+=step) {
      result.push(i);
    }
  }
  
  return result;
}

console.log('range result:');
console.log(range(3, 6));
console.log(range());
console.log(range(4));
console.log(range(77, 9, -3));
console.log(range(215, 238, 4));
console.log(range(-1, -11, -2));
console.log(range(-44, -5, 3));
console.log(range(1, 6, 0));
console.log(range(1, 12, -4));
console.log(range(10, 5));

console.log(range(10));
console.log(range(1, 10));
console.log(range(1, 10, 3));
console.log(range(10, null, 3));
console.log(range(10, null));
console.log(range(-2, -5));
console.log(range(-5, -2));
console.log(range(-5, -2, 2));
console.log(range(-5, -2, -2));
console.log(range(-5, null, 2));
console.log(range(-5, null, -2));
console.log(range(-10, -20, -5));
console.log(range(-20, -10, -5));
console.log(range(10, null, -3));

function compact1(array) {
  return array.filter(function(element) {
    return element;
  })
}

console.log('compact1 result:');
console.log(compact1([1, 0, true, false, {}, undefined]));


function compact2(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log('compact2 result:');
console.log(compact2([1, 0, true, false, {}, undefined]));

function sum1(array) {
  return array.reduce(function(previous, next) {
    return previous + next;
  })
}

console.log('sum1 result:');
console.log(sum1([1, 2, 3, 4]));
console.log(sum1([-3, -11, 55, 4, 0]));

function sum2(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log('sum2 result:');
console.log(sum2([1, 2, 3, 4]));
console.log(sum2([-3, -11, 55, 4, 0]));

function unique(array) {
  return array.filter(function(element, index) {
    return array.indexOf(element) === index;
  })
}

console.log('unique result:');
console.log(unique([1, 'a', 'b', 3, true, 1, 'a', '']));

function last(array) {
  return array[array.length - 1];
}

console.log('last function result:');
console.log(last([8]));
console.log(last([2, 3, 6.8, 68]));
console.log(last(['a', 'c', undefined, false]));

function excludeLast(array, amount) {
  if (amount === undefined) {
    return array.slice(0, -1);
  } else {
    return array.slice(0, -amount);
  }
}

console.log('excludeLast result:');
console.log(excludeLast([1, 2, 3, 4, 5]));
console.log(excludeLast([[1, 2, 3, 4, 5], 3]));
