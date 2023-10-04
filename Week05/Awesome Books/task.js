
function add_book(){

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const parent = document.getElementById('container');
    const tag = document.createElement('p');
    const tag2 = document.createElement('button');
    const content = document.createTextNode(`"${title}" by ${author}`);
    tag.appendChild(content);
    parent.appendChild(tag);
}