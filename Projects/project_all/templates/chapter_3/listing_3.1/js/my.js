function chpict(obj) {
   var w = obj.wd.value;
   var h = obj.hg.value;
   if (w != 0) document.mypict.width=w;
   if (h != 0) document.mypict.height=h;
   document.mypict.border=obj.br.value;
   document.mypict.title=obj.al.value;
}