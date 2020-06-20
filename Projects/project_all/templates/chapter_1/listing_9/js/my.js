function proj(obj)
    {   
        var a=1*obj.st1.value;
        var h=1*obj.st2.value;
        if (a>0)
        {
            if(h>0)
            {
                var s=(a*h) / 2;
                obj.res.value = s
                alert("Все правильно")
                return s;
            }
            else
            {
                alert("Заполните значение высоты")
            }
        }
         else
            {
                alert("Заполните значение основания")
            }

    }
    
