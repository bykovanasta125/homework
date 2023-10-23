//1.
var clothesShop={
	jeans:"50$" ,
	sweater:"12$", 
	blouse:"30$",
    getInfo:function () {
 	for (var key in this){
    console.log(key + ': ' + this [key])
	}
}
};
clothesShop.getInfo();// Правильна інформація про об'єкт
clothesShop.dress = "20$";// Додали властивість до об'єкта
clothesShop.getInfo();// Виводить всі властивості, включаючи щойно додану.
//2.
var services = {
    "стрижка": 60,
    "гоління": 80,
    "МиттяГолови": 100,
};

services.price = function() {
    var total = 0;
    for (var service in this) {
        if (isNaN(this[service])) {
            total += this[service];
        }
    }
    return total + ' грн';
};
services.minPrice = function() {
    var min = Math.min(this.стрижка);
    return min + ' грн';
};

services.maxPrice = function() {
    var max = Math.max(this.МиттяГолови);
    return max + ' грн';
};

console.log("Мінімальна вартість послуг:", services.minPrice());
console.log("Максимальна вартість послуг:", services.maxPrice());
console.log("Загальна вартість послуг:", services.price());

