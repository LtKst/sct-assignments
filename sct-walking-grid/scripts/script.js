var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var player = new Player(150, 150);

var grid = [];
var n = 64;
var nRow = 8;

var bitSize = 100;

addEventListener('keydown', (evt)=> {
    switch(evt.keyCode)
    {
        case 37:
            player.x -= player.speed;
            break;
        case 38:
            player.y -= player.speed;
            break;
        case 39:
            player.x += player.speed;
            break;
        case 40:
            player.y += player.speed;
            break;
    }
});

for (let i = 0; i < n; i++)
{
    var x = i % nRow * bitSize;
    var y = Math.floor(i/nRow) * bitSize;
    
    var bit = new Bit(x, y, bitSize, bitSize);
    bit.draw();
    
    grid.push(bit);
}

function update()
{
    for (let i = 0; i < grid.length; i++)
    {
        if (i == findGridIndex(player.x, player.y, grid[1].width, grid[1].height, nRow))
            grid[i].state = true;
        else
            grid[i].state = false;
        
        grid[i].draw();
    }
    
    player.draw();
}

function findGridIndex(x, y, width, height, rowCount)
{
    return Math.floor(x/width) + Math.floor(y/height) * rowCount;
}

setInterval(update, 1);