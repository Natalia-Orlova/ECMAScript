"use strict";

"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

console.log(Math.min(...[1, 5, 7, 9]));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getValue() {
      return counter;
    },
  };
}

const num = createCounter();
num.increment();
console.log(`1-й счетчик: ${num.getValue()}`);
num.increment();
console.log(`1-й счетчик: ${num.getValue()}`);

const num2 = createCounter();
num2.increment();
console.log(`2-й счетчик: ${num2.getValue() * 4}`);

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

let result = null;
function findElementByClass(rootElement, classElement) {
  if (rootElement.hasChildNodes()) {
    for (const element of rootElement.children) {
      if (element.className === classElement) {
        result = element;
      } 
      findElementByClass(element, classElement);
    }
  }
  return result;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
