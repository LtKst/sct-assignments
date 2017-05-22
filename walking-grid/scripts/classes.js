class Player
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.speed = 8;
    }
    
    draw()
    {
        context.beginPath();
        context.fillStyle = "white";
        context.arc(this.x, this.y, 5, 0, 2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

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