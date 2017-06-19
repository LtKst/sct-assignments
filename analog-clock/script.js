const canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();

var angle = 0;

const face = new Image();
face.src = "images/face.png";

const seconds = new Image();
seconds.src = "images/seconds.png";

const minutes = new Image();
minutes.src = "images/minutes.png";

const hours = new Image();
hours.src = "images/hours.png";

face.addEventListener('load', ()=>{
    setInterval(updateClock, 10);
});

function updateClock()
{
    time = new Date();
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.drawImage(face, 0, 0);
    
    context.save();
    
    context.translate(canvas.width/2, canvas.height/2);
    
    context.rotate(time.getSeconds()/60 * 2 * Math.PI);
    
    context.drawImage(seconds, -29, -225);
    
    context.restore();
    
    context.save();
    
    context.translate(canvas.width/2, canvas.height/2);
    
    context.rotate(time.getMinutes()/60 * 2 * Math.PI);
    
    context.drawImage(minutes, -31.5, -225);
    
    context.restore();
    
    context.save();
    
    context.translate(canvas.width/2, canvas.height/2);
    
    context.rotate(time.getHours()/12 * 2 * Math.PI);
    
    context.drawImage(hours, -31.5, -190);
    
    context.restore();
    
    myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}