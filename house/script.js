var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

//context.globalAlpha=0.2;

context.lineWidth = 5;


/*
* Begin of drawing the sky
*/
context.beginPath();

context.strokeStyle="DodgerBlue";
context.fillStyle="#389bfc";

context.moveTo(900,500);
context.lineTo(800,500);
context.lineTo(800,300);
context.lineTo(700,200);
context.lineTo(300,100);
context.lineTo(200,300);
context.lineTo(200,500);
context.lineTo(0,500);
context.lineTo(0,0);
context.lineTo(900,0);
context.lineTo(900,500);

context.fill();
context.stroke();

context.closePath();
/*
* End of drawing the sky
*/


/*
* Begin of drawing the house
*/
context.beginPath();

context.strokeStyle="gray";
context.fillStyle="lightgray";

context.moveTo(200, 300);
context.lineTo(600, 400);
context.lineTo(600, 600);
context.lineTo(200, 500);
context.lineTo(200, 300);

context.fill();
context.stroke();

context.closePath();

context.beginPath();

context.strokeStyle="#737373";
context.fillStyle="gray";

context.moveTo(800, 500);
context.lineTo(800, 300);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(600,600);

context.fill();
context.stroke();

context.closePath();

context.beginPath();

context.strokeStyle="darkred";
context.fillStyle = "red";

context.moveTo(300, 100);
context.lineTo(700,200);
context.lineTo(600, 400);
context.lineTo(200, 300);
context.lineTo(300, 100);


context.fill();
context.stroke();

context.closePath();
/*
* End of drawing the house
*/


/*
* Begin of drawing the ground
*/
context.beginPath();

context.strokeStyle="green";
context.fillStyle="#1b8d1b";

context.moveTo(0, 500);
context.lineTo(200, 500);
context.lineTo(600, 600);
context.lineTo(0, 600);

context.moveTo(900, 500);
context.lineTo(800, 500);
context.lineTo(600, 600);
context.lineTo(900, 600);

context.fill();
context.stroke();

context.closePath();
/*
* End of drawing the ground
*/