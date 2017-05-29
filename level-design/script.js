var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var image = new Image();
image.src = "tankSheet.png";

// fill the sprites array
var sprites = [];
var n = 32;
var nRow = 8;
var blockSize = 64;

for (let i = 0; i < n; i++) {
    var x = i % nRow * blockSize;
    var y = Math.floor(i / nRow) * blockSize;

    sprites[i] = new Sprite(image, x, y, 64, 64);
}

// fill the level
var levelN = 64;
var levelRow = 8;
var tileSize = 64;

for (let i = 0; i < levelN; i++)
{
    var x = i % levelRow * tileSize;
    var y = Math.floor(i / levelRow) * tileSize;
    
    sprites[0].draw(x, y);
}