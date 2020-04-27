var Month = Data.getMonth();
var func = [];
if (Month >= 0 && Month <= 1) func.push('Зима');
if (Month >= 2 && Month <= 4) func.push('Весна');
if (Month >= 5 && Month <= 7) func.push('Лето');
if (Month >= 8 && Month <= 10) func.push('Осень');
if (Month == 11 ) func.push('Зима');
// Вывод
//document.write("Текущее время: "+Hour+":"+Minutes+": "+func.join(','));
document.getElementById('time').innerHTML = func;
