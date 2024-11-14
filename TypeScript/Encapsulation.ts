// encapsulation
// one variable attached to its own function
// create the data members as private

class Car {
  private accelaration;
  private gear;
  private steering;

  public setAccelaration(speed) {
    this.accelaration = speed;
  }

  public getAccelaration() {
    console.log("Car is currently moving at: "
         + this.accelaration);
  }

  public setGear(gear) {
    this.gear = gear;
  }
  public getGear() {
    console.log("current gear is: " + this.gear);
  }

  public setSteering(direction) {
    this.steering = direction;
  }

  public getSteering() {
    console.log("steering direction is: " 
        + this.steering);
  }
}

let c1: Car = new Car();
c1.setAccelaration(100);
c1.setGear(5);
c1.setSteering("right");

c1.getAccelaration();
c1.getGear();
c1.getSteering();

// console.log(c1.accelaration); gives error as accelaration
// is private variable
