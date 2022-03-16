//grab a reference to the DOM
const notice = document.getElementById("maintenance-notice");
let secondsRemaining = 5;

setTimeout(() => {

    notice.style.display = 'none';

}, 5000);

let countDownInterval = setInterval(function () {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        console.log(secondsRemaining);
    } else {
        clearInterval(countDownInterval);
    }

}, 1000);
