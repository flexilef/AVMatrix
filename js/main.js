
/*
--------------------------------------------------------------------------------------------------
Example 8 - New JSON
--------------------------------------------------------------------------------------------------
 */

let tableJSON = {
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
                //each of these are dsmx
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
                    "name": "Contacts",
                },
                {
                    "name": "SMS",
                },
                {
                    "name": "Storage",
                },
                {
                    "name": "Location",
                },
                {
                    "name": "Phone",
                },
                {
                    "name": "Microphone",
                },
                {
                    "name": "Camera",
                },
                {
                    "name": "Write SMS",
                },
                {
                    "name": "Use Credentials",
                },
                {
                    "name": "Internet",
                },
                {
                    "name": "Access Network State",
                },
                {
                    "name": "Access Wifi State",
                },
                {
                    "name": "Change Wifi State",
                },
                {
                    "name": "Bluetooth",
                },
                {
                    "name": "Bluetooth Admin",
                },
                {
                    "name": "Vibrate",
                },
                {
                    "name": "Vibrate",
                },
                {
                    "name": "Flashlight",
                },
                {
                    "name": "Wake Lock",
                },
                {
                    "name": "Modify Audio Settings",
                },
                {
                    "name": "Disable Keyguard",
                },
                {
                    "name": "Get Tasks",
                },
                {
                    "name": "Restart Packages",
                },
                {
                    "name": "Install Shortcut",
                },
                {
                    "name": "Read Sync Settings",
                },
                {
                    "name": "Write Sync Settings",
                },
                {
                    "name": "Write Settings",
                },
                {
                    "name": "Receive Boot Completed",
                },
                {
                    "name": "Broadcast Sticky",
                },
                {
                    "name": "Mount/Unmount Filesystems",
                },
                {
                    "name": "Write APN Settings",
                },
                {
                    "name": "Change Network State",
                },
                {
                    "name": "Clear App Cache",
                },
                {
                    "name": "Write Secure Settings",
                },
                {
                    "name": "Read Logs",
                },
                {
                    "name": "Install Packages",
                },
                {
                    "name": "Clear App User Data",
                },
                {
                    "name": "Delete Packages",
                }
            ]
        },
        {
            "name": "permission usage",
            "subdomains": [
                {
                    "name": "Contacts",
                },
                {
                    "name": "SMS",
                },
                {
                    "name": "Storage",
                },
                {
                    "name": "Location",
                },
                {
                    "name": "Phone",
                },
                {
                    "name": "Microphone",
                },
                {
                    "name": "Camera",
                },
                {
                    "name": "Write SMS",
                },
                {
                    "name": "Use Credentials",
                },
                {
                    "name": "Internet",
                },
                {
                    "name": "Access Network State",
                },
                {
                    "name": "Access Wifi State",
                },
                {
                    "name": "Change Wifi State",
                },
                {
                    "name": "Bluetooth",
                },
                {
                    "name": "Bluetooth Admin",
                },
                {
                    "name": "Vibrate",
                },
                {
                    "name": "Flashlight",
                },
                {
                    "name": "Wake Lock",
                },
                {
                    "name": "Modify Audio Settings",
                },
                {
                    "name": "Disable Keyguard",
                },
                {
                    "name": "Get Tasks",
                },
                {
                    "name": "Restart Packages",
                },
                {
                    "name": "Install Shortcut",
                },
                {
                    "name": "Read Sync Settings",
                },
                {
                    "name": "Write Sync Settings",
                },
                {
                    "name": "Write Settings",
                },
                {
                    "name": "Receive Boot Completed",
                },
                {
                    "name": "Broadcast Sticky",
                },
                {
                    "name": "Mount/Unmount Filesystems",
                },
                {
                    "name": "Write APN Settings",
                },
                {
                    "name": "Change Network State",
                },
                {
                    "name": "Clear App Cache",
                },
                {
                    "name": "Write Secure Settings",
                },
                {
                    "name": "Read Logs",
                },
                {
                    "name": "Install Packages",
                },
                {
                    "name": "Clear App User Data",
                },
                {
                    "name": "Delete Packages",
                }
            ]
        },
        {
            "name": "permission enforcement",
            "subdomains": [
                {
                    "name": "Contacts",
                },
                {
                    "name": "SMS",
                },
                {
                    "name": "Storage",
                },
                {
                    "name": "Location",
                },
                {
                    "name": "Phone",
                },
                {
                    "name": "Microphone",
                },
                {
                    "name": "Camera",
                },
                {
                    "name": "Write SMS",
                },
                {
                    "name": "Use Credentials",
                },
                {
                    "name": "Internet",
                },
                {
                    "name": "Access Network State",
                },
                {
                    "name": "Access Wifi State",
                },
                {
                    "name": "Change Wifi State",
                },
                {
                    "name": "Bluetooth",
                },
                {
                    "name": "Bluetooth Admin",
                },
                {
                    "name": "Vibrate",
                },
                {
                    "name": "Vibrate",
                },
                {
                    "name": "Flashlight",
                },
                {
                    "name": "Wake Lock",
                },
                {
                    "name": "Modify Audio Settings",
                },
                {
                    "name": "Disable Keyguard",
                },
                {
                    "name": "Get Tasks",
                },
                {
                    "name": "Restart Packages",
                },
                {
                    "name": "Install Shortcut",
                },
                {
                    "name": "Read Sync Settings",
                },
                {
                    "name": "Write Sync Settings",
                },
                {
                    "name": "Write Settings",
                },
                {
                    "name": "Receive Boot Completed",
                },
                {
                    "name": "Broadcast Sticky",
                },
                {
                    "name": "Mount/Unmount Filesystems",
                },
                {
                    "name": "Write APN Settings",
                },
                {
                    "name": "Change Network State",
                },
                {
                    "name": "Clear App Cache",
                },
                {
                    "name": "Write Secure Settings",
                },
                {
                    "name": "Read Logs",
                },
                {
                    "name": "Install Packages",
                },
                {
                    "name": "Clear App User Data",
                },
                {
                    "name": "Delete Packages",
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
                    "dsm_idx": 2,
                    "type": "activity",
                    "domain_data": [
                        {
                            "domain": "explicit",
                            "data": [0, 1, 0, 0, 0, 0]
                        },
                        {
                            "domain": "implicit",
                            "data": [0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission granted",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//34
                        },
                        {
                            "domain": "permission usage",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //38
                        },
                        {
                            "domain": "permission enforcement",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //38
                        }
                    ]
                },
                {
                    "component": "Composer",
                    "dsm_idx": 3,
                    "type": "activity",
                    "domain_data": [
                        {
                            "domain": "explicit",
                            "data": [1, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "implicit",
                            "data": [0, 0, 1, 0, 0, 0]
                        },
                        {
                            "domain": "permission granted",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission usage",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission enforcement",
                            "data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                    ]
                }
            ]
        }
    ]
};

$(document).ready( function(){
    renderJsonTable(tableJSON, "example8");
    render_analysis();

    //attach popover info to table cells
    tableJSON.packages.forEach( function(the_package) {
        //attach popover info to package cells
        let css_package_cell = "tr td.data-pkg_" + the_package.package;
        let $package_cell = $(css_package_cell);

        $package_cell.attr("data-toggle", "popover");
        //adding data-container this seems to allow you to click on the popover to dismiss it
        $package_cell.attr("data-container", css_package_cell);
        $package_cell.attr("data-trigger", "click");
        $package_cell.attr("data-placement", "auto");
        $package_cell.attr("data-html", "true");
        $package_cell.attr("data-template", '<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>');
        $package_cell.attr("data-title", the_package.package);
        $package_cell.attr("data-content", "Some info that we can parse out and include in the JSON later");


        the_package.components.forEach( function(component) {
            let css_component_cell = "tr td.data-cpn_" + component.component;
            let $component_cell = $(css_component_cell);

            $component_cell.attr("data-toggle", "popover");
            $component_cell.attr("data-container", css_component_cell);
            $component_cell.attr("data-trigger", "click");
            $component_cell.attr("data-placement", "auto");
            $component_cell.attr("data-html", "true");
            $component_cell.attr("data-template", '<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>');
            $component_cell.attr("data-title", component.component);
            $component_cell.attr("data-content", "<p>Type: " + component.type + "</p>" + "<p>Extra: Some extra info</p>");
        });
    });



    //initializes all popovers
    $('[data-toggle="popover"]').popover();
});

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
    let rows_data = [];
    let grouped_domain_data = [];
    let domain_classes = [];

    //prepare rows data
    table.packages.forEach(function(the_package) {
        the_package.components.forEach(function(component) {
            component.domain_data.forEach(function(domain_datum) {

                //maps each element in grouped_domain_data with their respective column header
                table.domains.forEach(function(domain) {
                    if(domain.name === domain_datum.domain) {
                        domain.subdomains.forEach(function(subdomain) {
                            domain_classes.push(domain.name.toString().replace(/\s/g, "-") +
                                "_" + subdomain.name.toString().replace(/\s/g, "-"));
                        });
                    }
                });

                domain_datum.data.forEach(function(data) {
                    grouped_domain_data.push(data);
                });
            });

            let data = {
                "package": the_package.package,
                "component": component.component,
                "component_dsm_idx": component.dsm_idx,
                "components_count": the_package.components.length,
                "data": grouped_domain_data,
                "domain_classes": domain_classes
            };

            rows_data.push(data);

            grouped_domain_data = [];
            domain_classes = [];
        });
    });

    let old_package;
    rows_data.forEach(function(data) {

        if(data.package !== old_package) {
            create_table_rows(div_id, data, data.components_count);
        }
        else {
            //1 rowspan because we already set the rowspan
            create_table_rows(div_id, data, false);
        }

        old_package = data.package;
    });
}

function create_table_rows(div_id, rows, rowspan) {
    const class_package =  "data-pkg_" + rows.package;
    const class_component =  "data-cpn_" + rows.component;
    const class_dsm_idx = "data-dsmidx_" + rows.component_dsm_idx;

    let row = d3.select("#" + div_id + "_tbody")
        .append("tr")
        .classed(class_package, true)
        .classed(class_component, true)
        .classed(class_dsm_idx, true);

    //create package headers. If rowspan is specified, add it, otherwise, skip creating it
    if(rowspan !== false) {
        row.append("td")
            .attr("rowspan", rowspan)
            .classed(class_package, true)
            .text(rows.package);
    }

    //create component headers
    row.append("td")
        .classed(class_component, true)
        .text(rows.component);

    //create ID header
    row.append("td")
        .text(rows.component_dsm_idx);

    //populate domain data
    d3.select("tr." + class_package + "." + class_component)
        .selectAll("td.g") //g to create a new grouping? and prevent rebinding data to the first two td headers
        .data(rows.data)
        .enter()
        .append("td")
        .attr("class", function(d, i) {
            return "data-col_" + rows.domain_classes[i];
        })
        // .classed("data-row_" + rows.component_dsm_idx, true)
        .text( function(d) { return d; })
}

function create_all_table_headers(div_id, table) {
    let domain_headers = {
        "domains": ["", ""],
        "subdomains": ["Packages", "Components"],
        "colspan": [1, 1]
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

/*
Example 10 - rendering analysis results (testing is json structure is good)
 */

var analysisJson = [
    {
        "attack_type": "privilege escalation",
        "attack_info": {
            "malicious_dsmidx": 2,
            "malicious_component": "LevelUp",
            "vulnerable_dsmidx": 1,
            "vulnerable_component": "Sender",
            "resource_dsmidx": 6,
            "resource": "SMS"
        }
    },
    {
        "attack_type": "intent spoofing",
        "attack_info": {
            "malicious_dsmidx": 3,
            "malicious_component": "LevelUp",
            "vulnerable_dsmidx": 0,
            "vulnerable_component": "Sender",
            "pot_dsmidx": 6,
            "pot_component": "SMS"
        }
    },
    {
        "attack_type": "unauthorized intent receipt",
        "attack_info": {
            "malicious_dsmidx": 0,
            "malicious_component": "LevelUp",
            "vulnerable_dsmidx": 3,
            "vulnerable_component": "Sender",
            "pot_dsmidx": 6,
            "pot_component": "SMS"
        }
    }
];

function render_analysis() {
    analysisJson.forEach(function(attack) {
        render_attack(attack);
    });
}

function render_attack(attack) {
    let coords = {};

    coords.row = attack.attack_info.malicious_dsmidx;
    coords.column = attack.attack_info.vulnerable_dsmidx;

    let attack_type = attack.attack_type;
    let attack_class = "";

    if(attack_type === "privilege_escalation") {
        attack_class = "data-attack_privilege-escalation";
    }
    else if(attack_type === "intent_spoofing") {
        attack_class = "data-attack_intent-spoofing";
    }
    else if(attack_class === "unauthorized_intent-receipt") {
        attack_class = "data-attack_unauthorized_intent-receipt";
    }

    //add checks that the table cell is a 1 other wise don't render the attack
    let table_cell_implicit = $("tr.data-dsmidx_" + coords.row + " td.data-col_implicit_" + coords.column);
    let table_cell_explicit = $("tr.data-dsmidx_" + coords.row + " td.data-col_explicit_" + coords.column);

    if(table_cell_implicit.html() === "1") {
        table_cell_implicit.addClass(attack_class);
    }

    if(table_cell_explicit.html() === "1") {
        table_cell_explicit.addClass(attack_class);
    }

    console.log(coords.row);
}
