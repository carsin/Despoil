import gameWorld from "/js/modules/World.js";
import Tile from "/js/modules/Tile.js";

const voidTile = new Tile("void", 0, ".", "A vast emptiness.")
gameWorld.initWorld(voidTile);
gameWorld.render(gameWorld.map, 20, $("#map"));