function answer1(n){
  const result = [];

  for(let index = 1; index <= n; index++){
    if(index % 3 === 0 && index % 5 === 0){
      result.push("PopSnap");
    }else if(index % 3 === 0){
      result.push("Pop");
    }else if(index % 5 === 0){
      result.push("Snap");
    }else{
      result.push(`${index}`);
    }
  }

  return result;
}

// Unit test cases
console.log(answer1(3));
console.log(answer1(5));
console.log(answer1(15));