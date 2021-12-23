// Maximize window size
function maxWindow(id){
    let elem = document.getElementById(id);
    elem.style.height = '94%';
    elem.style.width = '100%';
    elem.style.top = '0';
    elem.style.left = '0';
    elem.style.transition = '.3s ease';
}
// unmaximize the window
function unMaxWindow(id){
    let elem = document.getElementById(id);
    elem.style.height = '400px';
    elem.style.width = '400px';
    elem.style.top = '30%';
    elem.style.left = '15%';
    elem.style.transition = '.3s ease';
}
// Toggle between maximized mode and normal mode
function maxWindowToggle(id){
    let elem = document.getElementById(id);
    if (elem.style.width === '100%'){
        unMaxWindow(id);
    }else{
        maxWindow(id);
    }
}
