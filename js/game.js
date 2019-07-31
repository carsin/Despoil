var gameWorld = new World();

const voidTile = new Tile("Void", 0, ".", "A vast emptiness.")
gameWorld.initWorld(voidTile);
gameWorld.render(gameWorld.map, 20, $("#map"));