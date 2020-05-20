//var block =;
let textarea = document.querySelector('.textarea');
textarea.addEventListener('keydown', autosize);

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function add() {
    let code = "<li><div class='block'><div class='title'>Я блок</div><textarea class='textarea' placeholder='Создайте заметку нажмите Alt + N для доступа к полю заполнения' accesskey='n'></textarea></div></li>";
    let ol = document.querySelector('ol');
    ol.insertAdjacentHTML('beforeend', code);
}

function remove() {
    document.getElementById("one").remove();
}

function checkbox() {
    var checkbox = document.querySelector('checkbox');
    checkbox.classList.add("green");
}
//drag and drop
new Sortable(list, {
    animation: 150,
    ghostClass: 'blue-background-class'
});

//меню наверху
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

//  UNRELEASED YET

//new Sortable(example3Left, {
//    group: {
//        name: 'shared',
//        pull: 'clone' // To clone: set pull to 'clone'
//    },
//    animation: 150
//});
//
//new Sortable(example3Right, {
//    group: {
//        name: 'shared',
//        pull: 'clone'
//    },
//    animation: 150
//});