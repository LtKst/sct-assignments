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

// player variables
var playerSpeed = 0.5;
var playerX = 0;
var playerY = 0;
var playerSize = 62;
var boundOffset = 5;
var playerRotation = Math.PI;
var playerAnimationFrame = 1;

var frame = 0;

// the level
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

// the image variable
var image = new Image();
image.src = "tank_sheet.png";

image.addEventListener('load', function () {
    randomizeLevel(15);
    
    setInterval(draw, 6);
});

function draw() {
    // clear the context
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
        
        sprites[myLevel[i]].draw(x, y, tileSize, tileSize);
    }
    
    // update the player
    updatePlayer();
    
    frame++;
}

function randomizeLevel(obstaclePercantage)
{
    for (let i = 1; i < myLevel.length; i++)
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

function updatePlayer()
{
    context.save();
    
    context.translate(playerX, playerY);
    context.translate(playerSize * 0.5, playerSize * 0.5);
    
    // process input
    if (keys[87])
    {
        animate();
        
        collidedUp = false;
        
        if (myLevel[findGridIndex(playerX, playerY-1, tileSize, tileSize, levelRow)] >= 24
            || myLevel[findGridIndex(playerX+playerSize, playerY-1, tileSize, tileSize, levelRow)] >= 24)
            collidedUp = true;
        
        if (!collidedUp)
            playerY -= playerSpeed;
        
        playerRotation = 0;
    }
    else if (keys[83])
    {
        animate();
        
        collidedDown = false;
        
        if (myLevel[findGridIndex(playerX, playerY+playerSize+1, tileSize, tileSize, levelRow)] >= 24
            || myLevel[findGridIndex(playerX+playerSize, playerY+playerSize+1, tileSize, tileSize, levelRow)] >= 24)
            collidedDown = true;
        
        if (!collidedDown)
            playerY += playerSpeed;
        
        playerRotation = Math.PI;
    }
    else if (keys[68])
    {
        animate();
        
        collidedRight = false;
        
        if (myLevel[findGridIndex(playerX+playerSize+1, playerY, tileSize, tileSize, levelRow)] >= 24
            || myLevel[findGridIndex(playerX+playerSize+1, playerY+playerSize, tileSize, tileSize, levelRow)] >= 24)
            collidedRight = true;
        
        if (!collidedRight)
            playerX += playerSpeed;
        
        playerRotation = Math.PI/2;
    }
    else if (keys[65])
    {
        animate();
        
        collidedLeft = false;
        
        if (myLevel[findGridIndex(playerX-1, playerY, tileSize, tileSize, levelRow)] >= 24
            || myLevel[findGridIndex(playerX-1, playerY+playerSize, tileSize, tileSize, levelRow)] >= 24)
            collidedLeft = true;
        
        if (!collidedLeft)
            playerX -= playerSpeed;
        
        playerRotation = Math.PI*1.5;
    }
    
    // rotate the context
    context.rotate(playerRotation);
    
    context.translate(-playerSize * 0.5,-playerSize * 0.5);
    
    // draw the player
    sprites[playerAnimationFrame].draw(0, 0, playerSize, playerSize);
    
    context.restore();
}

function animate()
{
    if (frame % 10 == 1)
    {
        if (playerAnimationFrame < 8)
            playerAnimationFrame++
        else
            playerAnimationFrame = 1;
    }
}

function findGridIndex(x, y, width, height, rowCount)
{
    return Math.floor(x/width) + Math.floor(y/height) * rowCount;
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}