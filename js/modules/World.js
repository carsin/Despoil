function World() {
    this.tiles = [];

    // Init world tiles
    for (var x = 0; x < 25; x++) {
        this.tiles[x] = [];
        for (var y = 0; y < 25; y++) {
            this.tiles[x][y] = "-";
        }
    }
}

var gameWorld = new World()
export default gameWorld;