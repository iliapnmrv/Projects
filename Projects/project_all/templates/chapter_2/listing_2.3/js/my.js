function sortval (obj)
{
    var a=Number(obj.num1.value);
    var b=Number(obj.num2.value);
    var c=Number(obj.num3.value);
    var d=Number(obj.num4.value);

    if (a > b) { r=a; a=b; b=r}
    if (a > c) { r=a; a=c; c=r}
    if (a > d) { r=a; a=d; d=r}
    if (b > c) { r=b; b=c; c=r}
    if (b > d) { r=b; b=d; d=r}
    if (c > d) { r=c; c=d; d=r}

    obj.num1.value=a
    obj.num2.value=b
    obj.num3.value=c
    obj.num4.value=d
}
