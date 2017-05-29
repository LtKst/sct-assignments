var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

// fill the sprites array
var sprites = [];
var n = 32;
var nRow = 8;
var blockSize = 64;

// fill the level
var levelN = 64;
var levelRow = 8;
var tileSize = 64;

var myLevel = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
];

var image = new Image();
image.src = "tank_sheet.png";

image.addEventListener('load', function () {
    randomizeLevel(15);
    
    setInterval(draw, 60);
});

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // fill the sprites array
    for (let i = 0; i < n; i++) {
        var x = i % nRow * blockSize;
        var y = Math.floor(i / nRow) * blockSize;

        sprites[i] = new Sprite(image, x, y, blockSize, blockSize);
    }

    // fill the level
    for (let i = 0; i < myLevel.length; i++) {
        var x = i % levelRow * tileSize;
        var y = Math.floor(i / levelRow) * tileSize;
        
        sprites[myLevel[i]].draw(x, y);
    }
    
    sprites[1].draw(0, 0);
}

function randomizeLevel(obstaclePercantage)
{
    for (let i = 0; i < myLevel.length; i++)
    {
        if (randomRange(0, 100) < obstaclePercantage)
        {
            myLevel[i] = randomRange(24, 30);
        }
        else
        {
            myLevel[i] = 0;
        }
    }
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}