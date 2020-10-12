'use strict';
//Дни недели

let daysOfWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Черверг', 'Пятница', 'Суббота', 'Воскресенье'],
  daysOfWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let question = prompt('Выберите на каком языке отображать дни недели', 'ru, en');

while(true) {
  if (question === 'ru') {
    console.log('Дни недели', daysOfWeekRu);
    break;
  } else if(question === 'en') {
    console.log('Days of Week', daysOfWeekEn);
    break;
  } else {
    question = prompt('Выберите правильный вариант: введите слово ru или en', 'ru, en');
  }
}

switch (question) {
  case 'ru':
    console.log('Дни недели', daysOfWeekRu);
    break;
  case 'en':
    console.log('Days of Week', daysOfWeekEn);
    break;
}

// let objLang = {
//   ru: daysOfWeekRu,
//   en: daysOfWeekEn,
// };

// console.log(objLang.ru);

let arrLang = [daysOfWeekRu, daysOfWeekEn];
console.log(arrLang[0]);
console.log(arrLang[1]);

//Второе задание

let namePerson = prompt('Выберите имя пользователя из списка или укажите другое имя', 'Артем, Максим');

let result = namePerson === 'Артем' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);