function test(obj) 
{
   var s = 
         "свойство value переключателя: " + obj.value + "\n\r" + 
         "свойство name формы: " + obj.form.name + "\n\r" + 
         "Число элементов формы: " + obj.form.length; 
         obj.form.elements[4].value = s;
}