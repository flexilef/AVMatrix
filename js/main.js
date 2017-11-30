
/*
--------------------------------------------------------------------------------------------------
Example 8 - New JSON
--------------------------------------------------------------------------------------------------
 */

var tableJSON = {
    "domains": [
        {
            "name": "explicit",
            "subdomains": [
                { "name": 0 },
                { "name": 1 },
                { "name": 2 },
                { "name": 3 },
                { "name": 4 },
                { "name": 5 }
            ]
        },
        {
            "name": "implicit",
            "subdomains": [
                { "name": 0 },
                { "name": 1 },
                { "name": 2 },
                { "name": 3 },
                { "name": 4 },
                { "name": 5 }
            ]
        },
        {
            "name": "permission granted",
            "subdomains": [
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
            "subdomains": [
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
            "package": "Messaging",
            "components": [
                {
                    "name": "ListMsgs",
                    "domain_data": [
                        {
                            "domain": "explicit_domain",
                            "data": [0, 1, 0, 0, 0, 0]
                        },
                        {
                            "domain": "implicit_domain",
                            "data": [0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission_granted_domain",
                            "data": [0, 0, 1]
                        },
                        {
                            "domain": "permission_usage_domain",
                            "data": [0, 0, 1]
                        }
                    ]
                },
                {
                    "name": "Composer",
                    "domain_data": [
                        {
                            "domain": "explicit_domain",
                            "data": [1, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "implicit_domain",
                            "data": [0, 0, 1, 0, 0, 0]
                        },
                        {
                            "domain": "permission_granted_domain",
                            "data": [0, 1, 0]
                        },
                        {
                            "domain": "permission_usage_domain",
                            "data": [0, 0, 0]
                        }
                    ]
                }
            ]
        }
    ]
};

function renderJsonTable(table, div_id) {
    //create table
    create_table_structure(div_id);

    //create all headers
    create_all_table_headers(div_id, table);

    //create packages
    create_all_table_rows(div_id, table);
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

function create_all_table_rows(div_id, table) {
    var rows_data = [];
    var grouped_domain_data = [];

    table.packages.forEach(function(package) {
        package.components.forEach(function(component) {
            component.domain_data.forEach(function(domain_datum) {
                domain_datum.data.forEach(function(data) {
                    grouped_domain_data.push(data);
                });
            });

            rows_data.push(grouped_domain_data);
            grouped_domain_data = [];
        });
    });

    rows_data.forEach(function(data) {
        create_table_rows(div_id, data);
    });
}

function create_table_rows(div_id, rows) {
    d3.select("#" + div_id + "_tbody")
        .append("tr")
        .selectAll("td")
        .data(rows)
        .enter()
        .append("td")
        .text( function(d) { return d; })
}

//accepts an array of a domains and their subdomains
function create_all_table_headers(div_id, table) {
    var sub_headers = [];
    var domain_names = [];
    var domain_headers = {};
    domain_headers.colspan = [];

    var num_columns_added = 0;

    table.domains.forEach(function(domain) {
        domain_names.push(domain.name);
        domain_headers.colspan.push(domain.subdomains.length);

        //create subheader array
        domain.subdomains.forEach(function(element) {
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
    create_table_headers(div_id, domain_headers);
    create_table_sub_headers(div_id, sub_headers);
}

function create_table_sub_headers(div_id, headers) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(headers)
        .enter()
        .append("th")
        .text( function(d) { return d; });
}

function create_table_headers(div_id, headers) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(headers.domains)
        .enter()
        .append("th")
        .attr("colspan", function(d, i) { return headers.colspan[i]; } )
        .text( function(d) { return d; });
}

renderJsonTable(tableJSON, "example8");

/*
Example 9 - Generating the JSON from the input files
 */

var tableJSON3 = {};
tableJSON3.domains = [];
tableJSON3.packages = [];

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
    domain_object.subdomains = [];

    domain_object.name = domain;

    data.columns.forEach(function(column) {
        if(column !== "Package" && column !== "Component" && column !== "ID") {
            domain_object.subdomains.push(column);
        }
    });

    return domain_object;
}