'use strict';

//Задание 1

let arr = ['10000', '34568', '11204.21', '400501', '289283', '23232', '73256120'];

for (let i = 0; i < arr.length; i++) {
  let n = parseInt(arr[i].substring(0,1));
  if (n === 2 || n === 4) {
    console.log(parseInt(arr[i]));
  }
}

// Задание 2

let arrSimple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log("Простые числа до 100 в столбец");
for (let i = 0; i < arrSimple.length; i++) {
  console.log(arrSimple[i] + " Делитель данного числа: 1 и " + arrSimple[i]);
}