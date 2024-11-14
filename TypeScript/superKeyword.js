var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle1 = /** @class */ (function () {
    function Vehicle1(color, brand, model, price) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    return Vehicle1;
}());
var Bike1 = /** @class */ (function (_super) {
    __extends(Bike1, _super);
    function Bike1(color, brand, model, price) {
        return _super.call(this, color, brand, model, price) || this;
    }
    return Bike1;
}(Vehicle1));
var b1 = new Bike1("Red", "Honda", "CBR", 10000);
console.log(b1);
