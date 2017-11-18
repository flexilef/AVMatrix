
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

/*
Example 4
 */

var domain_explicit_csv = d3.csv("deldroid-input/domain-explicit-communication-1.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        //csv file is loaded as data: an array of objects and an array (of the column names)
        drawTableFromCsv(data)
    });


//create a table of one row

function drawTableFromCsv(data) {
    console.log("COLUMNS:" + data.columns.length);
    var colHeaders = data.columns;

    var tableHeader = d3.select("#example4")
        .append("table")
        .attr("id", "domain-table")
        .selectAll("th")
        .data(data.columns)
        .enter()
        .append("th")
        .text( function(d) { return d; });

    //This creates the table header
    var tableRows = d3.select("#domain-table")
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    //This adds in the table row data
    colHeaders.forEach(function(header) {
        tableRows.append("td")
            .text(function(d) { return d[header]; })
    });

    /*
    The above loop translates to this code below
     */
    //
    // var tableData = tableRows.append("td")
    //     .text(function(d) { return d['Package']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['Component']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['ID']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['0']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['1']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['2']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['3']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['4']; })
    //     .append("td");
    //
    // tableRows.append("td")
    //     .text(function(d) { return d['5']; })
    //     .append("td");
}