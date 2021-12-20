// Add a zero in front of numbers<10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function startTime() {
    // Initializing date object
    let today = new Date();

    // Getting hours, mminutes and seconds
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Getting Year, month and day
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    // Adding a zero in front of numbers less than 10
    // e.g. (when the number of hours or minutes is 1,2,3...9 )
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.querySelector('time').textContent = hours + ":" + minutes + ":" + seconds;
    document.querySelector('date').textContent = day + "/" + month + "/" + year;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

// test pull request 