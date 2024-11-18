let c = localStorage.getItem('c') || '';

display();
// to display the calculations when the page first loads

function calculate(value){
    c += value;
    display();
    localStorage.setItem('c',c);
}

function display(){
    document.querySelector('.calc').innerHTML = c;
}

function equalc(){
    c = eval(c);
    display();
    localStorage.setItem('c',c);
}

function clearc(){
    // localStorage.removeItem('c');
    c = '';
    display();
    localStorage.setItem('c',c);
}