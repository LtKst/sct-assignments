var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var ballSize = 50;

class Ball
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        
        this.xSpeed = 2;
        this.ySpeed = 2.5;
    }
    
    draw()
    {
        context.beginPath();
        context.fillStyle = "pink";
        context.strokeStyle = "black";
        context.arc(this.x, this.y, ballSize, 0, 2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
        
        if (this.x >= (800 - ballSize) || this.x <= (0 + ballSize))
        {
            this.xSpeed *= -1;
            //new Audio('gabe.wav').play();
        }

        if (this.y >= (800 - ballSize) || this.y <= (0 + ballSize))
        {
            this.ySpeed *= -1;
            //new Audio('gabe.wav').play();
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

var ballArray = [];

for (let i = 0; i < 100; i++)
{
    ballArray[i] = new Ball(getRandomInt(ballSize, canvas.width - ballSize), getRandomInt(ballSize, canvas.height - ballSize));
}

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < ballArray.length; i++)
    {
        ballArray[i].draw();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(animate, 10);