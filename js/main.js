
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

/*
Example 9 - Generating the JSON from the input files
 */

var tableJSON3 = {};
tableJSON3.domains = [];
tableJSON3.packages = [];
tableJSON3.rows = [];

d3.csv("deldroid-input/domain-explicit-communication-1.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        var domain = get_domain_from_file("domain-explicit-communication-1.csv");
        console.log(create_json_domains(data, domain));
    });

function get_domain_from_file(filename) {
    var domain = "";
    var filename_tokens = filename.split("-");

    for(var i = 1; i<filename_tokens.length-1; i++) {
        domain+=filename_tokens[i] + " ";
    }

    return domain;
}

function create_json_domains(data, domain) {
    var domain_object = {};
    domain_object.elements = [];

    domain_object.name = domain;

    data.columns.forEach(function(column) {
        if(column !== "Package" && column !== "Component" && column !== "ID") {
            domain_object.elements.push(column);
        }
    });

    return domain_object;
}