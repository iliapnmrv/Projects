function graph(obj) 
{
   var k1 = 0;
   var l = obj.lec.value;
   var p = obj.pract.value;
   var s = obj.stud.value;
   var tableHeight = 200;
   var krTime = 0;
   var zTime = 0;
   var knTime = 0;
   var eTime = 0;   
   var d = document;

   if (s == "") 
      {
         alert("Введите количество студентов");
      }

   if ((l != "") && (l != "0")) 
      {
         knTime = Math.round(l*10/100);
         eTime = Math.round(s*30/60);
      }

   if ((p != "") && (l != "0"))
      {
         krTime = Math.round(s*15/60);
         zTime = Math.round(s*20/60);
      }

   sTime = knTime + eTime + krTime + zTime;
   k1 = tableHeight/sTime;
   d.images[0].height = Math.round(krTime*k1);
   d.images[0].title = krTime + " часов на контрольные";
   d.images[1].height = Math.round(zTime*k1);
   d.images[1].title = zTime + " часов на зачеты";
   d.images[2].height = Math.round(knTime*k1);
   d.images[2].title = knTime + " часов на консультации";
   d.images[3].height = Math.round(eTime*k1);
   d.images[3].title = eTime + " часов на экзамен";
   d.images[4].height = Math.round(sTime*k1);
   d.images[4].title = "Всего " + sTime + " часов";
}

function CheckValHours(hours) 
   {
      if (hours < 0) 
         {
            alert('Недопустимо значение количества часов меньше 0');
         }
   }

function CheckValNum(num) 
   {
      if (num <= 0) 
         {
            alert('Недопустимо значение меньшее либо равно нулю');
         }
   }