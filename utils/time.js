function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    // add a zero in front of numbers<10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById('date').innerHTML = year + "/" + month + "" + day;
}
startTime();