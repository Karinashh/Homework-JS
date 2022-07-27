// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let some = ['learn', 71, false, 'negotiations', 35, 21, 'dog', true, 'red', 'dog']
console.log(some[0]);
console.log(some[1]);
console.log(some[2]);
console.log(some[3]);
console.log(some[4]);
console.log(some[5]);
console.log(some[6]);
console.log(some[7]);
console.log(some[8]);
console.log(some[9])
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre
let book1 = {
    title: 'Arch of Triumph',
    pagecount: 455,
    genre: 'War novel'
};
let book2 = {
    title: 'Three Comrades',
    pagecount: 470,
    genre: 'War novel'
};
let book3 = {
    title: 'The Old Man and the Sea',
    pagecount: 127,
    genre: 'Novel'
}
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let newbook1 = {
    title: 'The Little Prince',
    pagecount: 96,
    genre: 'Fable',
    authors: [
        {
            name: 'Antoine de Saint-Exupery',
            age: 42
        },
        {
            name: 'Марина Марченко',
            age: 33
        }
        ]
};
let newbook2 = {
    title: 'Little Women',
    pagecount: 320,
    genre: 'Novel',
    authors: [
        {
            name: 'Louisa May Alcott',
            age: 36
        },
        {
            name: 'Богдана Носенок',
            age: 43
        }
        ]
};
let newbook3 = {
    title: 'The Divine Comedy',
    pagecount: 180,
    genre: 'Poem',
    authors: [
        {
            name: 'Dante Alighieri',
            age: 43
        },
        {
            name: 'Євген Дробязко',
            age: 50
        }
        ]
}
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: 'Vasya', username: 'kdsnjs', password: 'vasya2311'},
    { name: 'Masha', username: 'ldskf', password: 'masha2466'},
    { name: 'Petya', username: 'wezzx', password: 'petya0907'},
    { name: 'Serhii', username: 'oekjd', password: 'serhii1812'},
    { name: 'Sofia', username: 'pskjhg', password: 'sofia1503'},
    { name: 'Alex', username: 'pskkks', password: 'alex1609'},
    { name: 'Olya', username: 'ekdnxcs', password: 'olya1111'},
    { name: 'Vlad', username: 'wewdd', password: 'vlad0110'},
    { name: 'Yakov', username: 'xcvcvbc', password: 'yakov1998'},
    { name: 'Karina', username: 'asfsdf', password: 'karina2812'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password)
