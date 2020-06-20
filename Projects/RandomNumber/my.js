// Random Number
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
rand = randomInteger(1, 20);
function guess(obj) {
    var num = obj.num1.value;
    console.log("Введенное число", num);
    console.log("Задумaное число", rand);
    if (num < rand) {
        console.log("Введенное число меньше загаданного");
        document.getElementById('chislo').innerHTML = 'Введенное число меньше загаданного';
    }
     else 
        if (num > rand) {
            console.log("Введенное число больше загаданного");
            document.getElementById('chislo').innerHTML = 'Введенное число больше загаданного';
        }
        else 
            if (num == rand) {
                console.log("Вы угадали число");
                document.getElementById('chislo').innerHTML = 'Ты угадал число, молодец!'; 
            }
}