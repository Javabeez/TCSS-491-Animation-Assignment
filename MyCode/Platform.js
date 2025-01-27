class Platform {
    constructor(spritesheet, game, x, y) {
        Object.assign(this, { spritesheet, game, x, y });
    };

    update() {
        var time = this.game.timer.gameTime;
        if (time < 3) {

        } else if (time < 5) {
            this.x += 10;
        } else if (time < 6) {
            this.x += 10;
            this.y += 3;
        } else if (time < 7) {
            this.x += 10;
            this.y -= 3;
        } else if (time < 11) {
            this.x += 10;
        } else if (time < 13) {
            this.x++;
        }
    };

    draw(ctx) {
        // simulate scrolling
        if (this.x >= 1024) { // reset position
            this.x = 0;
        }
        else if (this.x >= 96 * 8) { // post cover left
            this.drawHelper(ctx, -96 * 8 * 2 + this.x, this.y);
            this.drawHelper(ctx, -96 * 8 + this.x, this.y);
        }
        else if (this.x >= 0) { // prep cover left
            this.drawHelper(ctx, -96 * 8 + this.x, this.y);
        }
        if (this.x + 96 * 8 < 1024) { // cover right
            this.drawHelper(ctx, 96 * 8 + this.x, this.y);
        }
        this.drawHelper(ctx, this.x, this.y);
    };

    drawHelper(ctx, x, y) {
        ctx.drawImage(this.spritesheet,
            0, 0,
            96, 96,
            x, y,
            96 * 8,
            96 * 8);
    };
};