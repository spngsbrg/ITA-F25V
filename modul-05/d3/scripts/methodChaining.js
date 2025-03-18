const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  velocity: 0,
  accelerate: function () {
    this.velocity += 10;
    return this;
  },
  break: function () {
    this.velocity -= 10;
    return this;
  },
  showVelocity: function () {
    console.log("With chaining: " + this.velocity);
    return this;
  },
};

car
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .showVelocity()
  .break()
  .break()
  .showVelocity();
