function chpict(obj) 
{
     var h = obj.hsp.value;
     var v = obj.vsp.value;
     document.mypict.hspace = h;
     document.mypict.vspace = v;

     if ((obj.elements[0]).checked) 
     {
           document.mypict.align = "left";
     }
     elses
     {
            document.mypict.align = "right";
     }
}
function rset(obj) {
      document.mypict.align = "left";
      document.mypict.hspace = 0;
      document.mypict.vspace = 0;
      obj.hsp.value = 0;
      obj.vsp.value = 0;
}