class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }
  addCar(carType) {
    if (carType === 1) {
      this.big--;
      return this.big >= 0;
    } else if (carType === 2) {
      this.medium--;
      return this.medium >= 0;
    } else {
      this.small--;
      return this.small >= 0;
    }
  }
}

parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); // return true because there is 1 available slot for a big car
console.log(parkingSystem.addCar(2)); // return true because there is 1 available slot for a medium car
console.log(parkingSystem.addCar(3)); // return false because there is no available slot for a small car
console.log(parkingSystem.addCar(1)); // return false because there is no available slot for a big car. It is already occupied.
