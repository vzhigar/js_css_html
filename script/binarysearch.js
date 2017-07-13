'use strict';

function binarySearch(array, element) {
  var first = 0;
  var last = array.length;
  var mid;
  var index = -1;
  
  while (first < last) {
    mid = Math.floor((first + last) / 2);
    if (element === array[mid]) {
      index = mid;
      break;
    }
    if (element < array[mid]) {
      last = mid
    } else {
        first = mid + 1;
    }
  }
  return index;
}

console.log('\nIterative binary search:');
console.log(binarySearch([1, 3, 9, 16, 44], 16));
console.log(binarySearch([1, 3, 9, 16, 44], 1));
console.log(binarySearch([1, 3, 9, 16, 44], 44));
console.log(binarySearch([1, 3, 9, 16, 44], 6));
console.log(binarySearch([1], 1));
console.log(binarySearch([], 11));

function recursiveBinarySearch(array, element, first, last) {
  var mid;
  var index = -1;
  
  if (arguments.length <= 2) {
    first = 0;
    last = array.length;
  }
  if (array.length === 0 || first >= last) {
    return index;
  }
  mid = Math.floor((first + last) / 2);
  if (element === array[mid]) {
    return mid;
  }
  if (element <= array[mid]) {
    return recursiveBinarySearch(array, element, first, mid);
  } else {
    return recursiveBinarySearch(array, element, mid + 1, last);
  }
}

console.log('Recursive binary search:');
console.log(recursiveBinarySearch([1, 3, 9, 16, 44], 16));
console.log(recursiveBinarySearch([1, 3, 9, 16, 44], 1));
console.log(recursiveBinarySearch([1, 3, 9, 16, 44], 44));
console.log(recursiveBinarySearch([1, 3, 9, 16, 44], 6));
console.log(recursiveBinarySearch([1], 1));
console.log(recursiveBinarySearch([], 11));