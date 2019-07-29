// File for site logic, not game logic,
// ────────────────────────────────────────────────────────────────────────────────

const mapView = $("#mapView");
const inventoryView = $("#inventoryView");
const marketView = $("#marketView");

$(document).ready(() => {
    inventoryView.hide();
    marketView.hide();
});

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