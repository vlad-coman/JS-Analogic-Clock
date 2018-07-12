let secunde         = document.getElementById("secunde"),
    minute          = document.getElementById("minute"),
    ore             = document.getElementById("ore"),
    angleSeconds    = 0,
    angleMinutes    = 0,
    angleHours      = 0,
    form            = document.forms['picker'],
    timeForm        = form['times'],
    time            = new Date(),
    valueOfEnteredTime,
    valueOfHours,
    valueOfMinutes;

let setTheHours = (hours) => {
    angleHours = hours * 30;
    ore.style.transform = "rotate(" + angleHours + "deg)";
}

let setTheMinutes = (minutes) => {
    angleMinutes = minutes * 6;
    minute.style.transform = "rotate(" + angleMinutes + "deg)";
    angleHours += Math.floor(minutes / 2);
    ore.style.transform = "rotate(" + angleHours + "deg)";
}

let setTheSeconds = (seconds) => {
    angleSeconds = seconds * 6;
    secunde.style.transform = "rotate(" + angleSeconds + "deg)";
}

let resetTheSeconds = () => {
    angleSeconds = 0;
    secunde.style.transform = "rotate(0deg)";
}

let setInitialClock = (hour, minutee, second) => {
    setTheSeconds(second);
    setTheHours(hour);
    setTheMinutes(minutee);
}

// Self invoking function for setting up the live clock
(() => {
    setInitialClock(time.getHours(), time.getMinutes(), time.getSeconds());
})();

// Setting up the corresponding interval for rotation angles of seconds, minutes and hours
setInterval(() => {
    angleSeconds = (angleSeconds + 6) % 360;
    secunde.style.transform = "rotate(" + angleSeconds + "deg)";
}, 1000)

setInterval(() => {
    angleMinutes = (angleMinutes + 1) % 360;
    minute.style.transform = "rotate(" + angleMinutes + "deg)";
}, 10000)

setInterval(() => {
    angleHours = (angleHours + 0.5) % 360;
    ore.style.transform = "rotate(" + angleHours + "deg)";
}, 60000)

//Setting the hour and minute entered by user
let enteredDate = (event) => {
    event.preventDefault();
    valueOfEnteredTime = timeForm.value.split(':');
    valueOfHours = valueOfEnteredTime[0];
    valueOfMinutes = valueOfEnteredTime[1];
    if (valueOfHours.charAt(0) === "0") {
        valueOfHours = Number(valueOfHours.charAt(1));
    }
    valueOfHours = Number(valueOfHours);

    if (valueOfMinutes.charAt(0) === "0") {
        valueOfMinutes = Number(valueOfMinutes.charAt(1));
    }
    valueOfMinutes = Number(valueOfMinutes);
    for (var j = 0; j <= 23; j++) {
        if (valueOfHours === j) {
            setTheHours(valueOfHours);
        }
    }
    for (var i = 0; i <= 59; i++) {
        if (valueOfMinutes === i) {
            setTheMinutes(valueOfMinutes);
        }
    }
    resetTheSeconds();
}

form.addEventListener("submit", enteredDate, false);