function grpict ()
{ 
    var d = document;
    var w = d.mypict.width;
    if (w < 1000) {
        d.mypict.width = w + 10;
        d.mypict.src="msr.jpg";
        setTimeout("grpict()", 80);
    }
}