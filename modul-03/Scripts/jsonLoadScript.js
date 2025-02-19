//document.getElementById("loadBtn").onclick = init;

function init() {
  let mainContentArea = document.getElementById("main-content-area");

  fetchData("Data/data.json").then((data) => {
    console.log(data);

    data.forEach(addArticleToPage);

    function addArticleToPage(article) {
      let contentToInsert = "";

      if (article.author == "Foo Bar") {
        contentToInsert = "CENSORED";
      } else {
        contentToInsert = article.content;
      }

      let articleToInsert =
        "<div id='" +
        article.id +
        "' class='content'>" +
        "<h1>" +
        article.heading +
        "</h1>" +
        "<p class='inner-content'>" +
        contentToInsert +
        "</p>" +
        //authorElementToInsert
        "<p class='author'<strong>" +
        article.author +
        "</strong></p>" +
        "<p class='contact'>" +
        article.email +
        "</p>" +
        "</div>";

      mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
    }

    /*for (let i = 0; i < data.length; i++) {
    let contentToInsert = "";

    if (data[i].author == "Foo Bar") {
      contentToInsert = "CENSORED";
    } else {
      contentToInsert = data[i].content;
    }
*/
    /*let authorElementToInsert = "";
    if (data[i].author == "Jane Doe") {
      authorElementToInsert =
        "<p class='author' style = 'color:pink'><strong>" +
        data[i].author +
        "</strong></p>";
    } else {
      authorElementToInsert =
        "<p class='author'</strong>" + data[i].author + "</strong></p>";
    }*/
    /*
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
      //authorElementToInsert
      "<p class='author'<strong>" +
      data[i].author +
      "</strong></p>" +
      "<p class='contact'>" +
      data[i].email +
      "</p>" +
      "</div>";

    mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
  }*/

    console.log("test");

    let authorElements = document.getElementsByClassName("author");
    console.log(authorElements);

    /* for (let i = 0; i < authorElements.length; i++) {
    if (authorElements[i].innerText == "Jane Doe") {
      authorElements[i].style.color = "pink";
    }
  }
*/
    let authorElementsArray = [];
    for (let i in authorElements) {
      authorElementsArray.push(authorElements[i]);
    }

    authorElementsArray.forEach(function (element) {
      if (element.innerText == "Jane Doe") {
        element.style.color = "pink";
      }
    });
  });
}

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
