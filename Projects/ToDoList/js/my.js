//var block =;
//$('textarea').autoResize();
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