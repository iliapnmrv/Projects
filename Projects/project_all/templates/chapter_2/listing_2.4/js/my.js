function st (obj)
{
    var a=Number(obj.num1.value);
    var b=Number(obj.num2.value);
    var c=Number(obj.num3.value);
    var d=Number(obj.num4.value);
    var l;
    var t;
    var m=0;

    if (a > b) {l=b; t=a}
        else {t=b; l=a}
    if (b > t) {t=b}
    if (c > t) {t=c}
    if (d > t) {t=d}
    if (b < l) {l=b}
    if (c < l) {l=c}
    if (d < l) {l=d}
    if (l ==5) {m=100}
        else 
            if ((t ==5)&& (l ==4)) {m=75}
            else
                if ((t ==4)&& (l ==4)) {m=50}
    if (m==0)
    obj.stip.value="К сожалению, Вам стипендия не назначена"
    obj.stip.value="Вам назначена стипендия в размере "+m+" y.e."
}
