/**
 * Constructor-function to create album-objects. Note that the name of the constructor function
 * is capitalised! - this is to distinguish it from other function just by looking at its name.
 * The function takes 3 parameters:
 * @param {string} artist : The artist name for the album
 * @param {string} album : The album name
 * @param {integer} totalTracks : The total number of tracks for the album
 */

function Album(artist, album, totalTracks) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
}

/**
 * Function to add a div to the html-page containg a description of an album.
 * @param {Album} album : The album-object to be displayed on the page
 * @param {string} parentid : The id of the html parent-element, where the div should be placed
 */

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

/**
 * fetchContent is called with the desired URL as an arguement. This will load in the JSON-data.
 * All code, that is relying on the JSON-data, called albums here, needs to be within the scope
 * starting at "=> {" in the code below
 */

fetchContent("Data/albums.json").then((albums) => {
  //Log data to the console in order to inspect it and confirm load
  console.log("Original Data: ");
  console.log(albums);

  //Declaration of empty array to keep album-objects
  let albumObjects = [];

  //Log status in the console to keep track of progress in the code
  console.log("To be populated: ");
  console.log(albumObjects);

  //For-loop iterating through the json-data and picking the information needed to create a summary of the data
  for (let i = 0; i < albums.length; i++) {
    //Instantiation of a new album-object. Notice how the ARGUEMENTS fit the PARAMATERS of the constructor-function declared in the beginning of the script
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      //Number of tracks are derived by accessing the length-property of the tracjList-array in the json-data
      albums[i].trackList.length
    );
    //Array include a push-method, which will add whatever is put as an arguement into the array
    albumObjects.push(album);
  }

  /**
   * At this point in the script, we would expect the albumObjects-array to be populated with objects representing an
   * album. But they only contain the information we need to create an overview: Artist name, album name and number of
   * tracks for the album
   */

  //Log status in the console to keep track of progress in the code
  console.log("Object Data: ");
  console.log(albumObjects);

  //Small test to ensure we have what we need expected result is 13
  console.log("Test: ");
  console.log(albumObjects[7].totalTracks);

  /**
   * Call to the function adding a div to the html-page representing an album in ln10.
   * The call is placed inside a for-each loop, because we want to do the same
   * operation with all the entries in the albumObjects-array.
   */

  albumObjects.forEach(
    /**
     * Callback function in the forEach-method
     * @param {Album} a : The current album, we are working on
     */
    function (a) {
      //Call to the addDivWithAlbum()-function in ln 10
      addDivWithAlbum(a, "content");
    }
  );
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
