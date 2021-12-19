function minWindow(id){
    var elem = document.getElementById(id);
    elem.style.display = 'none';

}
function unMinWindow(id){
    var elem = document.getElementById(id);
    elem.style.display = 'initial';

}

function minWindowToggle (id){
    var elem = document.getElementById(id);
    if (elem.style.display == 'none'){
        unMinWindow(id);
    }else{
        minWindow(id);
    }
}