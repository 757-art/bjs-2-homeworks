// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = 101;
  max = -101;
  sum = 0;
  
  for (let i = 0;  i < arr.length; i++ ) {
    sum += arr[i];
    avg = (sum/arr.length).toFixed(2);
  if (arr[i] > max) {
    max = arr[i]
  }
  if (arr[i] < min) {
    min = arr[i]
  }
}
   

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0;  i < arr.length; i++ ) {
    sum += arr[i];
  }

 

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  
  
  for (let i = 0;  i < arrOfArr.length; i++ ) {
    let element = arrOfArr[i];
    worker(element);
    if (worker(element) > max) {
      max = worker(element)
    }
  } 
  
  return max
}
