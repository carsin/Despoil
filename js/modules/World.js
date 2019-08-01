function World() {
    this.map = [];
    this.entityMap = [];

    // Update DOM table with map values
    this.render = (renderDistance, tbody) => {
        // TODO: Render around player instead of whole map
        var currTr = $("<tr></tr>");
        for (var y = 0; y < renderDistance; y++) {
            for (var x = 0; x < renderDistance; x++) {
                if (this.entityMap[x][y] == null) {
                    currTr.append("<td tabindex='-1' id=" + x + "_" + y + ">" + this.map[x][y].char + "</td>")
                } else {
                    currTr.append("<td tabindex='-1' id=" + x + "_" + y + ">" + this.entityMap[x][y].char + "</td>")
                }
            }

            tbody.append(currTr);
            currTr = $("<tr></tr>");
        }
        updateTileInfo();
    }

    // Fill map and entity map variables.
    this.initWorld = (tile) => {
        for (var x = 0; x < 21; x++) {
            this.map[x] = [];
            this.entityMap[x] = [];
            for (var y = 0; y < 21; y++) {
                this.map[x][y] = tile;
                this.entityMap[x][y] = null;
            }
        }
    }
}
