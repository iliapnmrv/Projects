function maxval (obj)
{
    var a=Number(obj.num1.value);
    var b=Number(obj.num2.value);
    var c=Number(obj.num3.value);
    var d=Number(obj.num4.value);
    var m=a
    if (b < m) m=b
    if (c < m) m=c
    if (d < m) m=d
    obj.res.value=m
}
