'use strict';

let strFull = '  Success is not final, failure is not fatal: it is the courage to continue that counts.  ';
console.log("Вся строка:", strFull);

function strtrim(str) {
  if (typeof (str) !== 'string') {
    console.log('Введенный вами текст не является строкой');
  }
  let strContracted = str.trim();
  if (strContracted.length > 30) {
    console.log(strContracted.substring(0,30) + "...");
  }
}

strtrim(strFull);