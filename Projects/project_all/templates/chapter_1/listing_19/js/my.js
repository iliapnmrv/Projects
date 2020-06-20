function care (obj)
{
    var a=obj.st1.value
    var b=obj.st2.value
    var c=obj.st3.value
    var s; p=a*1+b*1+c*1;
    document.writeln ("Периметр треугольника равен ",p,"<br>");
    p=p/2;
    s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    document.write ("Площадь треугольника равна ", s)
}
