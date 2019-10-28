class Grocery {
    groceryItem: string;
    constructor(public itemName: string, public itemPrice: string, public itemStock: string) {
        this.itemName = itemName + " " + itemPrice + " " + itemStock;
    }
}

interface Groceries {
    itemName: string;
    itemStock: string;
}

function greeter(groceries: Groceries) {
    return "Item: " + groceries.itemName;
}

var apples = new Grocery("Apples – ", "$.99,", "100");
var bananas = new Grocery("Bananas – ", "$1.29,","50");
var bread = new Grocery("Bread – ", "$3.19,","27");

document.body.textContent = greeter(apples);
document.body.textContent = greeter(bananas);
document.body.textContent = greeter(bread);