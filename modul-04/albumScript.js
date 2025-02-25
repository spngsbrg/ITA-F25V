function Album(artist, album, totalTracks) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
}


function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid);
  let elementToAdd =
    "<div>" +
    album.artist +
    ": " +
    album.album +
    " | Album contains " +
    album.totalTracks +
    " tracks" +
    "</div>";
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

fetchContent("Data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = [];

  console.log("To be populated: ");
  console.log(albumObjects);

  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      albums[i].trackList.length
    );
    albumObjects.push(album);
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].totalTracks);

  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
