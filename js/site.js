// File for site logic, not game logic,
// ────────────────────────────────────────────────────────────────────────────────

const mapView = $("#mapView");
const inventoryView = $("#inventoryView");
const marketView = $("#marketView");

$(document).ready(() => {
    inventoryView.hide();
    marketView.hide();
    $("#tileInfo").hide();
});

//
// ─── NAVIGATION BUTTONS ─────────────────────────────────────────────────────────
//

$(".navButton").click((e) => {
    let clickedSection = $(e.target).text().toLowerCase();
    switch (clickedSection) {
        case "planets":
            mapView.show();
            inventoryView.hide();
            marketView.hide();

            $("#navButtons").find(".currentNav").removeClass("currentNav");
            $(e.target).addClass("currentNav");
            break;
        case "inventory":
            mapView.hide();
            inventoryView.show();
            marketView.hide();

            $("#navButtons").find(".currentNav").removeClass("currentNav");
            $(e.target).addClass("currentNav");
            break;
        case "market":
            mapView.hide();
            inventoryView.hide();
            marketView.show();

            $("#navButtons").find(".currentNav").removeClass("currentNav");
            $(e.target).addClass("currentNav");
            break;

        default:
            console.log("unknown button pressed.");
            break;
    }
});

function updateTileInfo() {
    $("td").click((e) => {
        $("#tileInfo").show();
        $("#tileInfo").css("top", e.clientY);
        $("#tileInfo").css("left", e.clientX);
        var tileId = $(e.target).attr("id")
        var currX = tileId.substring(0, tileId.indexOf("_"));
        var currY = tileId.substring(tileId.indexOf("_") + 1);

        $("#currentTileDisplay").html(gameWorld.map[currX][currY].name);
        $("#tileDescriptionDisplay").html(gameWorld.map[currX][currY].description);
    });

    $("td").focusout((e) => {
        $("#tileInfo").hide();
        $("#currentTileDisplay").html("");
        $("#tileDescriptionDisplay").html("");
    });


}