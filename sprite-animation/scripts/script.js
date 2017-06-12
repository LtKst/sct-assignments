var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var sx,sy,sw,sh,x,y,w,h;

var image = new Image();
image.src = "spr.png";

var i = 0;
var nRow = 4;

image.addEventListener('load', ()=>
{
    sw = image.width/4;
    sh = image.height/2;
    
    w = sw;
    h = sh;
    
    sx = 0;
    sy = 0;
    
    x = canvas.width/2-sw/2;
    y = canvas.height/2-sh/2;
    
    setInterval(animate, 100);
});

function animate()
{
    sx = (i%nRow)*sw;
    sy = Math.floor(i/nRow)*sh;
    
    context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    i++
    
    if (i > 7)
    {
        i = 0;
    }
}