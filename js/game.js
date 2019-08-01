var gameWorld = new World();
var tileList = [];
var entityList = [];



var player = new Player(10, 10, 4000, "@");

const voidTile = new Tile("Void", 0, ".", "A vast emptiness.")

$(document).ready(() => {
    gameWorld.initWorld(voidTile);
    player.init();
    gameWorld.render(21, $("#map"));
});