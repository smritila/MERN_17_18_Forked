// encapsulation
// one variable attached to its own function
// create the data members as private
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setAccelaration = function (speed) {
        this.accelaration = speed;
    };
    Car.prototype.getAccelaration = function () {
        console.log("Car is currently moving at: " + this.accelaration);
    };
    Car.prototype.setGear = function (gear) {
        this.gear = gear;
    };
    Car.prototype.getGear = function () {
        console.log("current gear is: " + this.gear);
    };
    Car.prototype.setSteering = function (direction) {
        this.steering = direction;
    };
    Car.prototype.getSteering = function () {
        console.log("steering direction is: " + this.steering);
    };
    return Car;
}());
var c1 = new Car();
c1.setAccelaration(100);
c1.setGear(5);
c1.setSteering("right");
c1.getAccelaration();
c1.getGear();
c1.getSteering();
