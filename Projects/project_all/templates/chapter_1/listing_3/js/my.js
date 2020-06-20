var a;
var b;
var c;

var a = prompt ('Введите значение переменной a')
var b = prompt ('Введите значение переменной b')
var c = prompt ('Введите значение переменной c')

if ((a<=b) && (b<=c))
    {
        document.writeln("a=", a, "<br>")
        document.writeln("b=", b, "<br>")
        document.writeln("c=", c, "<br>")
        alert("good");
        document.writeln("good")
    }
    else
    {
        document.write("a=", a, "<br>")
        document.write("b=", b, "<br>")
        document.write("c=", c, "<br>")
        alert("no");
        document.writeln("no")
    }