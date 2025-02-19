let mainContentArea = document.getElementById("main-content-area");

fetchData("Data/data.json").then((data) => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let contentToInsert = "";

    if (data[i].author == "Foo Bar") {
      contentToInsert = "CENSORED";
    } else {
      contentToInsert = data[i].content;
    }

    let articleToInsert =
      "<div id='" +
      data[i].id +
      "' class='content'>" +
      "<h1>" +
      data[i].heading +
      "</h1>" +
      "<p class='inner-content'>" +
      contentToInsert +
      "</p>" +
      "<p class='author'>" +
      data[i].author +
      "</p>" +
      "<p class='contact'>" +
      data[i].email +
      "</p>" +
      "</div>";

    mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
  }
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
