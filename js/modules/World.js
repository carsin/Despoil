function World() {
    this.map = [];

    this.render = (map, renderDistance, tbody) => {
        // TODO: Render around player instead of whole map
        var currTr = $("<tr></tr>");
        for (var y = 0; y < renderDistance; y++) {
            for (var x = 0; x < renderDistance; x++) {
                currTr.append("<td tabindex='-1' id=" + x + "_" + y + ">" + map[x][y].char + "</td>")
            }

            tbody.append(currTr);
            currTr = $("<tr></tr>");
        }
        updateTileInfo();
    }

    this.initWorld = (tile) => {
        for (var x = 0; x < 20; x++) {
            this.map[x] = [];
            for (var y = 0; y < 20; y++) {
                this.map[x][y] = tile;
            }
        }
    }
}
