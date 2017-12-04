
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
                    "component": "ListMsgs",
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
                    "component": "Composer",
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

var input = document.querySelector('input');
var selectedApps = {
    "domains": [
        {
            "name": "explicit",
            "subdomains": []
        },
        {
            "name": "implicit",
            "subdomains": []
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
    "packages": []
}

// get data from csv files.
let domainExplicitCSV = d3.csv("deldroid-input2/domain-explicit-communication-5.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data);

        let domain = get_domain_from_file("domain-explicit-communication-5.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
        
    });

let domainImplicitCSV = d3.csv("deldroid-input2/domain-implicit-communication-5.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data);

        let domain = get_domain_from_file("domain-implicit-communication-5.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
        
    });

let permissionEnforcementCSV = d3.csv("deldroid-input2/domain-permission-enforcement-5.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        let domain = get_domain_from_file("domain-permission-enforcement-5.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
    });

let permissionGrantedCSV = d3.csv("deldroid-input2/domain-permission-granted-5.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        let domain = get_domain_from_file("domain-permission-granted-5.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
    });

let permissionUsageCSV = d3.csv("deldroid-input2/domain-permission-usage-5.csv",
    function(error, data) {
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]

        let domain = get_domain_from_file("domain-permission-usage-5.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
    });

// build xml text string from analysis results.
analysisResults = ''

let apps = [] 
let numAppsProcessed = 0;
let components = []     // each value is an array consisting of the app name followed by the components in that app. 
                        // ex. [['Messaging', 'ListMsgs', 'Composer', 'Sender'], ['FunGame', 'Main', 'LevelUp']]
let attacks = []        // 'p' = privilege escalation
                        // 'u' = unauthorized intent receipt
                        // 'i' = intent spoofing
                        // [attack type, attacker component name, victim component name, resource]
                        // ex. [['p', 'ListMsgs', 'Composer', 'SMS'], ['e', 'Composer', 'Sender', 'LOCATION']...]

function addAnalysisResults(event) {
    // add analysis sheet.
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = function(theFile) {
        analysisResults = theFile.target.result;
    }
}

function addAppFiles(event) {
    // add user's selected apps to apps list.
    let numApps = event.target.files.length;
    for (var i = 0; i < event.target.files.length; i++) {
        let reader = new FileReader();
        reader.readAsText(event.target.files[i]);
        reader.onload = function(theFile) {
            apps.push(theFile.target.result);
            numAppsProcessed++
            if (numAppsProcessed === numApps) {
                addComponents();
            }
        };
    }
}

function addComponents(appsToParse) {
    // apps is an array of xml strings, with each array item representing one xml file.
    let parser = new DOMParser();
    
    for (var i = 0; i < apps.length; i++) {
        let item = [];
        let xmlDoc = parser.parseFromString(apps[i], "text/xml");
        // first add the app's name.
        let name = xmlDoc.getElementsByTagName("name");
        item.push(name[0].textContent);
        // then add the components for that app.
        comps = [];
        comps = xmlDoc.getElementsByTagName("components");
        console.log(comps);

        for (var j = 0; j < comps[0].childNodes.length; j++) {
            if (comps[0].childNodes[j].nodeName === 'component') {
                item.push(comps[0].childNodes[j].childNodes[7].textContent);
            }
        }
        // add the app's components to the total list of components.
        components.push(item);
    }
    addAttacks(components);
}

function addAttacks(componentsList) {
    // add all applicable attacks. these are the ones where the attacker and victim are both in the components list built from the user's selected apps.
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(analysisResults, "text/xml");
    // build list of all possible privilege escalation attacks.
    let privilegeAttackInstances = [];
    let privilegeAttacks = [];
    privilegeAttackInstances = xmlDoc.getElementsByTagName("privilegeEscalationInstance");

    for (var i = 0; i < privilegeAttackInstances.length; i++) {
        let attacker = privilegeAttackInstances[i].childNodes[3].textContent;
        let victim = privilegeAttackInstances[i].childNodes[11].textContent;
        privilegeAttacks.push(['p', attacker, victim]);
    }

    // build list of all possible unauthorized intent receipt attacks.
    let unauthAttackInstances = [];
    let unauthAttacks = [];
    unauthAttackInstances = xmlDoc.getElementsByTagName("intentSpoofingInstance");
    
    for (var i = 0; i < unauthAttackInstances.length; i++) {
        let attacker = unauthAttackInstances[i].childNodes[3].textContent;
        let victim = unauthAttackInstances[i].childNodes[11].textContent;
        unauthAttacks.push(['u', attacker, victim]);
    }

    // build list of all possible intent spoofing attacks.
    let spoofAttackInstances = [];
    let spoofAttacks = [];
    spoofAttackInstances = xmlDoc.getElementsByTagName("unauthorizedIntentReceiptInstance");
    
    for (var i = 0; i < spoofAttackInstances.length; i++) {
        let attacker = spoofAttackInstances[i].childNodes[3].textContent;
        let victim = spoofAttackInstances[i].childNodes[11].textContent;
        spoofAttacks.push(['s', attacker, victim]);
    }
    console.log('all attacks');
    console.log(privilegeAttacks);
    console.log(unauthAttacks);
    console.log(spoofAttacks);

    // go through all of the possible attacks, and see if any of the attacks apply.
    // first do this for privilege attacks.
    for (var i = 0; i < privilegeAttacks.length; i++) {
        // check if both the attacker and the victim of the attack exist in the user's components list.
        // check all of the components in each component item.
        // first check if the attacker exists.
        for (var j = 0; j < components.length; j++) {
            if (components[j].includes(privilegeAttacks[i][1])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < components.length; k++) {
                    if (components[k].includes(privilegeAttacks[i][2])) {
                        // if both exist, then add to list of attacks.
                        attacks.push(privilegeAttacks[i]);
                    }
                }
                attacks.push(privilegeAttacks[i]);
            }
        }
    }

    // repeat for unauthorized intent receipt and spoofing attacks.
    for (var i = 0; i < unauthAttacks.length; i++) {
        // check if both the attacker and the victim of the attack exist in the user's components list.
        // check all of the components in each component item.
        // first check if the attacker exists.
        for (var j = 0; j < components.length; j++) {
            if (components[j].includes(unauthAttacks[i][1])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < components.length; k++) {
                    if (components[k].includes(unauthAttacks[i][2])) {
                        // if both exist, then add to list of attacks.
                        attacks.push(unauthAttacks[i]);
                    }
                }
                attacks.push(unauthAttacks[i]);
            }
        }
    }

    for (var i = 0; i < spoofAttacks.length; i++) {
        // check if both the attacker and the victim of the attack exist in the user's components list.
        // check all of the components in each component item.
        // first check if the attacker exists.
        for (var j = 0; j < components.length; j++) {
            if (components[j].includes(spoofAttacks[i][1])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < components.length; k++) {
                    if (components[k].includes(spoofAttacks[i][2])) {
                        // if both exist, then add to list of attacks.
                        attacks.push(spoofAttacks[i]);
                    }
                }
                attacks.push(spoofAttacks[i]);
            }
        }
    }

    console.log('all attacks so far without dupes: ');
    // remove duplicate attacks.
    attacks = attacks.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    console.log(attacks);
    console.log('components list');
    console.log(components);
    
}

function updateAppsToVisualize(event) {
    selectedApps = []
    console.log(event.target.files);
    console.log('asdfasf');
    console.log(apps.length);
    for (var i = 0; i < apps.length; i++) {
        let reader = new FileReader();
        reader.onload = (function(file) {
            let appData = reader.result;
            selectedApps.push(appData);
            console.log(appData);
        })
    }
    return selectedApps
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
        // .attr("rowspan", rows.components_count)
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
        "domains": [ "Packages", "Components"],
        "subdomains": [ " ", " " ],
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

        let domain = get_domain_from_file("domain-explicit-communication-1.csv");
        console.log(create_json_domains(data, domain));
        let csv_data = create_json_domains(data, domain);
        return csv_data;
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
