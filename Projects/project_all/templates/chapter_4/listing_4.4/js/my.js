function vid() 
{
      var d = document;
      var k = 0;
      if ((d.form1.elements[0]).checked) 
      {
           k =  (d.form1.elements[0]).value;
      }
      else 
      {
            if ((d.form1.elements[1]).checked) 
            {
                  k =  (d.form1.elements[1]).value;
            } 
            else 
            {
                  if ((d.form1.elements[2]).checked) 
                  {
                        k =  (d.form1.elements[2]).value;
                  } 
                  else 
                  {
                        if ((d.form1.elements[3]).checked) 
                        {
                              k =  (d.form1.elements[3]).value;
                        } 
                  } 
            }
      }
      (d.form1.elements[6]).value = k;
}