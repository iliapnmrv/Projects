function care (ax,ay,bx,by,cx,cy)
{
    var s= Math.abs(ax*(by-cy)+bx*(cy-ay)+cx*(ay-by))
    return s
}
function poinpoly (obj)
    {
    var x = Number(obj.x.value);
    var y = Number(obj.y.value);
    var ax = Number(obj.ax.value);
    var ay = Number(obj.ay.value);
    var bx = Number(obj.bx.value);
    var by = Number(obj.by.value);
    var cx = Number(obj.cx.value);
    var cy = Number(obj.cy.value);
    var s=care (ax,ay,bx,by,cx,cy)
    var s1=care (ax,ay,bx,by,x,y)
    var s2=care (ax,ay,x,y,cx,cy)
    var s3=care (x,y,bx,by,cx,cy)
    if (Math.abs(s-s1-s2-s3) <- 0.001)
        obj.res.value="Точка лежит внутри треугольника"
    else
        obj.res.value="Точка не лежит внутри треугольника"
}
