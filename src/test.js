class Car {

    constructor(){
        this.drive = this.drive.bind(this);
    }

  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this;
  }
}
const car = new Car();
car.setDriveSound("bhooom");
console.log(car.drive());
const newCar = {
  sound: "Dhroooom",
  drive: car.drive
};
console.log(newCar.drive());

const drive = car.drive;
console.log(drive());
