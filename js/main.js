
/*
Example 1 - drawing a cirle with D3
 */

var circleSVG1 = d3.select("#example1")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

circleSVG1.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50);

/*
Example 2
 */

var circleSVG2 = d3.select("#example2")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

circleSVG2.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function() {
        d3.select(this).style("fill", "aliceblue");
    })
    .on("mouseout", function() {
        d3.select(this).style("fill", "white");
    });

/*
Example 3
 */

var example3Data = [ 1, 2, 3, 4, 5 ];

var list = d3.select("#example3")
    .selectAll("p")
    .data(example3Data)
    .enter()
    .append("p")
    .text(function(d) {
            return d;
        });