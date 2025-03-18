let dataset = [1, 2, 3, 4, 5, "kajsrgh", "uwrheg", 1243, 405978];

d3.select("#data")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(
    //"haj"
    function (d, i) {
      return i + ": " + d;
    }
  );
