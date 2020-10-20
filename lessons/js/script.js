'use strict';

const dateVarA = document.querySelector('.date-a'),
      dateVarB = document.querySelector('.date-b');

let 
    week = ['Восресенье', 'Понедельник', 'Вторник', 'Среда',      'Чертверг', 'Пятница', 'Суббота'],
    month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентрября', 'Октября', 'Ноября', 'Декабря'],
    dayOfTheWeek = '',
    monthOfTheYear = '',
    declensionHour = '';

function addNull (elem) {
  if (elem < 10) {
    elem = '0' + elem;
  } 
  return elem;
}

function varA () {
  let date = new Date ();

  function declension () {
    if (date.getHours() === 1 || date.getHours() === 21) {
      declensionHour = 'час';
    } else if ((date.getHours() >= 2 && date.getHours() <= 4) || date.getHours() === 22 || date.getHours() === 23) {
      declensionHour = 'часа';
    } else {
      declensionHour = 'часов';
    }
  }

  week.forEach(function (item, i, arr) {
    if (i === date.getDay()) {
      dayOfTheWeek = item;
    }
  });
  
  month.forEach(function (item, i, arr) {
    if (i === date.getMonth()) {
      monthOfTheYear = item;
    }
  });

  declension();

  dateVarA.innerHTML = `Сегодня ${dayOfTheWeek}, ${date.getDate()} ${monthOfTheYear} ${date.getFullYear()}, ${date.getHours()} ${declensionHour} ${date.getMinutes()} минут ${date.getSeconds()} секунды`;
}

function varB () {
  let date = new Date ();

  dateVarB.innerHTML = `${addNull(date.getDate())}.${addNull(date.getMonth()+1)}.${date.getFullYear()} - ${addNull(date.getHours())}:${addNull(date.getMinutes())}:${addNull(date.getSeconds())}`;
}

let timerA = setInterval(varA, 1000);
let timerB = setInterval(varB, 1000);