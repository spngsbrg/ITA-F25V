//Width og height til SVG-elementet
const w = 500;
const h = 100;

const dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//SVG-elementet
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Scatter plot
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d[0];
  })
  .attr("cy", function (d) {
    return d[1];
  })
  .attr("r", 5);
