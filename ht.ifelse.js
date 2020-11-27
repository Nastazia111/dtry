// Выведется ли alert (заменила здесь на console.log)? да, потому что "0" - это строка, а любая не пустая строка будет тру

if ("0") {
    console.log( 'Привет' );
}

// Название JavaScript

let question = prompt('Какое «официальное» название JavaScript?', '');

if (question == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// Покажите знак числа

let value = prompt('Введите число', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert ( 0 );
}

// Перепишите 'if' в '?'

result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';
