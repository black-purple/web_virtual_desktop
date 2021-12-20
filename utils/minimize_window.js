function minWindow(id){
    let elem = document.getElementById(id);
    elem.style.top = '80%';
    elem.style.transition = '1s ease-in';
    elem.style.display = 'none';

}
function unMinWindow(id){
    let elem = document.getElementById(id);
    elem.style.top = '30%';
    elem.style.transition = '1s ease-in';
    elem.style.display = 'initial';

}

function minWindowToggle (id){
    let elem = document.getElementById(id);
    if (elem.style.display === 'none'){
        unMinWindow(id);
    }else{
        minWindow(id);
    }
}