function expandArea(){
    var exButton = document.getElementById("left_arrow");
    var rdButton = document.getElementById("right_arrow");
    var timeWidget = document.getElementById("time_widget");
    exButton.parentNode.style.right = "12%"; 
    timeWidget.style.width = "25vh";
    exButton.style.display = 'none';
    rdButton.style.display = 'initial';
}
function reduceArea(){
    var exButton = document.getElementById("left_arrow");
    var rdButton = document.getElementById("right_arrow");
    var timeWidget = document.getElementById("time_widget");
    rdButton.parentNode.style.right = "7%"; 
    timeWidget.style.width = "15vh";
    rdButton.style.display = 'none';
    exButton.style.display = 'initial';
}
