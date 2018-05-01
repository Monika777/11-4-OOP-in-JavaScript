
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is £" + this.price + ".");
}
var samsungGalaxyS6 = new Phone("Samsung", 650, "gold");
var iPhone6S = new Phone("Apple", 1250, "silver");
var onePlusOne = new Phone("OnePlus", 470, "black");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
