var canvs = document.getElementById("canvas");
var context = canvas.getContext("2d");

var ballSize = 50;

var xPos = 100;
var xSpeed = 2;

var yPos = 275;
var ySpeed = 2.5;

function animate()
{
    context.clearRect(0, 0, 800, 800);
    context.beginPath();
    context.lineWidth = 5;
    context.fillStyle="pink";
    context.strokeStyle="hotpink";
    context.arc(xPos, yPos, ballSize, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    
    if (xPos >= (800 - ballSize) || xPos <= (0 + ballSize))
    {
        xSpeed *= -1;
        new Audio('gabe.wav').play();
    }
    
    if (yPos >= (800 - ballSize) || yPos <= (0 + ballSize))
    {
        ySpeed *= -1;
        new Audio('gabe.wav').play();
    }
    
    xPos += xSpeed;
    yPos += ySpeed;
}

setInterval(animate, 10);