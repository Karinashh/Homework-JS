// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

console.log(square(4, 8));

// створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return Math.PI * r ** 2;
}

let circle = circleArea(7);
console.log(circle);

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
    return 2 * Math.PI * r * (h + r);
}

let cylinder = cylinderArea(5, 7);
console.log(cylinder);

// створити функцію яка приймає масив та виводить кожен його елемент
let some = [[0, 1, 2, 3, 4], 'learn', 71, false, 'negotiations', 35, 21, 'dog', true, 'red', 'dog', NaN]

function elementsOfArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

elementsOfArray(some)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dolor dolore harum ipsam iste magnam, minima necessitatibus, nisi quisquam quod reiciendis rem repellat soluta velit. Blanditiis explicabo maxime soluta.")

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function tag(textForLi) {
    document.write(`<ul>
<li>${textForLi}</li>
<li>${textForLi}</li>
<li>${textForLi}</li>
</ul>`);
}

tag('Hello');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function tags(textForElements, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
      document.write(`<li>${textForElements}</li>`)
    }
    document.write(`</ul>`)
}

tags('Hello, world!', 10);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = [true, 100, 'call', null, 'number', 0, false]

function lists(contentForLi) {
    for (const element of contentForLi) {
        document.write(`<li>${element}</li>`);
    }
}
lists(mass);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: '114567899', name: 'Vasya', age: '33'},
    {id: '114567899', name: 'Petya', age: '18'},
    {id: '114567899', name: 'Serhii', age: '19'},
    {id: '114567899', name: 'Masha', age: '22'},
    {id: '114567899', name: 'Sofia', age: '43'},
    {id: '114567899', name: 'Alex', age: '55'},
    {id: '114567899', name: 'Olya', age: '28'},
    {id: '114567899', name: 'Vlad', age: '21'},
    {id: '114567899', name: 'Yakov', age: '17'},
    {id: '114567899', name: 'Karina', age: '29'}
]

function arrayWrite($array) {
    for (const arrayObject of $array) {
        document.write(`<div>id: ${arrayObject.id}, name: ${arrayObject.name}, age: ${arrayObject.age}</div>`);
    }
}

arrayWrite(users);

// створити функцію яка повертає найменьше число з масиву
let numbers = [0, 2, -5, 7, 100, 1111, -155, 33, -9999999]

function smallestNumber(arrayOfNumbers) {
    let min = arrayOfNumbers[0];
    for (const numberElement of arrayOfNumbers) {
        if (numberElement < min) {
            min = numberElement;
        }
    }
    console.log(min);
}

smallestNumber(numbers);

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let num = [35, 1, -1, 8, -100]

function sum(arrayOfNum) {
    let answer = 0;
    for (const arrayOfNumElement of arrayOfNum) {
        answer += arrayOfNumElement;
    }
    return answer;
}

console.log(sum(num));
