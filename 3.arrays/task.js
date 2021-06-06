function compareArrays(arr1, arr2) {
  let result;

  
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  const arrPositive = arr.filter(value => value > 0);
  const arr2 =  arrPositive.filter(value => !(value % 3));
  resultArr = arr2.map((value) => value * 10); 
  
  

  return resultArr; // array
}
