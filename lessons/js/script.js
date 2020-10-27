document.addEventListener('DOMContentLoaded', function () {

  'use strict';

  function DomElement (selector) {
    this.selector = selector;
    this.height = 100;
    this.width = 100;
    this.bg = 'grey';
    this.fontSize = 14;
    DomElement.prototype.createElem = function () {
      if (this.selector[0] === '.') {
        let div = document.createElement('div');
        document.body.append(div);
        div.classList.add(`${this.selector.substring(1)}`);
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: absolute;`;
        div.textContent = 'Квадрат 100 на 100 px';
      } else if (this.selector[0] === '#') {
        let p = document.createElement('p');
        document.body.append(p);
        p.setAttribute('id', `${this.selector.substring(1)}`);
        p.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
        p.textContent = 'Это созданный с помощью объекта класса DomElement элемент p';
      }
    }; 
    DomElement.prototype.eventListeners = function () {
      let div = document.querySelector('.square');
      console.log(div);
      document.addEventListener('keydown', function (event) {
        console.log(event.code);
        let computedStyle = getComputedStyle(div),
            coord = 0;
        if (event.code === 'ArrowLeft') {
          coord = +computedStyle.left.replace('px', '');
          div.style.left = `${coord - 10}px`;
        } else if (event.code === 'ArrowRight') {
          coord = +computedStyle.left.replace('px', '');
          div.style.left = `${coord + 10}px`;
        } else if (event.code === 'ArrowUp') {
          coord = +computedStyle.top.replace('px', '');
          div.style.top = `${coord - 10}px`;
        } else if (event.code === 'ArrowDown') {
          coord = +computedStyle.top.replace('px', '');
          div.style.top = `${coord + 10}px`;
        }
      });
    };
  }
  
  let objElement = new DomElement ('.square');
  
  console.log(objElement);
  console.log(objElement instanceof DomElement);
  
  objElement.createElem();
  objElement.eventListeners();

});
