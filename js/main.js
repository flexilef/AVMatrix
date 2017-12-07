
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
let selectedApps = {
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
    ],
    "packages": []
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

let csv_explicit = {};
let csv_implicit = {};
let csv_perm_e = {};
let csv_perm_g = {};
let csv_perm_u = {};

// get data from csv files.
let domainExplicitCSV = d3.csv("deldroid-input2/domain-explicit-communication-5.csv",
    function(error, data) {
        csv_explicit = data;
    }
);

let domainImplicitCSV = d3.csv("deldroid-input2/domain-implicit-communication-5.csv",
    function(error, data) {
        csv_implicit = data;
    }
);

let permissionEnforcementCSV = d3.csv("deldroid-input2/domain-permission-enforcement-5.csv",
    function(error, data) {
        csv_perm_e = data;
    }
);

let permissionGrantedCSV = d3.csv("deldroid-input2/domain-permission-granted-5.csv",
    function(error, data) {
        csv_perm_g = data;
    }
);

let permissionUsageCSV = d3.csv("deldroid-input2/domain-permission-usage-5.csv",
    function(error, data) {
        csv_perm_u = data;
    }
);

// build xml text string from analysis results.
analysisResults = ''

let apps = [] 
let numAppsProcessed = 0;
let components = []         // each value is an array consisting of the app name followed by the components in that app. 
                            // ex. [['Messaging', 'ListMsgs', 'Composer', 'Sender'], ['FunGame', 'Main', 'LevelUp']]
let numComponents = 0;
let componentsDsmID = []    // ex. [['Messaging', 1, 5, 2], ['Fungame', 3, 9, 6]]
let componentsDsmIDFlat = [] // ex. [1, 5, 2, 3, 9, 6]
let componentsType = []
let attacks = []            // 'p' = privilege escalation
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

function addComponents() {
    // apps is an array of xml strings, with each array item representing one xml file.
    let parser = new DOMParser();
    
    for (var i = 0; i < apps.length; i++) {
        let item = []; // item that will be added to components array.
        let itemIDs = []; // item that will be added to componentsDsmID array.
        let itemTypes = []; // item that will be added to componentsType array.
        let xmlDoc = parser.parseFromString(apps[i], "text/xml");
        // first add the app's name.
        let name = xmlDoc.getElementsByTagName("name");
        item.push(name[0].textContent);
        itemIDs.push(name[0].textContent);
        itemTypes.push(name[0].textContent);
        // then add the components for that app.
        comps = [];
        comps = xmlDoc.getElementsByTagName("components");

        for (var j = 0; j < comps[0].childNodes.length; j++) {
            if (comps[0].childNodes[j].nodeName === 'component') {
                item.push(comps[0].childNodes[j].childNodes[5].textContent);
                itemIDs.push(comps[0].childNodes[j].childNodes[3].textContent);
                itemTypes.push(comps[0].childNodes[j].childNodes[11].textContent);
                // increase component count for each component added.
                numComponents++;
            }
        }
        // add the app's components to the total list of components.
        components.push(item);
        // add the app's components' DSMIds to the total list of component IDs.
        componentsDsmID.push(itemIDs);
        // add the app's components' types to the total list of components types
        componentsType.push(itemTypes);
        // construct the flat components ID list, which will be needed to determine interaction values from csv files.
    }

    for (let i = 0; i < componentsDsmID.length; i++) {
        for (let j = 1; j < componentsDsmID[i].length; j++) {
            componentsDsmIDFlat.push(componentsDsmID[i][j]);
        }
    }
    addAttacks();
}

function addAttacks() {
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
        // add resource.
        let resource = privilegeAttackInstances[i].childNodes[19].textContent;
        privilegeAttacks.push(['p', attacker, victim, resource]);
    }

    // build list of all possible unauthorized intent receipt attacks.
    let unauthAttackInstances = [];
    let unauthAttacks = [];
    unauthAttackInstances = xmlDoc.getElementsByTagName("unauthorizedIntentReceiptInstance");
    
    for (var i = 0; i < unauthAttackInstances.length; i++) {
        let attacker = unauthAttackInstances[i].childNodes[3].textContent;
        let victim = unauthAttackInstances[i].childNodes[11].textContent;
        unauthAttacks.push(['u', attacker, victim]);
    }

    // build list of all possible intent spoofing attacks.
    let spoofAttackInstances = [];
    let spoofAttacks = [];
    spoofAttackInstances = xmlDoc.getElementsByTagName("intentSpoofingInstance");
    
    for (var i = 0; i < spoofAttackInstances.length; i++) {
        let attacker = spoofAttackInstances[i].childNodes[3].textContent;
        let victim = spoofAttackInstances[i].childNodes[11].textContent;
        spoofAttacks.push(['s', attacker, victim]);
    }

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

    // remove duplicate attacks.
    attacks = attacks.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    populateJSON();
    
}

function populateJSON() {
    let json_object = JSON.parse(JSON.stringify(selectedApps));
    // add subdomains to explicit and implicit domains. each subdomain's name is the component's dsmID.
    for (let i = 0; i < componentsDsmID.length; i++) {
        for (let j = 1; j < componentsDsmID[i].length; j++) {
            let ID = componentsDsmID[i][j];
            json_object['domains'][0]['subdomains'].push({"name": ID});
            json_object['domains'][1]['subdomains'].push({"name":ID});
        }
    }

    // add apps and their components. use csv files to determine and add domain data.
    // first add the apps, aka packages.
    for (let i = 0; i < components.length; i++) {
        let packageName = components[i][0];
        json_object['packages'].push({"package": packageName, "components": []});
    }
    // next, add each app's components.
    for (let i = 0; i < components.length; i++) {
        for (let j = 1; j < components[i].length; j++) {
            let componentName = components[i][j];
            json_object['packages'][i]['components'].push({"component": componentName, "domain_data":[{"domain": "explicit_domain", "data":[]},{"domain": "implicit_domain", "data": []},{"domain": "permission_granted_domain", "data":[]},{"domain": "permission_usage_domain", "data": []},{"domain": "permission_enforcement_domain", "data": []}]});
        }
    }

    // next, add domain data for each component in every package.
    console.log(csv_explicit);
    console.log(csv_explicit[20][21]);
    console.log(csv_perm_g);
    console.log(json_object['packages'][0]['components'].length);
    console.log('test');
    console.log(csv_explicit.columns[3]);
    console.log(componentsDsmIDFlat[0]);
    console.log('numcolumns: ' + csv_explicit.columns.length);
    // first add explicit and implicit domain data.
    for (let i = 0, packageIndex = 0, compIndex = 0; i < componentsDsmIDFlat.length; i++) {
        let exInteractions = [];
        let impInteractions = [];
        // for each component:
        // first locate the component's correct row in the csv data.
        for (let j = 0; j < csv_explicit.length; j++) {
            console.log('inside2');
            if (componentsDsmIDFlat[i] === csv_explicit.columns[j+3]) {
                // then populate component's interactions data.
                for (let k = 0; k < csv_explicit.columns.length - 4; k++) {
                    // check if column component exists in user's component list.
                    if (componentsDsmIDFlat.includes(csv_explicit.columns[k])){
                        // if it does, then add the data.
                        exInteractions.push(csv_explicit[j][k]);
                        impInteractions.push(csv_implicit[j][k]);
                    }
                }
            }
        }
        // now go back and do the permissions data.
        let permGInteractions = [];
        let permUInteractions = [];
        let permEInteractions = [];
        let permList = [permGInteractions, permUInteractions, permEInteractions];
        let permFilesList = [csv_perm_g, csv_perm_u, csv_perm_e];
        console.log('probelm start');
        console.log(components);
        console.log(componentsDsmID);
        console.log(componentsDsmIDFlat);
        console.log(components);
        console.log(componentsType);
        console.log(numComponents);
        // locate the correct row
        for (let j = 0; j < csv_perm_g.length; j++) {
            console.log(csv_perm_g[331]['ID']);
            if (csv_perm_g[j]['ID'] === componentsDsmIDFlat[i]) {
                // then populate.
                for (let k = 0; k < permList.length; k++) {
                    permList[k].push(permFilesList[k][j]['(350) CONTACTS']);
                    permList[k].push(permFilesList[k][j]['(351) SMS']);
                    permList[k].push(permFilesList[k][j]['(352) STORAGE']);
                    permList[k].push(permFilesList[k][j]['(353) LOCATION']);
                    permList[k].push(permFilesList[k][j]['(354) PHONE']);
                    permList[k].push(permFilesList[k][j]['(355) MICROPHONE']);
                    permList[k].push(permFilesList[k][j]['(356) CAMERA']);
                    permList[k].push(permFilesList[k][j]['(357) WRITE_SMS']);
                    permList[k].push(permFilesList[k][j]['(358) USE_CREDENTIALS']);
                    permList[k].push(permFilesList[k][j]['(359) INTERNET']);
                    permList[k].push(permFilesList[k][j]['(360) ACCESS_NETWORK_STATE']);
                    permList[k].push(permFilesList[k][j]['(361) ACCESS_WIFI_STATE']);
                    permList[k].push(permFilesList[k][j]['(362) CHANGE_WIFI_STATE']);
                    permList[k].push(permFilesList[k][j]['(363) BLUETOOTH']);
                    permList[k].push(permFilesList[k][j]['(364) BLUETOOTH_ADMIN']);
                    permList[k].push(permFilesList[k][j]['(365) VIBRATE']);
                    permList[k].push(permFilesList[k][j]['(366) FLASHLIGHT']);
                    permList[k].push(permFilesList[k][j]['(367) WAKE_LOCK']);
                    permList[k].push(permFilesList[k][j]['(368) MODIFY_AUDIO_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(369) DISABLE_KEYGUARD']);
                    permList[k].push(permFilesList[k][j]['(370) GET_TASKS']);
                    permList[k].push(permFilesList[k][j]['(371) RESTART_PACKAGES']);
                    permList[k].push(permFilesList[k][j]['(372) com.android.launcher.permission.INSTALL_SHORTCUT']);
                    permList[k].push(permFilesList[k][j]['(373) READ_SYNC_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(374) WRITE_SYNC_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(375) WRITE_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(376) RECEIVE_BOOT_COMPLETED']);
                    permList[k].push(permFilesList[k][j]['(377) BROADCAST_STICKY']);
                    permList[k].push(permFilesList[k][j]['(378) MOUNT_UNMOUNT_FILESYSTEMS']);
                    permList[k].push(permFilesList[k][j]['(379) WRITE_APN_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(380) CHANGE_NETWORK_STATE']);
                    permList[k].push(permFilesList[k][j]['(381) CLEAR_APP_CACHE']);
                    permList[k].push(permFilesList[k][j]['(382) WRITE_SECURE_SETTINGS']);
                    permList[k].push(permFilesList[k][j]['(383) READ_LOGS']);
                    permList[k].push(permFilesList[k][j]['(384) INSTALL_PACKAGES']);
                    permList[k].push(permFilesList[k][j]['(385) CLEAR_APP_USER_DATA']);
                    permList[k].push(permFilesList[k][j]['(386) DELETE_PACKAGES']);
                }
            }
        }
        // populate the json fields.
        // first explicit.
        json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][0]['data'] = 
            json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][0]['data'].concat(exInteractions);
        // then implicit.
        json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][1]['data'] = 
            json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][1]['data'].concat(impInteractions);
        // then permissions fields.
        json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][2]['data'] = 
            json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][2]['data'].concat(permGInteractions);

        json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][3]['data'] = 
            json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][3]['data'].concat(permUInteractions);

        json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][4]['data'] = 
            json_object['packages'][packageIndex]['components'][compIndex]['domain_data'][4]['data'].concat(permEInteractions);

        compIndex++;
        if (compIndex === json_object['packages'][packageIndex]['components'].length) {
            packageIndex++;
            compIndex = 0;
        }
    }
    
    console.log(json_object);
    selectedApps = JSON.stringify(json_object);
    populateAttackJSON();
}

function populateAttackJSON() {
    console.log('attacks');
    console.log(attacks);
}

function updateAppsToVisualize(event) {
    selectedApps = []
    for (var i = 0; i < apps.length; i++) {
        let reader = new FileReader();
        reader.onload = (function(file) {
            let appData = reader.result;
            selectedApps.push(appData);
        })
    }
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
        /*
        if (error) throw error;
        console.log(data); // [{"Hello": "world"}, …]
        */

        let domain = get_domain_from_file("domain-explicit-communication-1.csv");
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
