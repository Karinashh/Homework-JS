// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(3, 'Olya', 'Shevchenko', "shevchenko@gmail", 3805734128);
let user2 = new User(2, 'Kolya', 'Shevchenko', "shevchenko11@gmail", 3800965423);
let user3 = new User(1, 'Sofia', 'Shevchenko', "shevchenko1@gmail", 3809981145);
let user4 = new User(4, 'Iryna', 'Shevchenko', "shevchenko111@gmail", 3806755534);
let user5 = new User(8, 'Karyna', 'Shevchenko', "shevchenko23@gmail", 3806675433);
let user6 = new User(10, 'Alex', 'Shevchenko', "shevchenko2315@gmail", 3809334432);
let user7 = new User(7, 'Peter', 'Shevchenko', "shevchenko8833@gmail", 3808654258);
let user8 = new User(5, 'Volodymyr', 'Shevchenko', "shevchenko039@gmail", 3808543678);
let user9 = new User(9, 'Dan', 'Shevchenko', "shevchenko22@gmail", 3804128573);
let user10 = new User(6, 'Vanya', 'Shevchenko', "shevchenko2222@gmail", 3806543986);
let array = [];
let total = array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(array);


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let filterID = array.filter(item => item.id % 2 === 0);
console.log(filterID);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(array.sort((a, b) => {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
}));


// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [...order];
    }
}

let client1 = new Client(123, 'Eduard', 'Alan', 'eduardalan@ukr.net', 3809532235, ['tomato', 'juice', 'orange', 'shrimps']);
let client2 = new Client(225, 'Lisa', 'Drop', 'lisaaa@ukr.net', 3809845678, ['soya', 'juice', 'salmon', 'shrimps', 'squid']);
let client3 = new Client(12, 'Mark', 'Green', 'green88@ukr.net', 3809994599, ['tomato', 'chicken', 'orange', 'mussels']);
let client4 = new Client(60, 'Vasya', 'Kory', 'evasya3019@ukr.net', 3809559455, ['basil', 'juice', 'potato', 'shrimps', 'almond', 'lemon']);
let client5 = new Client(1111, 'Petya', 'Glory', 'petya22@ukr.net', 3805542867, ['tea', 'oysters', 'squid']);
let client6 = new Client(86, 'Lesya', 'Poppy', 'lesya1209@ukr.net', 3801234567, ['octopus', 'potato', 'lemon', 'almond', 'pistachio']);
let client7 = new Client(6, 'Peter', 'Unit', 'peter5@ukr.net', 3802359532, ['cucumber', 'chicken', 'pistachio', 'shrimps']);
let client8 = new Client(29, 'Vadym', 'White', 'whitewhite@ukr.net', 3803223595, ['unagi', 'oysters', 'squid', 'octopus']);
let client9 = new Client(93, 'Andrii', 'Sett', 'andrii9999@ukr.net', 3805322395, ['tomato', 'juice', 'orange', 'shrimps']);
let client10 = new Client(100, 'Serhii', 'West', 'serj09@ukr.net', 3803223595, ['octopus', 'potato', 'lemon', 'almond', 'tomato', 'chicken', 'orange']);
let arrayofClients = [];
let allClients = arrayofClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrayofClients);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrayofClients.sort((a, b) => {
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length < b.order.length) {
        return -1;
    }
    if (a.order.length === b.order.length) {
        return 0;
    }
}));

/* Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car(model, manufacturer, year_of_manufacture, max_speed, engine_capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year_of_manufacture = year_of_manufacture;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.max_speed} на годину`
    };
    this.info = function () {
        return `model - ${this.model}, manufacturer - ${this.manufacturer}, year of manufacture - ${this.year_of_manufacture}, max speed - ${this.max_speed}, engine capacity - ${this.engine_capacity}`
    };
    this.increaseMaxSpeed = function (new_speed) {
        this.new_speed = new_speed;
        return this.max_speed + this.new_speed;
    };
    this.changeYear = function (new_value) {
        return this.new_value = new_value;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car1 = new Car('Range Rover', 'Land Rover', 2015, 217, 2.0);
car1.addDriver({name: 'Serhii', surname: 'Lovchenko', age: 35});
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(40));
console.log(car1.changeYear(2017));
console.log(car1);


/*(Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
class Cars {


    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    };

    info() {
        return `model - ${this.model}, manufacturer - ${this.manufacturer}, year of manufacture - ${this.yearOfManufacture}, max speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}`
    };

    increaseMaxSpeed(newSpeed) {
        this.newSpeed = newSpeed;
        return this.maxSpeed + this.newSpeed;
    };

    changeYear(newValue) {
        return this.newValue = newValue;
    };
    addDriver(driver) {
        this.driver = driver;
    }

}

let
    car2 = new Cars('Range Rover', 'Land Rover', 2015, 217, 2.0);
car2.addDriver({name: 'Serhii', surname: 'Lovchenko', age: 35});
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2018));

console.log(car2);


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Elizabeth', 20, 35);
let cinderella2 = new Cinderella('Ann', 21, 36);
let cinderella3 = new Cinderella('Daphne', 22, 34);
let cinderella4 = new Cinderella('Penelopa', 19, 35.5);
let cinderella5 = new Cinderella('Anastasia', 18, 37);
let cinderella6 = new Cinderella('Jasmin', 14, 37);
let cinderella7 = new Cinderella('Aurora', 16, 36.5);
let cinderella8 = new Cinderella('Ariel', 30, 38);
let cinderella9 = new Cinderella('Tiana', 24, 34);
let cinderella10 = new Cinderella('Rapunzel', 27, 36);
let arrayofcinderellas = [];
let mass = arrayofcinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = {
    name: 'Kit',
    age: 25,
    shoe: 35
};
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < arrayofcinderellas.length; i++) {
    let cinderella = arrayofcinderellas[i];
    if (prince.shoe === cinderella.footSize) {
        cinderellaForPrince = cinderella;
    }
}
console.log(cinderellaForPrince);
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = arrayofcinderellas.find(value => value.footSize === prince.shoe);
console.log(findCinderella);