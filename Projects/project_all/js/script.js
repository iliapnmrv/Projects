// описание этого проекта

function ShowHide(element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) { 

        var allElem = document.querySelectorAll('.chapter_element');
        
        for(var i = 0; i < allElem.length; i++){
            allElem[i].classList.remove('hide');
        }

        for(var i = 0; i < allElem.length; i++){
            allElem[i].classList.add('hide');
        }

        el = document.getElementById(element_id);
        el.classList.remove("hide");
        
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!"); 
}
