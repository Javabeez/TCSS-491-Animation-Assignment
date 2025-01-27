var gameEngine = new GameEngine();
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sonic-curated.png");
ASSET_MANAGER.queueDownload("./46.png");
ASSET_MANAGER.queueDownload("./Neo Green Hill Zone.png");

ASSET_MANAGER.downloadAll(() => {
    PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    PARAMS.CANVAS_WIDTH = canvas.width;
    PARAMS.CANVAS_HEIGHT = canvas.height;

    gameEngine.addEntity(new Sonic(ASSET_MANAGER.getAsset("./Sonic-curated.png"), gameEngine, 600, 250));
    gameEngine.addEntity(new Platform(ASSET_MANAGER.getAsset("./46.png"), gameEngine, 0, 320));
    gameEngine.addEntity(new Scene(ASSET_MANAGER.getAsset("./Neo Green Hill Zone.png"), gameEngine, 236, 43, 1024, 768));
    gameEngine.init(ctx);
    gameEngine.start(); 
});