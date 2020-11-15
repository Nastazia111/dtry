// примитивы

const name1 = "Nastasiia";

const surname1 = "Poliakova";

const name2 = "Nastasich";

const surname2 = "Nikonova";

const age1 = 23;

const age2 = 17;

const bool = true;

const typeNull = null;

const typeUndefined = "undefined";

const bigInt = 10n;

const symbol = Symbol("id");

// objects

const obj = {
  number: 12,
  text: "sometext",
};


// index. 0 = 1, 1 = str, 2 = true
const array = [1, "str", true];

function func(a, b) {
    const res = a + b + 3;

    return res;
}

const result = func(1, 2);

// сложения

console.log("Name1 + Surname1 =", name1 + surname1);

console.log("Name1 + age1 =", name1 + age1);

console.log("Age1 + age2 =", age1 + age2);

console.log("True + age2 =", true + age2);

console.log("true + true =", true + true);

console.log("String + age1 =", "1" + age2);

// вычетания

console.log("not number - number =", surname1 - age1);

console.log("Number - number =", age1 - age2);

console.log("Number - number =", age2 - age1);

console.log("True - number =", true - age1);

// Деление

console.log("Number / number =", age1 / age2);

console.log("Number / number =", age2 / age1);

console.log("Number / number =", age1 / 3);

console.log("Number / 0 =", age1 / 0);

// умножение

console.log("Number * number =", age1 * age2);

console.log("Number * number =", age1 * 23);

console.log("Number * string =", age1 * name1);

// остаток от деления

console.log("57 / 6 ostatok =", 57 % 6);

// преобразование

// строковое преобразование

let value = true;

console.log("cоздала тип - boolean =", typeof value);

value = toString("True");

console.log("преобразовала в строку -", typeof value);

// Численное преобразование

let str = "2110";

console.log("создала тип строка -", typeof str);

let num = Number (str);

console.log("преобразовала в номер -", typeof num);

// Логическое преобразование

console.log( Boolean (1) );

console.log( Boolean (0) );

console.log( Boolean ("0") );


