
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
        drawTableFromCsv(data, "example4", "table-explicit")
    });


//create a table from a csv file
function drawTableFromCsv(data, divId, tableId) {
    // console.log("COLUMNS:" + data.columns.length);
    var colHeaders = data.columns;

    //This creates the table header
    var tableHeader = d3.select("#" + divId)
        .append("table")
        .attr("id", tableId)
        .selectAll("th")
        .data(data.columns)
        .enter()
        .append("th")
        .text( function(d) { return d; });

    //This creates the rows
    var tableRows = d3.select("#" + tableId)
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

/*
Example 5
 */

var domain_permission_csv = d3.csv("deldroid-input/domain-permission-granted-1.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        //csv file is loaded as data: an array of objects and an array (of the column names)
        drawTableFromCsv(data, "example5", "table-implicit")
    });

/*
Example 6 - Shitty example do not use... kept just for educational purposes*
 */
var groupedData;

var permission_file = d3.csv("deldroid-input/domain-permission-granted-1.csv",
    function(error, data) {
        if (error) throw error;

        var permission_data = data;
        var permission_data_columns = data.columns;

        var explicit_file = d3.csv("deldroid-input/domain-explicit-communication-1.csv",
            function(error, data) {
                if (error) throw error;

                var explicit_data = data;
                var explicit_data_columns = data.columns;

                var groupedColumns = explicit_data_columns.concat(permission_data_columns);
                // var groupedColumns = _.uniq(explicit_data_columns.concat(permission_data_columns));
                var groupedData = permission_data.concat(explicit_data);
                groupedData["columns"] = groupedColumns;

                // console.log(groupedData);
                drawTableFromCsv(groupedData, "example6", "table-grouped");
            });
    });

/*
Example 7 - Main JSON for entire table render
 */

var tableJSON = {
    "domains": [
        {
            "domain_name": "explicit",
            "domain_headers": [0, 1, 2, 3, 4, 5]
        },
        {
            "domain_name": "implicit",
            "domain_headers": [0, 1, 2, 3, 4, 5]
        },
        {
            "domain_name": "perm_granted",
            "domain_headers": ["Location", "SMS", "Bluetooth"]
        }
    ],
    "rows": [
        {
            "app_name": "FunGame",
            "component": "LevelUp",
            "data": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0
            ]
        },
        {
            "app_name": "FunGame",
            "component": "main",
            "data": [
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0
            ]
        }
    ]
};

function renderJsonTable(table) {
    //create table
    d3.select("#example7")
        .append("table")
        .attr("id", "table7")
        .append("thead")
        .attr("id", "thead7");

    d3.select("#table7")
        .append("tbody")
        .attr("id", "tbody7");

    //create all headers
    create_all_table_headers(table.domains);

    //create rows
    var row_data = [];
    table.rows.forEach(function(row) {
        create_table_rows(row);
        // console.log(row);
    });
}

function print_debug(columns) {
    console.log(columns);
}

function create_table_sub_headers(headers) {
    d3.select("#thead7")
        .append("tr")
        .selectAll("th")
        .data(headers)
        .enter()
        .append("th")
        .text( function(d) { return d; });
}

function create_table_headers(headers) {
    d3.select("#thead7")
        .append("tr")
        .selectAll("th")
        .data(headers.domains)
        .enter()
        .append("th")
        .attr("colspan", headers.colspan)
        .text( function(d) { return d; });
}

function create_all_table_headers(domains) {
    var sub_headers = [];
    var domain_names = [];
    var domain_headers = {};
    domain_headers.colspan = [];

    var num_columns_added = 0;

    domains.forEach(function(domain) {
        domain_names.push(domain.domain_name);
        domain_headers.colspan.push(domain.domain_headers.length);
        sub_headers = sub_headers.concat(domain.domain_headers);
        num_columns_added++;
    });

    if(num_columns_added == 3) {
        print_debug(sub_headers);
        print_debug(domain_names);
        print_debug(domain_headers);
        // create_table_super_headers(domain_names, domain.domain_headers.length);
    }

    domain_headers.domains = domain_names;
    create_table_headers(domain_headers);
    create_table_sub_headers(sub_headers);
}

function create_table_rows(rows) {
    d3.select("#tbody7")
        .append("tr")
        .selectAll("td")
        .data(rows.data)
        .enter()
        .append("td")
        .text( function(d) { return d; })
}

renderJsonTable(tableJSON);

/*
--------------------------------------------------------------------------------------------------
Example 8 - New JSON
--------------------------------------------------------------------------------------------------
 */

var tableJSON2 = {
    "domains": [
        {
            "name": "explicit",
            "elements": [
                {
                    "name": 0
                },
                {
                    "name": 1
                },
                {
                    "name": 2
                },
                {
                    "name": 3
                },
                {
                    "name": 4
                },
                {
                    "name": 5
                }
            ]
        },
        {
            "name": "implicit",
            "elements": [
                {
                    "name": 0
                },
                {
                    "name": 1
                },
                {
                    "name": 2
                },
                {
                    "name": 3
                },
                {
                    "name": 4
                },
                {
                    "name": 5
                }
            ]
        },
        {
            "name": "permission granted",
            "elements": [
                {
                    "name": "Location",
                    //"image": "location.png"
                },
                {
                    "name": "SMS",
                    //"image": "sms.png"
                },
                {
                    "name": "Bluetooth",
                    //"image": "bluetooth.png"
                }
            ]
        },
        {
            "name": "permission usage",
            "elements": [
                {
                    "name": "Location",
                    //"image": "location.png"
                },
                {
                    "name": "SMS",
                    //"image": "sms.png"
                },
                {
                    "name": "Bluetooth",
                    //"image": "bluetooth.png"
                }
            ]
        }
    ],
    "packages": [
        {
            "name": "Messaging",
            "components": [
                {
                    "name": "ListMsgs",
                    "target_sdk": "1"
                },
                {
                    "name": "Composer",
                    "target_sdk": "1"
                },
                {
                    "name": "Sender",
                    "target_sdk": "1"
                }
            ]
        }
    ],
    "rows": [
        {
            "package": "Messaging",
            "component": "ListMsgs",
            "domain_data": [
                {
                    "domain": "explicit_domain",
                    "data": [
                        0, 1, 0, 0, 0, 0
                    ]
                },
                {
                    "domain": "implicit_domain",
                    "data": [
                        0, 0, 0, 0, 0, 0
                    ]
                },
                {
                    "domain": "permission_granted_domain",
                    "data": [
                        0, 0, 1
                    ]
                },
                {
                    "domain": "permission_usage_domain",
                    "data": [
                        0, 0, 1
                    ]
                }
            ]
        },
        {
            "package": "Messaging",
            "component": "Composer",
            "domain_data": [
                {
                    "domain": "explicit_domain",
                    "data": [
                        1, 0, 0, 0, 0, 0
                    ]
                },
                {
                    "domain": "implicit_domain",
                    "data": [
                        0, 0, 1, 0, 0, 0
                    ]
                },
                {
                    "domain": "permission_granted_domain",
                    "data": [
                        0, 1, 0
                    ]
                },
                {
                    "domain": "permission_usage_domain",
                    "data": [
                        0, 0, 0
                    ]
                }
            ]
        }
    ]
};

function renderJsonTable2(table, div_id) {
    //create table
    create_table_structure(div_id);

    //create all headers
    create_all_table_headers2(div_id, table);

    //create rows
    create_all_table_rows2(div_id, table);
}

function create_table_structure(div_id) {
    d3.select("#" + div_id)
        .append("table")
        .attr("id", div_id + "_table")
        .append("thead")
        .attr("id", div_id + "_thead");

    d3.select("#" + div_id + "_table")
        .append("tbody")
        .attr("id", div_id + "_tbody");
}

function create_all_table_rows2(div_id, table) {
    var row_data = [];
    var domain_data = [];

    table.rows.forEach(function(row) {
        row.domain_data.forEach(function(domain) {
            domain.data.forEach(function(data) {
                domain_data.push(data);
            });
        });
        row_data.push(domain_data);
        domain_data = [];
    });

    row_data.forEach(function(data) {
        create_table_rows2(div_id, data);
    });
}

function create_table_rows2(div_id, rows) {
    d3.select("#" + div_id + "_tbody")
        .append("tr")
        .selectAll("td")
        .data(rows)
        .enter()
        .append("td")
        .text( function(d) { return d; })
}

//accepts an array of a domains and their subdomains
function create_all_table_headers2(div_id, table) {
    var sub_headers = [];
    var domain_names = [];
    var domain_headers = {};
    domain_headers.colspan = [];

    var num_columns_added = 0;

    table.domains.forEach(function(domain) {
        domain_names.push(domain.name);
        domain_headers.colspan.push(domain.elements.length);

        //create subheader array
        domain.elements.forEach(function(element) {
            sub_headers.push(element.name);
        });

        num_columns_added++;
    });

    if(num_columns_added == 3) {
        print_debug(sub_headers);
        print_debug(domain_names);
        print_debug(domain_headers);
    }

    domain_headers.domains = domain_names;
    create_table_headers2(div_id, domain_headers);
    create_table_sub_headers2(div_id, sub_headers);
}

function create_table_sub_headers2(div_id, headers) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(headers)
        .enter()
        .append("th")
        .text( function(d) { return d; });
}

function create_table_headers2(div_id, headers) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(headers.domains)
        .enter()
        .append("th")
        .attr("colspan", function(d, i) { return headers.colspan[i]; } )
        .text( function(d) { return d; });
}

renderJsonTable2(tableJSON2, "example8");