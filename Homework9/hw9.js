// є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту. Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


let target = document.getElementsByClassName('family')[0];


for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');

    let memberData = document.createElement('h2');
    memberData.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`;
    div.appendChild(memberData);

    let memberInfo = document.createElement('p');
    memberInfo.innerText = simpson.info;
    div.appendChild(memberInfo);

    let memberPhoto = document.createElement('img');
    memberPhoto.src = simpson.photo;
    div.appendChild(memberPhoto);

    target.appendChild(div);
}


// Цикл в циклі
// Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами. Приклад структири знаходиться у файлі example.png*/


let target2 = document.getElementsByClassName('array')[0];

for (const coursesArrayElement of coursesArray) {

    let div2 = document.createElement('div');
    div2.classList.add('course');

    let title = document.createElement('h1');
    title.innerText = coursesArrayElement.title;
    div2.appendChild(title);

    let monthDuration = document.createElement('b');
    monthDuration.innerText = `month duration - ${coursesArrayElement.monthDuration} `;
    div2.appendChild(monthDuration);

    let hourDuration = document.createElement('b');
    hourDuration.innerText = `hour duration - ${coursesArrayElement.hourDuration}`;
    div2.appendChild(hourDuration);

    let ul = document.createElement('ul');
    for (const module of coursesArrayElement.modules) {

        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);

    }
    div2.appendChild(ul);

    target2.appendChild(div2);
}
 /*створити блок,
додати йому класи wrap, collapse, alpha, beta
додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
додати цей блок в body.
клонувати його повністю, та додати клон в body.*/


let divElement = document.createElement('div');
divElement.classList.add('wrap');
divElement.style.blockSize = '300px';
divElement.style.background = 'yellow';

let h2Element = document.createElement('h2');
h2Element.classList.add('collapse');
h2Element.innerText = 'collapse';
h2Element.style.fontSize = '30px';
h2Element.style.color = 'blue';
h2Element.style.background = 'red';
h2Element.style.margin = '0px';
divElement.appendChild(h2Element);

let h5Element = document.createElement('h2');
h5Element.classList.add('alpha');
h5Element.innerText = 'alpha';
h5Element.style.fontSize = '20px';
h5Element.style.color = 'red';
h5Element.style.background = 'blue';
divElement.appendChild(h5Element);

let pElement = document.createElement('h2');
pElement.classList.add('beta');
pElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, consequuntur, debitis dignissimos error, iure laboriosam laborum nemo non numquam officiis quo similique vero! A adipisci culpa delectus sint tempora!';
pElement.style.fontSize = '15px';
pElement.style.color = 'black';
pElement.style.background = 'orange';
divElement.appendChild(pElement);


document.body.appendChild(divElement);


document.body.appendChild(divElement.cloneNode(true));

/*Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/

let template = ['Main','Products','About us','Contacts'];

let menu = document.getElementsByClassName('menu')[0];

for (const templateElement of template) {
    let li = document.createElement('li');
    li.innerText = templateElement;

    menu.appendChild(li);
}
// Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration. Завдання робити через цикли.

let course = document.getElementsByClassName('courses')[0];

for (const coursesAndDurationElement of coursesAndDurationArray) {

    let divCourse = document.createElement('div');
    divCourse.innerText = `title: ${coursesAndDurationElement.title}, month duration: ${coursesAndDurationElement.monthDuration}`;

    course.appendChild(divCourse)
}

// Є масив coursesAndDurationArray

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.

let wrapDiv = document.getElementsByClassName('items')[0];

for (const coursesAndDurationElement of coursesAndDurationArray) {

    let divItem = document.createElement('div');
    divItem.classList.add('item');

    let h1Title = document.createElement('h1');
    h1Title.innerText = coursesAndDurationElement.title;
    h1Title.classList.add('heading');
    divItem.appendChild(h1Title);

    let pMonthDuration = document.createElement('p');
    pMonthDuration.innerText = coursesAndDurationElement.monthDuration;
    pMonthDuration.classList.add('description');
    divItem.appendChild(pMonthDuration);

    wrapDiv.appendChild(divItem);
}


// Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button = document.getElementsByTagName('button')[0];

let text = document.getElementById('text');

button.onclick = function () {
    text.hidden = true;
}
//  створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let buttonForm = document.forms.form;

buttonForm.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    if (age < 18) {
        document.write('Ви не досягли 18-ти років');
    } else {
        document.write('Ви старше 18-ти');
    }
}

// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let table = document.getElementsByClassName('tablets')[0];

let chart = document.forms.tablets;

chart.onsubmit = function (e) {
    e.preventDefault();
    let lines = this.lines.value;
    let cell = this.cell.value;
    let content = this.content.value;
    for (let i = 0; i < lines; i++) {
        let divLine = document.createElement('div');
        divLine.classList.add('line');
        for (let j = 0; j < cell; j++) {
            let divCell = document.createElement('div');
            divCell.classList.add('cell')
            divLine.appendChild(divCell);
            let bContent = document.createElement('b');
            bContent.innerText = content;
            divCell.appendChild(bContent);
        }
        table.appendChild(divLine);
    }

}