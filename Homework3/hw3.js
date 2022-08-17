// - Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
let time = 45;
if (time >= 0 && time <= 15) {
    console.log('Перша чверть години');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть години');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть години');
} else if (time > 45 && time <= 59) {
    console.log('Четверта чверть години')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = +prompt('Enter the ordinal number of the day of the week');
switch (weekday) {
    case 1:
        document.write('<div> <h2>it is Monday</h2> </div>');
        break;
    case 2:
        document.write('<div> <h2>it is Tuesday</h2> </div>');
        break;
    case 3:
        document.write('<div> <h2>it is Wednesday</h2> </div>');
        break;
    case 4:
        document.write('<div> <h2>it is Thursday</h2> </div>');
        break;
    case 5:
        document.write('<div> <h2>it is Friday</h2> </div>');
        break;
    case 6:
        document.write('<div> <h2>it is Saturday</h2> </div>');
        break;
    case 7:
        document.write('<div> <h2>it is Sunday</h2> </div>')
        break;
    default:
        document.write('<div> <h2>Enter the ordinal number from 1 to 7</h2> </div>');
}
// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('Enter the first number');
let num2 = +prompt('Enter the second number');
if (num1 > num2) {
    document.write(num1);
} else if (num1 === num2) {
    document.write('The numbers are equal');
} else {
    document.write(num2)
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let a = '' || "default";
console.log(a);