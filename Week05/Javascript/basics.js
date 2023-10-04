

function remove_tag(){
    const first = document.getElementById('parent');
    const second = document.getElementById('child');
    
    first.removeChild(second);


    /*let child = document.querySelector('p');

    child.addEventListener('click', remove_child);

    function remove_child(){
        child.remove();
    }*/
}


function add_tag(){
    const first = document.getElementById('add');
    first.innerHTML += `<p>Hello Pakistan</p>`;
}


function add_complex(){
    const parent = document.getElementById('add');
    const tag = document.createElement('p');
    const content = document.createTextNode('Hello India');
    tag.setAttribute('class', 'class_assigned');
    tag.append(content);
    parent.appendChild(tag);
}