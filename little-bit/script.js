var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

class Bit
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        
        this.width = width;
        this.height = height;
        
        this.state = false;
    }
    
    draw()
    {
        context.beginPath();
        if (this.state)
        {
            context.fillStyle = "hotpink";
        }
        else
        {
            context.fillStyle = "white";
        }
        
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

var grid = [];
var n = 64;
var nRow = 8;

var bitSize = 100;

for (let i = 0; i < n; i++)
{
    var x = i % nRow * bitSize;
    var y = Math.floor(i/nRow) * bitSize;
    
    var bit = new Bit(x, y, bitSize, bitSize);
    bit.draw();
    
    grid.push(bit);
}

function findGridIndex(x, y, width, height, rowCount)
{
    return Math.floor(x/width) + Math.floor(y/height) * rowCount;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

canvas.addEventListener('click', (e)=>{
    var pos = getMousePos(canvas, e);
    
    console.log(pos.x);
    console.log(pos.y);
    
    for (let i = 0; i < grid.length; i++)
    {
        if (i == findGridIndex(pos.x, pos.y, grid[1].width, grid[1].height, nRow))
            grid[i].state = !grid[i].state;
        
        grid[i].draw();
    }
});