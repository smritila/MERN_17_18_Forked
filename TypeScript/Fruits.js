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
var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    // generalised class
    Fruits.prototype.fruitName = function () { }; //abstract function
    Fruits.prototype.fruitColor = function () { };
    return Fruits;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.fruitName = function () {
        console.log("Apple");
    };
    Apple.prototype.fruitColor = function () {
        console.log("Red");
    };
    Apple.prototype.fruitOrigin = function () {
        console.log("USA");
    };
    return Apple;
}(Fruits));
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banana.prototype.fruitName = function () {
        console.log("Banana");
    };
    Banana.prototype.fruitColor = function () {
        console.log("Yellow");
    };
    Banana.prototype.fruitOrigin = function () {
        console.log("India");
    };
    return Banana;
}(Fruits));
var basket1 = new Apple(); //creating a basket which can store only apples
var bigBasket = new Apple();
// or
// bigBasket = new Banana();
bigBasket.fruitName();
