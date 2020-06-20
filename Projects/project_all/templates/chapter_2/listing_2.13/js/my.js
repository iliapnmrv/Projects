function numday(obj)
{ 
   var m = Number (obj.num1.value);
   d = document;
   var s;
   switch (m)
   {
       case 1: s="Понедельник"; break;
       case 2: s="Вторник"; break;
       case 3: s="Среда"; break;
       case 4: s="Четверг"; break;
       case 5: s="Пятница"; break;
       case 6: s="Суббота"; break;
       case 7: s="Воскресенье"; break;
       default: s="ошибка в номере дня";
   }
   obj.res.value=s;
}