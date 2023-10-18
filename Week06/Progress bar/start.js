const parent = document.getElementById('par');
let count=1;

function forward(){

    const child1 = document.getElementById(`${count}`);
    const child2 = child1.nextElementSibling;
    child1.setAttribute('class', 'circle_fill');
    child2.setAttribute('class', 'line_fill');
    count++;

}

function previous(){
    
    const child1 = document.getElementById(`${count}`);
    const child2 = child1.previousElementSibling;
    child1.setAttribute('class', 'circle');
    child2.setAttribute('class', 'line');
    count--;
}

/*function previous(){
first.addEventListener('click', filled_circle);

    function filled_circle(){
        child.remove();
}
}

function forward(){

}*/