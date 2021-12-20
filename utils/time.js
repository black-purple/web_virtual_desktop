window.onload = startTime();
// Add a zero in front of numbers<10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function startTime() {
    // Initializing date object
    var today = new Date();

    // Getting hours, mminutes and seconds
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // Getting Year, month and day
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();

    // Adding a zero in front of numbers less than 10
    // e.g. (when the number of hours or minutes is 1,2,3...9 )
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

// test pull request 