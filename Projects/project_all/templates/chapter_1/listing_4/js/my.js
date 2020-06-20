var a;
var b;
var c;

var a = prompt ('Введите значение переменной a');
var b = prompt ('Введите значение переменной b');
var c = prompt ('Введите значение переменной c');

if (a<b)
    {
        if (b>c)
        {
            document.write(a, "<br>");
            document.write(b, "<br>");
            document.write(c, "<br>");
            document.write("Максимальное значение &rarr;", b);
        }
        else{
            document.write(a, "<br>");
            document.write(b, "<br>");
            document.write(c, "<br>");
            document.write("Максимальное значение &rarr;", c);
        }
    }
    else
    {
        if (a>c){
            document.write(a, "<br>");
            document.write(b, "<br>");
            document.write(c, "<br>");
            document.write("Максимальное значение &rarr;",a);
        }
        else{
            document.write(a, "<br>");
            document.write(b, "<br>");
            document.write(c, "<br>");
            document.write("Максимальное значение &rarr;", c);
        }
    }