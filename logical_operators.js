// 1
alert( null || 2 || undefined );

// 2
alert( alert(1) || 2 || alert(3) );

// 3
alert( 1 && null && 2 );

// 4
alert( alert(1) && alert(2) );

// 5
alert( null || 2 && 3 || 4 );

// 6
let age = 15;

if (age >= 14 || age <= 90) {
    alert ("OKAY");
}

// 7
// 7.1.

let age = 1;

if (!(age >= 14 && age <= 90)) {
    alert ("NORM");
}

// 7.2.

let age = 1;

if (age < 14 || age > 90) {
    alert ('NORM');
}

// 8
if (-1 || 0) alert( 'first' ); // выполнится, -1 тру.
if (-1 && 0) alert( 'second' ); ? // не выполнится т.к. результат фолс
if (null || -1 && 1) alert( 'third' ); // выполнится, выведет 1, т.к. сначала выполняется &&, тут -1 и 1 тру,
// значит берем последнее значение.. а потом по принципу выявления 1го истинного значения.

// 9. я прям охренела с этого задания, если честно.
let userName = prompt('Кто там?', '');

if (userName == 'Админ') {

    let password = prompt('Пароль?', '');

    if (password == 'я главный') {
        alert ('Здравствуйте!');
    } else if (password == '' || password == null) {
        alert ('Отменено');
    } else {
        alert ('Неверный пароль');
    }

} else if (userName == '' || userName == null) {
    alert ('Отменено');
} else {
    alert ('я вас не знаю!');
}