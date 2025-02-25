const person = {
  name: "Thomas",
  age: 41,
  sayHello: function () {
    console.log("Hello");
    return this;
  },
  sayHelloTo: function (name) {
    console.log("Hello " + name);
    return this;
  },
  oneYearPass: function () {
    this.age++;
    console.log("A year went by");
    return this;
  },
  howOldAreYou: function () {
    console.log("I am " + this.age + " years old");
    return this;
  },
};

/*

person.sayHello();

console.log(person.name);

person.sayHelloTo("Torben");

person.name = "Thom@s";

console.log(person.name);

console.log(person.age);

person.oneYearPass();

console.log(person.age);
*/

person
  .sayHello()
  .oneYearPass()
  .howOldAreYou()
  .sayHelloTo("Hans")
  .oneYearPass()
  .howOldAreYou();
/*
function Album(artist, album, totalTracks) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
}

let albums = [];
for (let i = 0; i < 10; i++) {
  const album = new Album("F", "Hest", 2);
  albums.push(album);
}

console.log(albums);
*/
