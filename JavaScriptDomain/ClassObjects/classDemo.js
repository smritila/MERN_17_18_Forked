class MaruthiSuzuki {
  carName;
  carModel;
  carBrand;
  color;

  constructor(carName, carModel, carBrand, color) {
    this.carName = carName;
    this.carModel = carModel;
    this.carBrand = carBrand;
    this.color = color;
  }

  Print() {
    document.write("car name: " + this.carName);
    document.write("car model: " + this.carModel);
    document.write("car brand: " + this.carBrand);
    document.write("car color: " + this.color);
  }
}

let dzire = new MaruthiSuzuki("Dzire", "2002", "Maruthi Suzuki", "Silver");
dzire.Print();
