function chpict1(obj) {
   var w = document.forms[0].elements[0].value;
   var h = document.forms[0].elements[1].value;
   if (w != 0) 
   document.images[0].width=w;
   if (h != 0)
   document.images[0].height=h;
   document.images[0].border = document.forms[0].elements[2].value;
   document.images[0].title = document.forms[0].elements[3].value;
}