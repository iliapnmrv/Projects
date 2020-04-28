//var block =;
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function add() {
    block.insertAdjacentHTML('beforeend', '<label class="container"><input type="checkbox"><span class="checkmark"></span></label><div class="block" id="one"><div class="title">Я блок</div><textarea placeholder="Создайте заметку нажмите Alt + N для доступа к полю заполнения" accesskey="n" name="" id=""></textarea></div>');
}
function remove() {
    document.getElementById("one").remove();
}

function checkbox() {
    var checkbox = document.querySelector('checkbox');
    checkbox.classList.add("green");
}

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.banner').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.banner').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});