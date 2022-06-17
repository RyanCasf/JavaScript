var hour = 0;
var minute = 0;
var second = 0;

var time = 1;
var cron;

function start() {
    if (cron == null) {
        cron = setInterval(timer, time);
    }
}

function stop() {
    clearInterval(cron);
    cron = null;
}

function end() {
    clearInterval(cron);
    cron = null;

    hour = 0;
    minute = 0;
    second = 0;

    var sdf = (hour < 10 ? "0"+hour : hour)+":"+(minute < 10 ? "0"+minute : minute)+":"+(second < 10 ? "0"+second : second);
    document.getElementById('counter').innerHTML = sdf;
}

function timer() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        minute = 0;
        hour++;
    }

    var sdf = (hour < 10 ? "0"+hour : hour)+":"+(minute < 10 ? "0"+minute : minute)+":"+(second < 10 ? "0"+second : second);
    document.getElementById('counter').innerHTML = sdf;
}