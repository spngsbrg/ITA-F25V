const car = {
  speed: 0,
  color: "Red",
  accelerate: function () {
    this.speed += 5;
    console.log(this.speed);
    return this;
  },
  break: function () {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  },
  honk: function () {
    console.log("HOOOOONK!!!!!!");
    return this;
  },
  toString: ()=>{
    return this.color + " " + this.speed;
  }
};

console.log(car.speed);

/*car.accelerate();
car.accelerate();
car.accelerate();

console.log(car.speed);

car.break();
car.break();

console.log(car.speed);*/

car
  .honk()
  .honk()
  .accelerate()
  .accelerate()
  .accelerate()
  .honk()
  .honk()
  .accelerate();

//console.log(car.speed);

//car.break().break().break();

//console.log(car.speed);

function sayHello() {
  //console.log("Hello");
  return "hello";
}

sayHello();
console.log(sayHello());

let stuff = sayHello();
console.log(stuff);
