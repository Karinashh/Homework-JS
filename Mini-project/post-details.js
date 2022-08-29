/* На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)*/

url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp =>  resp.json())
    .then(postInfo => {
        let divForPostInfo = document.createElement('div');
        divForPostInfo.classList.add('main')
        for (const postInfoKey in postInfo) {
            let p = document.createElement('h4');
            p.innerText = `${postInfoKey}- ${postInfo[postInfoKey]}`;
            divForPostInfo.appendChild(p);
        }
        document.body.appendChild(divForPostInfo)
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(promise => promise.json())
            .then(comments => {
                let blocks = document.createElement('div');
                blocks.classList.add('blocks');
                for (const commentsKey in comments) {
                    let content = document.createElement('div');
                    content.classList.add('content');
                    let com = document.createElement('p');
                    com.innerText = comments[commentsKey].body;
                    blocks.appendChild(content);
                    content.appendChild(com);
                }
                document.body.appendChild(blocks)
            })
    })