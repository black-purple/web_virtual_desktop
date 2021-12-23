function expandArea(){
    let exButton = document.getElementById("left_arrow");
    let rdButton = document.getElementById("right_arrow");
    let timeWidget = document.getElementById("time_widget");
    exButton.parentNode.style.right = "12%"; 
    timeWidget.style.width = "25vh";
    exButton.style.display = 'none';
    rdButton.style.display = 'initial';
}
function reduceArea(){
    let exButton = document.getElementById("left_arrow");
    let rdButton = document.getElementById("right_arrow");
    let timeWidget = document.getElementById("time_widget");
    rdButton.parentNode.style.right = "7%"; 
    timeWidget.style.width = "15vh";
    rdButton.style.display = 'none';
    exButton.style.display = 'initial';
}
