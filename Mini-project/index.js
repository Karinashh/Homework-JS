/* В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');

        for (let user of users) {
            let div = document.createElement('div');
            let userText = document.createElement('h1');
            userText.innerText = `${user.id} - ${user.name}`;
            userText.classList.add('text');
            div.appendChild(userText)
            div.classList.add('users');

            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = ' details'
            a.classList.add('link')
            div.appendChild(a);

            wrap.appendChild(div);
        }
document.body.appendChild(wrap);
    });

