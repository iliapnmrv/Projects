//var block =;
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function add() {
    block.insertAdjacentHTML('beforeend', '<div class="block" id="one"><div class="title">Я блок</div><textarea placeholder="Создайте заметку нажмите Alt + N для доступа к полю заполнения" accesskey="n" name="" id=""></textarea></div>');
}
function remove() {
    document.getElementById("one").remove();
}

function checkbox() {
    var checkbox = document.querySelector('checkbox');
    checkbox.classList.add("green");
}