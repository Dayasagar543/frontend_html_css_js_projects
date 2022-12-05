let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let timing= document.getElementById("ampm");

function updateclock() { 
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds(); 
    if (hr > 12) {
        hr = hr - 12;
        timing.innerText = "pm";
    } else {
        timing.innerText ="am"
    }
    hour.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
   setTimeout(updateclock,1000)
}
updateclock();
