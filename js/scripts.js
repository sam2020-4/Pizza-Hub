function getSizeCost() {
    var selectedSize = document.getElementById("#size").value;
    return parseInt(selectedSize);
}
function getCrustCost() {
    var selectedCrust = document.getElementById("#crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("#pizzanumber").value;
    return parseInt(selectedNumber);
}


function onions() {
    var onion = 0;
    var addonions = document.getElementById("#topping");
    if (addMushroom.checked === true) {
        onion = 120;
    }
    return parseInt(onion);
}

function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("#topping");
    if (addsausage.checked === true) {
        sausage = 100;
    }
    return parseInt(sausage);
}

function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("#topping");
    if (addMushroom.checked === true) {
        mushroom = 80;
    }
    return parseInt(mushroom);
}
