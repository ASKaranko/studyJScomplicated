'use strict';

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date;

console.log(today.getDay());

week.forEach(function (item, i, arr) {
  if (i === (today.getDay()) && (i >= 5)) {
    document.getElementById('day'+i).style.fontWeight='bold';
    document.getElementById('day'+i).style.fontStyle='italic';
    document.getElementById('day'+i).innerHTML=item;
  } else if (i === (today.getDay())) {
    document.getElementById('day'+i).style.fontWeight='bold';
    document.getElementById('day'+i).innerHTML=item;
  } else if (i >= 5) {
    document.getElementById('day'+i).style.fontStyle='italic';
    document.getElementById('day'+i).innerHTML=item;
  } else {
    document.getElementById('day'+i).innerHTML=item;
  }
});


