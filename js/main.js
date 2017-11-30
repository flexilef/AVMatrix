
/*
--------------------------------------------------------------------------------------------------
Example 8 - New JSON
--------------------------------------------------------------------------------------------------
 */

var tableJSON = {
    "domains": [
        {
            "name": " ",
            "subdomains": [
                { "name": "ID" }
            ]
        },
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
                    "component": "ListMsgs",
                    "domain_data": [
                        {
                            "domain": " ",
                            "data": [0]
                        },
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
                    "component": "Composer",
                    "domain_data": [
                        {
                            "domain": " ",
                            "data": [1]
                        },
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

    //prepare rows data
    table.packages.forEach(function(package) {
        package.components.forEach(function(component) {
            component.domain_data.forEach(function(domain_datum) {
                domain_datum.data.forEach(function(data) {
                    grouped_domain_data.push(data);
                });
            });


            var data = {
                "package": package.package,
                "component": component.component,
                "components_count": package.components.length,
                "data": grouped_domain_data
            }

            rows_data.push(data);

            grouped_domain_data = [];
        });
    });

    rows_data.forEach(function(data) {
        create_table_rows(div_id, data);
    });
}

function create_table_rows(div_id, rows) {
    var row = d3.select("#" + div_id + "_tbody")
        .append("tr")
        .classed(rows.package + "-" + rows.component, true);

    //create side headers
    row.append("td")
        .attr("rowspan", rows.components_count)
        .text(rows.package);
    row.append("td")
        .text(rows.component);

    d3.select("tr." + rows.package + "-" + rows.component)
        .selectAll("td.g") //g to create a new grouping? and prevent rebinding data to the first two td headers
        .data(rows.data)
        .enter()
        .append("td")
        .text( function(d) { return d; })
}

function create_all_table_headers(div_id, table) {
    var domain_headers = {
        "domains": [ "", ""],
        "subdomains": [ "Packages", "Components" ],
        "colspan": [ 1, 1 ]
    };

    //prepare all domain header arrays
    table.domains.forEach(function(domain) {
        domain_headers.domains.push(domain.name);
        domain_headers.colspan.push(domain.subdomains.length);

        //create subdomains array
        domain.subdomains.forEach(function(subdomain) {
            domain_headers.subdomains.push(subdomain.name);
        });
    });

    create_domain_headers(div_id, domain_headers);
}


/*
Accepts the id of the container div, and a "subheaders" array
1. subheaders - list of the subdomain names to display

Example:
   var subheaders = [ "Location", "SMS", "Bluetooth" ]
 */
function create_domain_subheaders(div_id, subheaders) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(subheaders)
        .enter()
        .append("th")
        .text( function(d) { return d; });
}

/*
Accepts the id of the container div, and a "headers" object containing 3 arrays:
1. domains - list of the domain names to display
2. subdomains - list of the subdomain names to display
3. colspan - number of columns that the domain should span

Example:
   var domain_headers = {
        "domains": [],
        "subdomains": [],
        "colspan": []
    };
 */
function create_domain_headers(div_id, headers) {
    d3.select("#" + div_id + "_thead")
        .append("tr")
        .selectAll("th")
        .data(headers.domains)
        .enter()
        .append("th")
        .attr("colspan", function(d, i) { return headers.colspan[i]; } )
        .text( function(d) { return d; });

    create_domain_subheaders(div_id, headers.subdomains);
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