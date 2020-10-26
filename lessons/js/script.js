'use strict';

let bgColor = document.querySelector('.wrapper'),
    h1 = document.querySelector('#color'),
    btn = document.querySelector('#change');

let getRandomColor = function () {
  let letters = '0123456789ABCDEF',
  color = '#';

  for (let i = 0; i < 6; i++) {
    color +=  letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn.addEventListener('click', function () {
  let color = getRandomColor();
  
  bgColor.style.backgroundColor = `${color}`;
  h1.innerHTML = `${color}`;
  btn.style.color = `${color}`;
});