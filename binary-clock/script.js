var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var monokumaNiceImage = new Image();
monokumaNiceImage.src = "resources/monokuma_nice.gif";
var time = new Date();
class Bit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.state = true;
        this.image_true = new Image();
        this.image_true.src = "resources/monokuma_nice.png";
        this.image_false = new Image();
        this.image_false.src = "resources/monokuma_mean.png";
    }
    draw(context) {
        if (this.state) {
            context.drawImage(this.image_true, this.x, this.y);
        }
        else {
            context.drawImage(this.image_false, this.x, this.y);
        }
    }
}
var secondsArray = [];
for (i = 0; i < 6; i++) {
    let bit = new Bit(i * 100 + 10, 410);
    bit.draw(context);
    secondsArray.push(bit)
}
var minuteArray = [];
for (i = 0; i < 6; i++) {
    let bit = new Bit(i * 100 + 10, 210);
    bit.draw(context);
    minuteArray.push(bit)
}
var hourArray = [];
for (i = 0; i < 6; i++) {
    let bit = new Bit(i * 100 + 10, 10);
    bit.draw(context);
    hourArray.push(bit)
}

function timeLoop() {
    time = new Date();
    var seconds = dec2bin(time.getSeconds());
    for (let i = 0; i < secondsArray.length; i++) {
        secondsArray[i].state = seconds[i];
        secondsArray[i].draw(context);
    }
    var minutes = dec2bin(time.getMinutes());
    for (let i = 0; i < minuteArray.length; i++) {
        minuteArray[i].state = minutes[i];
        minuteArray[i].draw(context);
    }
    var hours = dec2bin(time.getHours());
    for (let i = 0; i < hourArray.length; i++) {
        hourArray[i].state = hours[i];
        hourArray[i].draw(context);
    }
}
setInterval(timeLoop, 10);

function dec2bin(num) {
    let test = num;
    let bin = [32, 16, 8, 4, 2, 1];
    let ans = [];
    for (let i = 0; i < bin.length; i++) {
        if (test >= bin[i]) {
            ans.push(1);
            test -= bin[i];
        }
        else ans.push(0);
    }
    return ans;
}