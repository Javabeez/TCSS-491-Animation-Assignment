class Sonic {
    constructor(spritesheet, game, x, y) {
        Object.assign(this, { game, x, y });

        this.size = 0;
        this.facing = 0;
        this.state = 1;
        this.initialY = this.y;

        this.velocity = 0;
        this.game = game;
        this.spritesheet = spritesheet;
        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        var that = this;
        for (var i = 0; i < 3; i++) { // for other animations
            that.animations.push([]);
        }
         
        // idle
        that.animations[0] = new Animator(that.spritesheet, 2, 1, 27, 33, 8, 0.2, 2, false, true);

        // walking
        that.animations[1] = new Animator(that.spritesheet, 2, 36, 27, 35, 8, 0.15, 2, false, true);

        // running
        that.animations[2] = new Animator(that.spritesheet, 1, 73, 39, 37, 8, 0.04, 1, false, true);

        // jump
        that.animations[3] = new Animator(that.spritesheet, 1, 112, 26, 25, 4, 0.2, 1, false, true); 
        
    };

    update() {
        var time = this.game.timer.gameTime;
        if (time < 2) {
            this.x--;
        } else if (time < 3) {
            this.y = this.initialY + 22;
            this.state = 0;
        } else if (time < 5) {
            this.y = this.initialY - 10;
            this.state = 2;
        } else if (time < 6) {
            this.y = this.initialY - 18 * PARAMS.SCALE;
            this.state = 3;
            this.y -= 3;
        } else if (time < 7) {
            if (this.y < this.initialY - 18 * PARAMS.SCALE) {
                this.y += 3;
            }
        } else if (time < 11) {
            this.y = this.initialY;
            this.state = 2;
        } else if (time < 13) {
            this.y = this.initialY;
            this.state = 1;
        } else if (time < 14) {
            this.y = this.initialY + 22;
            this.state = 0;
        }
    };

    draw(ctx) {
        // idle animation
        // this.animations[0][0].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
        this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
    };
};