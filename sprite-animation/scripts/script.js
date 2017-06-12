var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var sx,sy,sw,sh,x,y,w,h;

var image = new Image();
image.src = "sprite-sheet.png";

var wall = new Image();
wall.src = "wall.png";
var wallX = 0;

var i = 9;
var nRow = 4;

image.addEventListener('load', ()=>
{
    sw = image.width/4;
    sh = image.height/4;
    
    w = sw;
    h = sh;
    
    sx = 0;
    sy = 0;
    
    x = 100;
    y = canvas.height/2+15;
    
    setInterval(animate, 175);
});

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.drawImage(wall, wallX, 0);
    
    wallX -= 25;
    
    if (wallX <= 0 - canvas.width)
    {
        wallX = 0;
    }
    
    sx = (i%nRow)*sw;
    sy = Math.floor(i/nRow)*sh;
    
    context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    i++
    
    /*x += 50;
    
    if (x >= canvas.width + sw/2)
    {
        x = 0 - sw;
    }*/
    
    if (i > 11)
    {
        i = 9;
    }
}