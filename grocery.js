var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemPrice, itemStock) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemStock = itemStock;
        this.itemName = itemName + " " + itemPrice + " " + itemStock;
    }
    return Grocery;
}());
function greeter(groceries) {
    return "Item: " + groceries.itemName;
}
var apples = new Grocery("Apples:", "$.99,", "100");
var bananas = new Grocery("Bananas:", "$1.29,", "50");
document.body.textContent = greeter(apples);
document.body.textContent = greeter(bananas);
