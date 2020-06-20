var d = new Date();
var Month = d.getMonth();
var func = [];
if (Month >= 0 && Month <= 1) func.push('На данный момент - ' + 'Зима');
if (Month >= 2 && Month <= 4) func.push('На данный момент - ' + 'Весна');
if (Month >= 5 && Month <= 7) func.push('На данный момент - ' + 'Лето');
if (Month >= 8 && Month <= 10) func.push('На данный момент - ' + 'Осень');
if (Month == 11 ) func.push('Зима');
// Вывод
document.getElementById('time').innerHTML = func;
