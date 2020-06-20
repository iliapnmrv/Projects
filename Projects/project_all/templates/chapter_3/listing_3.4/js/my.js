function img(n, action) 
{
   if (action) 
   {
      document.images[n-1].src = "jpg/pch"+n+".jpg";
   } 
   else 
   {
      document.images[n-1].src = "gif/m"+n+".gif";
   }
}