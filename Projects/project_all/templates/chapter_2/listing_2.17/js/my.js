function ch3pict(obj)
{ 
   var d=document;
   var a = d.form1.num1.value;
   var b = d.form1.num2.value;
   var l;

   if (a < 1 || a > 3 || b < 1 || b > 3) 
      {
         alert("Неверно заданы параметры");
      } 
   else 
   {
      if (a == 1)
      {
         l = d.pm1.src;
         if (b == 2) 
         {
            d.pm1.src = d.pm2.src; 
            d.pm2.src = l;
         } 
         else {
            if (b == 3) 
            {
               d.pm1.src = d.pm3.src; 
               d.pm3.src = l;
            } 
         }
      } 
      else 
         {
            if (a == 2) 
               {
                  l = d.pm2.src;
                  if (b == 1) {
                     d.pm2.src = d.pm1.src; 
                     d.pm1.src = l;
                  }
                  else 
                  if (b == 3) {
                     d.pm2.src = d.pm3.src; 
                     d.pm3.src = l;
                  }
               } 
            else 
               {
                  if (a == 3) {
                        l = d.pm3.src;
                        if (b == 1) 
                        {
                           d.pm3.src = d.pm1.src; 
                           d.pm1.src = l;
                        } 
                        else {
                           if (b == 2) 
                           {
                              d.pm3.src = d.pm2.src; 
                              d.pm2.src = l;
                           } 
                        }  
                     } 
               }
         }
      }
   }