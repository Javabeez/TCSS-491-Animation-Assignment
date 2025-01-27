class Scene {
    constructor(spritesheet, game, xStart, yStart, width, height) {
        Object.assign(this, { spritesheet, game, xStart, yStart, width, height });
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            this.xStart,
            this.yStart, this.width, this.height, 0, 0,
            this.width * 9,
            this.height * 9);
    };
};