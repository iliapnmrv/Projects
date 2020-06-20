function rset(obj) 
{
   document.all("itab").border=1;
   document.all("itab").cellSpacing=15;
   document.all("itab").cellPadding=10;
   obj.bor.value=1;
   obj.cells.value=15;
   obj.cellp.value=10;
}
function set(obj) 
{
   document.all("itab").border=Number(obj.bor.value);
   if (obj.cells.value != "") 
   {
      document.all("itab").cellSpacing=Number(obj.cells.value);
   }
   if (obj.cellp.value != "") {
      document.all("itab").cellPadding=Number(obj.cellp.value);
   }
}