 let arr = [5, 7, 9, 11, 15, 17, 19]

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }
console.log((bubbleSort(arr)))

let sourch = function(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while(left <= right) {
    mid = Math.round((right - left) /2) + left;
    if(num === arr[mid]) {
      return mid
    } else if (num < arr[mid]) {
      right = mid - 1;
    } else if (num > arr [mid]) {
      left = mid + 1
    }
  }
  return - 1
} 

console.log(sourch(arr, 11));


let people = 
  [{name: 'John', age: 20},
  {name: 'Ana', age: 15},
  {name: 'Ana', age: 23}]

people.sort(function(a, b) {
  if (a.age > b.age) {
    return 1
  } else if (a.age < b.age) {
    return -1
  } else if (a.age ) {
    return 0
  }
}) 
console.log (people)
