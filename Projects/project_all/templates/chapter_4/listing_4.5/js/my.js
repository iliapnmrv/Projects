function vid() 
{
      var d = document;
      var k = 0;
      if (d.all("i1").checked) 
      {
           k = (d.all("i1").value);
      }
      else 
      {
            if (d.all("i2").checked) 
            {
                  k = (d.all("i2").value);
            } 
            else 
            {
                  if (d.all("i3").checked) 
                  {
                        k = (d.all("i3").value);
                  } 
                  else 
                  {
                        if (d.all("i4").checked) 
                        {
                              k =  (d.all("i4").value);
                        } 
                  } 
            }
      }
      d.all("resch").value = k;
}