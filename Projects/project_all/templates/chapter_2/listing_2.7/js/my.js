var k = 1
// Функция обработки запроса конца показа слайдов
function ref () 
    {
        k = 5
    }
// Функция обработки запроса начала показа слайдов
function succpict ()
{ 
    var d = document
    if (k <= 4)
         {
            if (k == 1)
                {
                    d.mypict.src="gif/m1.gif"; k++
                }
            else 
                if (k == 2)
                    { 
                        d.mypict.src="gif/m2.gif"; k++
                    }
                    else 
                if (k == 3)
                    { 
                        d.mypict.src="gif/m3.gif"; k++
                    }
                    else 
                        if (k == 4)
                            { 
                                d.mypict.src="gif/m4.gif"; 
                                k = 1
                            }
            setTimeout ("succpict()", 2000)
        }
}