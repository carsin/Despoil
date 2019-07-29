function World() {
    this.map = [];


    this.render = (tiles) => {

    }

    // Init world tiles
    for (var x = 0; x < 25; x++) {
        this.map[x] = [];
        for (var y = 0; y < 25; y++) {
            this.map[x][y] = "-";
        }
    }
}

var gameWorld = new World()
export default gameWorld;