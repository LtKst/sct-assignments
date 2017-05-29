class Sprite {
    constructor(image, startX, startY, width, height) {
        this.image = image;

        this.startX = startX;
        this.startY = startY;

        this.width = width;
        this.height = height;
    }

    draw(x, y) {
        context.drawImage(this.image, this.startX, this.startY, 64, 64, x, y, this.width, this.height);
    }
}