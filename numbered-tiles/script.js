var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var image = new Image();
image.src = "numberedTile.png";

var n = 64;
var nRow = 8;
var blockSize = 64;

image.addEventListener('load', () => {
    for (let i = 0; i < n; i++) {
        var x = i % nRow * blockSize;
        var y = Math.floor(i / nRow) * blockSize;

        context.drawImage(image, randStep(0, 256, 32), randStep(0, 128, 32), 32, 32, x, y, blockSize, blockSize);
    }
});


function randStep(min, max, step) {
    return min + (step * Math.floor(Math.random() * (max - min) / step));
}
