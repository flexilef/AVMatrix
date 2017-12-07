
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
                            "data": [1, 0, 0, 1, 0, 0]
                        },
                        {
                            "domain": "implicit",
                            "data": [0, 0, 0, 1, 0, 0]
                        },
                        {
                            "domain": "permission granted",
                            "data": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//34
                        },
                        {
                            "domain": "permission usage",
                            "data": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //38
                        },
                        {
                            "domain": "permission enforcement",
                            "data": [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //38
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
                            "data": [0, 0, 1, 0, 0, 0]
                        },
                        {
                            "domain": "implicit",
                            "data": [0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission granted",
                            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission usage",
                            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            "domain": "permission enforcement",
                            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                    ]
                }
            ]
        }
    ]
};

let attackJson = [
    {
        "attack_type": "privilege escalation",
        "attack_info": {
            "malicious_dsmidx": 2,
            "malicious_component": "ListMsgs",
            "vulnerable_dsmidx": 3,
            "vulnerable_component": "Composer",
            "resource_dsmidx": 6,
            "resource": "SMS"
        }
    },
    {
        "attack_type": "intent spoofing",
        "attack_info": {
            "malicious_dsmidx": 3,
            "malicious_component": "LevelUp",
            "vulnerable_dsmidx": 2,
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

$(document).ready( function(){
    renderJsonTable(tableJSON, "example8");

    render_analysis();

    add_all_popovers();
});

function add_all_popovers() {
    add_package_popovers();
    add_attack_popovers();
    add_permission_popovers();

    //initializes all popovers
    $('[data-toggle="popover"]').popover();
}

function add_package_popovers() {
    //attach popover info to table cells
    tableJSON.packages.forEach( function(the_package) {
        //attach popover info to package cells
        let css_package_cell = "tr td[data-pkg='" + the_package.package + "']";
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

        //attach popover info to component cells
        the_package.components.forEach(function (component) {
            let css_component_cell = "tr td[data-cpn='" + component.component + "'";
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
}

function add_attack_popovers() {
    let css_attack_cells = "tr td[data-attack='true'";
    let $attack_cells = $(css_attack_cells);

    $attack_cells.each(function() {
        let attack_info = {};
        let attack_type = $(this).attr("data-attacktype");

        //get the last element split by _ and then get the last value split by -, which will give you the number without "dsmidx"
        let attacker_dsmidx = $(this).attr("data-row").toString().split("_").pop().split("-").pop();
        let victim_dsmidx = $(this).attr("data-col").toString().split("_").pop().split("-").pop();

        //get attack info
        attackJson.forEach(function(attack) {
            if(attack.attack_type === attack_type) {
                if(attack.attack_info.malicious_dsmidx.toString() === attacker_dsmidx &&
                    attack.attack_info.vulnerable_dsmidx.toString() === victim_dsmidx) {
                    attack_info.attacker = attack.attack_info.malicious_component;
                    attack_info.victim = attack.attack_info.vulnerable_component;
                }
            }
        });

        $(this).attr("data-toggle", "popover");
        $(this).attr("data-trigger", "click");
        $(this).attr("data-placement", "auto");
        $(this).attr("data-html", "true");
        $(this).attr("data-template", '<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>');
        $(this).attr("data-title", attack_type);
        $(this).attr("data-content", "<p>Attacker: " + attack_info.attacker + "</p>" + "<p>Victim: " + attack_info.victim + "</p>");
    });
}

function add_permission_popovers() {
    let css_permission_cells = "tr td[data-col^='permission-'";
    let $permission_cells = $(css_permission_cells);

    $permission_cells.each(function() {
        let component_dsmidx = $(this).attr("data-row").split("_").pop().split("-").pop();
        let permission_type = $(this).attr("data-col");
        let permissions = [];
        let popover_content = "";
        // console.log(component_dsmidx);

        //get the permission/subdomain indices so we can iterate through the tableJSON later
        tableJSON.packages.forEach(function(the_package) {
            the_package.components.forEach(function(component) {
                if(component.dsm_idx.toString() === component_dsmidx) {
                    component.domain_data.forEach(function (domain_datum) {
                        if (domain_datum.domain.replace(/\s/g, "-") === permission_type) {
                            domain_datum.data.forEach(function (data, index) {
                                if (data === 1) {
                                    let permission = {};
                                    //the index of the subdomain in the tableJSON that contains the name of the permission
                                    permission.indices = [];

                                    permission.type = domain_datum.domain;
                                    permission.indices.push(index);

                                    permissions.push(permission);
                                }
                            });
                        }
                    });
                }
            });
        });

        //iterate through each permission to find its subdomain name
        permissions.forEach(function(permission) {
            permission.indices.forEach(function(permission_index) {
                tableJSON.domains.forEach(function(domain) {
                    if(domain.name === permission.type) {
                        let permission_name = domain.subdomains[permission_index].name;

                        popover_content+="<p>" + permission_name + "</p>";
                        console.log(popover_content);
                    }
                });
            });
        });

        $(this).attr("data-toggle", "popover");
        $(this).attr("data-trigger", "click");
        $(this).attr("data-placement", "auto");
        $(this).attr("data-html", "true");
        $(this).attr("data-template", '<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>');
        $(this).attr("data-title", permission_type);
        $(this).attr("data-content", popover_content);

    });
}

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
        .classed("table", true)
        .classed("table-responsive", true)
        .classed("table-striped", true)
        .classed("table-bordered", true)
        .classed("table-hover", true)
        .append("thead")
        .classed("thead", true)
        .attr("id", div_id + "_thead");

    d3.select("#" + div_id + "_table")
        .append("tbody")
        .attr("id", div_id + "_tbody");
}

function create_all_table_rows(div_id, table) {
    let rows_data = [];
    let grouped_domain_data = [];
    let domain_classes = [];
    let permission_classes = [];

    //prepare rows data
    table.packages.forEach(function(the_package) {
        the_package.components.forEach(function(component) {
            component.domain_data.forEach(function(domain_datum) {

                //uncomment below to revert to displaying all permission subdomain data
                //
                //maps each element in grouped_domain_data with their respective column header
                // table.domains.forEach(function(domain) {
                //     if(domain.name === domain_datum.domain) {
                //         domain.subdomains.forEach(function(subdomain) {
                //             domain_classes.push(domain.name.toString().replace(/\s/g, "-") +
                //                 "_" + subdomain.name.toString().replace(/\s/g, "-"));
                //         });
                //     }
                // });
                //
                // domain_datum.data.forEach(function(data) {
                //     grouped_domain_data.push(data);
                // });

                //maps each element in grouped_domain_data with their respective column headers
                table.domains.forEach(function(domain) {
                    if(domain.name === domain_datum.domain) {
                        //skip this step for permission domains since we will not list all of their subdomains
                        if (!domain_datum.domain.toString().match(/^permission*/)) {
                            domain.subdomains.forEach(function (subdomain) {
                                domain_classes.push(domain.name.toString().replace(/\s/g, "-") +
                                    "_dsmidx-" + subdomain.name.toString().replace(/\s/g, "-"));
                            });
                        }
                        else {
                            permission_classes.push(domain.name.toString().replace(/\s/g, "-"));
                        }
                    }
                });

                //group the row data for each non-permission domain
                if(!domain_datum.domain.toString().match(/^permission*/)) {
                    domain_datum.data.forEach(function (data) {
                        grouped_domain_data.push(data);
                    });
                }
                else {
                    //empty cell for the permission domains
                    grouped_domain_data.push("Click Me!");
                }
            });

            //add in the permission classes to the array of domain classes
            permission_classes.forEach(function(perm_class) {
                domain_classes.push(perm_class);
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
            create_table_rows(div_id, data, false);
        }

        old_package = data.package;
    });
}

function create_table_rows(div_id, rows, rowspan) {
    let row = d3.select("#" + div_id + "_tbody")
        .append("tr")
        .attr("data-pkg", rows.package)
        .attr("data-cpn", rows.component)
        .attr("data-dsmidx", rows.component_dsm_idx)

    //create package headers. If rowspan is specified, add it, otherwise, skip creating it
    if(rowspan !== false) {
        row.append("td")
            .attr("rowspan", rowspan)
            .attr("data-pkg", rows.package)
            .text(rows.package);
    }

    //create component headers
    row.append("td")
        .attr("data-cpn", rows.component)
        .text(rows.component);

    //create ID header
    row.append("td")
        .text(rows.component_dsm_idx);

    //populate domain data
    d3.select("tr[data-pkg=" + rows.package + "][data-cpn=" + rows.component + "]")
        .selectAll("td.g") //g to create a new grouping? and prevent rebinding data to the first two td headers
        .data(rows.data)
        .enter()
        .append("td")
        .attr("data-row", rows.package + "_" + rows.component + "_dsmidx-" + rows.component_dsm_idx)
        .attr("data-col", function(d, i) {
            return rows.domain_classes[i];
        })
        .classed("cell-active", function(d, i) {
            if(d === 1) {
                return true;
            }

            return false;
        })
        .attr("data-matrix_value", function(d) { return d; })
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

        //create subdomains if not a permissions domain
        if(!domain.name.toString().match(/^permission*/)) {
            domain_headers.colspan.push(domain.subdomains.length);

            //create subdomains array
            domain.subdomains.forEach(function (subdomain) {
                domain_headers.subdomains.push(subdomain.name);
            });
        }
        else {
            //no subdomains
            domain_headers.subdomains.push(" ");
            //permission domains should have colspan of 1
            domain_headers.colspan.push(1);
        }
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

function render_analysis() {
    attackJson.forEach(function(attack) {
        render_attack(attack);
    });
}

function render_attack(attack) {
    let coords = {};
    coords.row = attack.attack_info.malicious_dsmidx;
    coords.column = attack.attack_info.vulnerable_dsmidx;

    let attack_type = attack.attack_type;

    let $table_cells = $("tr[data-dsmidx='" + coords.row + "'] td[data-col*='dsmidx-" + coords.column + "']");
    $table_cells.each(function() {
        if($(this).attr("data-matrix_value") === "1") {
            $(this).attr("data-attacktype", attack_type);
            $(this).attr("data-attack", true);
        }
    });

    console.log(coords.row);
}
