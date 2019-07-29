function World() {
    this.map = [];

    this.render = (map, renderDistance, tbody) => {
        // TODO: Render around player instead of whole map
        var currTr = $("<tr></tr>");
        for (var x = 0; x < renderDistance; x++) {
            for (var y = 0; y < renderDistance; y++) {
                currTr.append("<td id=" + x + "_" + y + ">" + map[x][y] + "</td>")
            }

            tbody.append(currTr);
            currTr = $("<tr></tr>");
        }
    }

    // Init world tiles
    for (var x = 0; x < 20; x++) {
        this.map[x] = [];
        for (var y = 0; y < 20; y++) {
            this.map[x][y] = "-";
        }
    }
}

var gameWorld = new World()
export default gameWorld;