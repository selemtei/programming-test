function flattenArray(arr) {
  let flattenedArray = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(flattenArray(item));
    }else {
      flattenedArray.push(item);
    }
  });
  
  return flattenedArray;
}

// Unit test cases
console.log(flattenArray([1, [2, 3], [[4], [5]]]));