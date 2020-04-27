// Random Number
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function letTest(obj) {
    let min = obj.min.value
        max = obj.max.value
    if (min < max) {
      console.log("Верно")
    }
        else{
            console.log("Неверно")
        }
    console.log(min);  // 1
}

function func(obj) {
    var num = obj.num1.value
    rand = randomInteger(1*min, 1*max) 
    console.log("Введенное число", num)
    console.log("Задумaное число", rand)
    if (num < rand) {
        console.log("Введенное число меньше загаданного") 
        document.getElementById('chislo').innerHTML = 'Введенное число меньше загаданного';
    }
     else 
        if (num > rand) {
            console.log("Введенное число больше загаданного")
            document.getElementById('chislo').innerHTML = 'Введенное число больше загаданного';
        }
        else 
            if (num = rand) {
                console.log("Вы угадали число")
                document.getElementById('chislo').innerHTML = 'Ты угадал число, молодец!'; 
            }
}
//настроить экспорт в функцию фун
