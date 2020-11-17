document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  'use strict';

  const select = document.getElementById('cars'),
    output = document.getElementById('output');

  // eslint-disable-next-line arrow-body-style
  const getData = () => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', './cars.json');
      request.setRequestHeader('Content-type', 'application/json');
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          resolve(response);
        } else {
          reject(request.statusText);
        }
      });
      request.send();
    });
  };

  select.addEventListener('change', () => {
    getData()
      .then(data => {
        console.log(data);
        data.cars.forEach(item => {
          if (item.brand === select.value) {
            const { brand, model, price } = item;
            output.innerHTML = `Тачка ${brand} ${model} <br>
                                Цена: ${price}$`;
          }
        });
      })
      .catch(error => {
        output.innerHTML = `Произошла ошибка ${error}`;
      });
  });

});
