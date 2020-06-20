// DayNight
var Data = new Date();
var Hour = Data.getHours();
var Minutes = Data.getMinutes();
var time = Hour + Minutes / 60;
var func = [];
if (time >= 6 && time < 12) func.push('Доброе утро,' + ' username');
if (time >= 12 && time < 17) func.push('Добрый день,' + ' username');
if (time >= 17 && time < 21) func.push('Добрый вечер,' + ' username');
if (time >= 21 && time < 24) func.push('Доброй ночи,'  + ' username');
if (time >= 0 && time < 6) func.push('Доброй ночи,'  + ' username');
// Вывод
//document.write("Текущее время: "+Hour+":"+Minutes+": "+func.join(','));
document.getElementById('time').innerHTML = func;

function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
  }