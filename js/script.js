
function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", operating system - " + this.system + " and the price is £" + this.price +".");
}
var samsungGalaxyS6 = new Phone("Samsung", 650, "gold", "Android");
var iPhone6S = new Phone("Apple", 1250, "silver", "Apple");
var onePlusOne = new Phone("OnePlus", 470, "black", "Windows");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
