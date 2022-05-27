'use strict';

let num = prompt('Введите число, чтобы найти произведение его цифр:'),
    arr = [],
    x = String(num),
    product = 1;

for (let i = 0; i < x.length; i++) {
  let ost = parseInt(num % 10);
  
  num = num / 10;

  arr[i] = ost;
}

for (let i = 0; i < arr.length; i++) {

  product = product * arr[i];

}

console.log('Произведение цифр числа ' + x + ' = ' + product);

