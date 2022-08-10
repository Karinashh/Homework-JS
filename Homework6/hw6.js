// Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase(), str5.toLowerCase(), str6.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

/*Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let num = numbers.map(numbers => numbers + '');
console.log(num);

/*створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

let nums = [11,21,3];
// ascending
let ascending = nums.sort(function (a, b) {return a - b});
console.log(ascending);
// descending
let descending = nums.sort(function (a, b) {return b - a});
console.log(descending);

/*є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCourses);
// відсортувати його за спаданням за monthDuration
let descendingMonthDuranion = coursesAndDurationArray.sort((cours1, cours2) => {
    return cours2.monthDuration - cours1.monthDuration;

});
console.log(descendingMonthDuranion);

/* описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/

let cards = [
    {value: 'Joker', color:'red'},
    {value: 'Joker', color:'black'},

    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},

    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
];
// знайти піковий туз
let spadesAce = cards.find(value => value.cardSuit === 'spades' && value.value === 'Ace');
console.log(spadesAce);
// всі шістки
let allSix = cards.filter(value => value.value === 6);
console.log(allSix);
// всі червоні карти
let allRed = cards.filter(value => value.color === 'red');
console.log(allRed);
// всі буби
let allDiamonds = cards.filter(value => value.cardSuit === 'diamonds');
console.log(allDiamonds);
// всі трефи від 9 та більше
let filteredClubs = cards.filter(value => value.value >= 9 + '' && value.cardSuit === 'clubs');
console.log(filteredClubs);

/*Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}*/
let redused = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(redused);