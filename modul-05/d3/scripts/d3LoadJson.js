d3.json("data/albums.json").then(function (data) {
  console.log(data);

  d3.select("#dataJSON").append("h2").text("JSON Data:");

  d3.select("#dataJSON")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function (album) {
      return (
        album.artistName +
        " - " +
        album.albumName +
        " - " +
        album.trackList.length
      );
    });

  let cdObjects = [];
  for (let i in data) {
    let cd = new CD(
      data[i].artistName,
      data[i].albumName,
      data[i].trackList.length
    );
    cdObjects.push(cd);
  }

  console.log("TEST: " + cdObjects[4].toString());

  console.log(cdObjects);

  d3.select("#dataOBJ").append("h2").text("Object Data:");
  d3.select("#dataOBJ")
    .selectAll("p")
    .data(cdObjects)
    .enter()
    .append("p")
    .text(function (albumObj) {
      return (
        albumObj.artist +
        " - " +
        albumObj.title +
        " - " +
        albumObj.numberOfTracks
      );
    });
});

function CD(artist, title, numberOfTracks) {
  this.artist = artist;
  this.title = title;
  this.numberOfTracks = numberOfTracks;
  this.toString = () => {
    return this.artist + " " + this.title;
  };
}
