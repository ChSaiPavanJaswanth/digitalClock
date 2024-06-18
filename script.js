let hrs = document.getElementById('hrs');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


// console.log(curTime);
// console.log(typeof(curTime));
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());

setInterval(setTime,1000)


function setTime(){
    let curTime = new Date();
    hrs.innerHTML = curTime.getHours();
    minutes.innerHTML = curTime.getMinutes();
    seconds.innerHTML = curTime.getSeconds();
}