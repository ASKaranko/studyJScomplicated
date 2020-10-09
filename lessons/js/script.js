let num = 266219,
  mult = 1;

let digitStr = num.toString();

for (let i=0; i < digitStr.length; i++) {
  mult *= parseInt(digitStr[i], 10);
}

console.log(mult);
mult = mult ** 3;
console.log(mult.toString().substring(0,2));
