// DayNight
var Data = new Date();
var Hour = Data.getHours();
var Minutes = Data.getMinutes();
var time = Hour + Minutes / 60;
var func = [];
if (time >= 6 && time < 12) func.push('Доброе утро,');
if (time >= 12 && time < 17) func.push('Добрый день,');
if (time >= 17 && time < 21) func.push('Добрый вечер,');
if (time >= 21 && time < 24) func.push('Доброй ночи,');
if (time >= 0 && time < 6) func.push('Доброй ночи,');
// Вывод
//document.write("Текущее время: "+Hour+":"+Minutes+": "+func.join(','));
document.getElementById('time').innerHTML = func;
document.getElementById('hour').innerHTML = Hour;
document.getElementById('minutes').innerHTML = Minutes;
document.getElementById('times').innerHTML = time;
