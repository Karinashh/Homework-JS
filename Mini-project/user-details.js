/*На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.*/

let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp =>  resp.json())
    .then(info => {
        let parents = document.createElement('div');
        parents.classList.add('block');
        function recursion(data) {

            for (const dataKey in data) {

                if (typeof data[dataKey] !== 'object') {
                    let div = document.createElement('div');
                    div.innerText = `${dataKey}: ${data[dataKey]}`;
                    div.classList.add('data');
                    parents.appendChild(div);
                } else {
                    recursion(data[dataKey])
                }
                }
        }
        recursion(info);
        document.body.appendChild(parents)

            let button = document.createElement('button');
            button.href = `user-details.html`;
            button.innerText = ' post of current user';
            button.classList.add('button');
            document.body.appendChild(button)
            button.onclick = function () {
                fetch(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(responce => responce.json())
            .then(posts => {
                let information = document.createElement('div');
                information.classList.add('info')
                for (const post of posts) {
                    let div1 = document.createElement('div');
                    div1.classList.add('div')
                    information.appendChild(div1);

                    let p = document.createElement('p');
                    p.innerText = post.title;
                    p.classList.add('post')
                    div1.appendChild(p);

                    let aForPost = document.createElement('a');
                    aForPost.href = `post-details.html?id=${post.id}`;
                    aForPost.innerText = ' detail of current post';
                    div1.appendChild(aForPost)
                }
                document.body.appendChild(information);

            })}

        })















