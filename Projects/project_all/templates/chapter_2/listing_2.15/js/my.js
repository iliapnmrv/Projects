function daynum(obj)
{ 
   var m = obj.num1.value;
   var s;
   
   switch (m)
   {
        case "понедельник": s=1; break;
        case "вторник": s=2; break;
        case "среда": s=3; break;
        case "четверг": s=4; break;
        case "пятница": s=5; break;
        case "суббота": s=6; break;
        case "воскресенье": s=0; break;
      

       default: s= "ошибка в названии дня";
   }
   obj.res.value=s;
}

