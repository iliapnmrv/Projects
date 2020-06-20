function succpict ()
{ 
    var d = document;
    var w = d.mypict.width;
    if (w > 10) {
        d.mypict.width = w-10;
        d.mypict.src="msm.jpg";
        setTimeout("succpict()", 80);
    }
}