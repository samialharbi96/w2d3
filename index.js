class Car {
    constructor(make, model, color, image, rgsNo, price) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.image = image;
      this.rgsNo = rgsNo;
      this.price = price;
    }
    editPrice(newPrice) {
      this.price = newPrice;
    }
    showAll() {
      return `Car Make: ${this.make} \nCar Model: ${this.model} \nCar color: ${this.color} \nCar image: ${this.image} \nCar registeration number: ${this.rgsNo} \nCar price: ${this.price}`;
 }
  }
  
  const carA= new Car('Nissan', 'sanny', 'red', 'image demo', '7684319', '15000')
  const car2B= new Car('Lexus', 'star', 'blue', 'image demo', '7684319', '300000')
  const carC= new Car('toyota', 'hilux', 'yellow', 'image demo', '7684319', '29000')
  const carD= new Car('Hyundai', 'sonata', 'black', 'image demo', '7684319', '25000')
  const carE= new Car('toyota', 'camtry', 'White', 'image demo', '7684319', '35000')





  carA.editPrice(15500);
