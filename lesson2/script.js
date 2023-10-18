"use strict";

// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).


/**
 * Функция проверяет, являются ли введенные данные целым положительным числом
 */
function checkPageNumber(pages) {
  if (!Number.isFinite(pages)) {
      throw new Error("Количество страниц должно быть числом");
  }
  if (pages < 0) {
    throw new Error("Количество страниц должно быть положительным");
  }
  if (!Number.isInteger(pages)) {
    throw new Error("Количество страниц должно быть целым числом");
  }
}

class Book {
  /**
   * Конструктор для создания книги
   * @param {string} title название книги
   * @param {string} author имя автора книги
   * @param {number} pages количество страниц в книге
   */
  constructor(title, author, pages) {
    checkPageNumber(pages);
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
}

const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"


// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.


function checkAgeNumber(age) {
    if (!Number.isFinite(age)) {
        throw new Error("Возраст студента должен быть числом");
    }
    if (age < 0) {
      throw new Error("Возраст студента должен быть положительным числом");
    }
  }

class Student {
  /**
   * Конструктор для создания студента
   * @param {string} name имя студента
   * @param {number} age возраст студента
   * @param {string} grade класс, в котором учится студент
   */  
  constructor(name, age, grade) {
    checkAgeNumber(age);
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
