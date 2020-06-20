function numkv(obj)
{ 
   var n = Number (obj.num1.value);
   d = document;
   var m=(n-1-(n-1)%3)/3+1;
   obj.res.value=m;
   switch (m)
   {
       case 1: d.write("Первый квартал"); break;
       case 2: d.write("Второй квартал"); break;
       case 3: d.write("Третий квартал"); break;
       case 4: d.write("Четвертый квартал"); break;

       default: d.write("ошибка в номере дня");
   }
}

function test() 
{
    var d = document;
    for (var n=1; n<=12; ++n) {
        d.write(n);
        d.write(" - ");
        d.write((n-1-(n-1)%3)/3+1);
        d.write("<br>");
    }
    
}