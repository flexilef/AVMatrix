
/*
--------------------------------------------------------------------------------------------------
Example 8 - New JSON
--------------------------------------------------------------------------------------------------
 */

var input = document.querySelector('input');
let selectedApps = {
    "domains": [
        {
            "name": " ",
            "subdomains": [
                { "name": "ID" }
            ]
        },
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
                    "name": "Contacts"
                },
                {
                    "name": "SMS"
                },
                {
                    "name": "Storage"
                },
                {
                    "name": "Location"
                },
                {
                    "name": "Phone"
                },
                {
                    "name": "Microphone"
                },
                {
                    "name": "Camera"
                },
                {
                    "name": "Write SMS"
                },
                {
                    "name": "Use Credentials"
                },
                {
                    "name": "Internet"
                },
                {
                    "name": "Access Network State"
                },
                {
                    "name": "Access Wifi State"
                },
                {
                    "name": "Change Wifi State"
                },
                {
                    "name": "Bluetooth"
                },
                {
                    "name": "Bluetooth Admin"
                },
                {
                    "name": "Vibrate"
                },
                {
                    "name": "Flashlight"
                },
                {
                    "name": "Wake Lock"
                },
                {
                    "name": "Modify Audio Settings"
                },
                {
                    "name": "Disable Keyguard"
                },
                {
                    "name": "Get Tasks"
                },
                {
                    "name": "Restart Packages"
                },
                {
                    "name": "Install Shortcut"
                },
                {
                    "name": "Read Sync Settings"
                },
                {
                    "name": "Write Sync Settings"
                },
                {
                    "name": "Write Settings"
                },
                {
                    "name": "Receive Boot Completed"
                },
                {
                    "name": "Broadcast Sticky"
                },
                {
                    "name": "Mount/Unmount Filesystems"
                },
                {
                    "name": "Write APN Settings"
                },
                {
                    "name": "Change Network State"
                },
                {
                    "name": "Clear App Cache"
                },
                {
                    "name": "Write Secure Settings"
                },
                {
                    "name": "Read Logs"
                },
                {
                    "name": "Install Packages"
                },
                {
                    "name": "Clear App User Data"
                },
                {
                    "name": "Delete Packages"
                }
            ]
        },
        {
            "name": "permission usage",
            "subdomains": [
                {
                    "name": "Contacts"
                },
                {
                    "name": "SMS"
                },
                {
                    "name": "Storage"
                },
                {
                    "name": "Location"
                },
                {
                    "name": "Phone"
                },
                {
                    "name": "Microphone"
                },
                {
                    "name": "Camera"
                },
                {
                    "name": "Write SMS"
                },
                {
                    "name": "Use Credentials"
                },
                {
                    "name": "Internet"
                },
                {
                    "name": "Access Network State"
                },
                {
                    "name": "Access Wifi State"
                },
                {
                    "name": "Change Wifi State"
                },
                {
                    "name": "Bluetooth"
                },
                {
                    "name": "Bluetooth Admin"
                },
                {
                    "name": "Vibrate"
                },
                {
                    "name": "Flashlight"
                },
                {
                    "name": "Wake Lock"
                },
                {
                    "name": "Modify Audio Settings"
                },
                {
                    "name": "Disable Keyguard"
                },
                {
                    "name": "Get Tasks"
                },
                {
                    "name": "Restart Packages"
                },
                {
                    "name": "Install Shortcut"
                },
                {
                    "name": "Read Sync Settings"
                },
                {
                    "name": "Write Sync Settings"
                },
                {
                    "name": "Write Settings"
                },
                {
                    "name": "Receive Boot Completed"
                },
                {
                    "name": "Broadcast Sticky"
                },
                {
                    "name": "Mount/Unmount Filesystems"
                },
                {
                    "name": "Write APN Settings"
                },
                {
                    "name": "Change Network State"
                },
                {
                    "name": "Clear App Cache"
                },
                {
                    "name": "Write Secure Settings"
                },
                {
                    "name": "Read Logs"
                },
                {
                    "name": "Install Packages"
                },
                {
                    "name": "Clear App User Data"
                },
                {
                    "name": "Delete Packages"
                }
            ]
        },
        {
            "name": "permission enforcement",
            "subdomains": [
                {
                    "name": "Contacts"
                },
                {
                    "name": "SMS"
                },
                {
                    "name": "Storage"
                },
                {
                    "name": "Location"
                },
                {
                    "name": "Phone"
                },
                {
                    "name": "Microphone"
                },
                {
                    "name": "Camera"
                },
                {
                    "name": "Write SMS"
                },
                {
                    "name": "Use Credentials"
                },
                {
                    "name": "Internet"
                },
                {
                    "name": "Access Network State"
                },
                {
                    "name": "Access Wifi State"
                },
                {
                    "name": "Change Wifi State"
                },
                {
                    "name": "Bluetooth"
                },
                {
                    "name": "Bluetooth Admin"
                },
                {
                    "name": "Vibrate"
                },
                {
                    "name": "Flashlight"
                },
                {
                    "name": "Wake Lock"
                },
                {
                    "name": "Modify Audio Settings"
                },
                {
                    "name": "Disable Keyguard"
                },
                {
                    "name": "Get Tasks"
                },
                {
                    "name": "Restart Packages"
                },
                {
                    "name": "Install Shortcut"
                },
                {
                    "name": "Read Sync Settings"
                },
                {
                    "name": "Write Sync Settings"
                },
                {
                    "name": "Write Settings"
                },
                {
                    "name": "Receive Boot Completed"
                },
                {
                    "name": "Broadcast Sticky"
                },
                {
                    "name": "Mount/Unmount Filesystems"
                },
                {
                    "name": "Write APN Settings"
                },
                {
                    "name": "Change Network State"
                },
                {
                    "name": "Clear App Cache"
                },
                {
                    "name": "Write Secure Settings"
                },
                {
                    "name": "Read Logs"
                },
                {
                    "name": "Install Packages"
                },
                {
                    "name": "Clear App User Data"
                },
                {
                    "name": "Delete Packages"
                }
            ]
        }
    ],
    "packages": []
};

let attackJson = [];

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
let componentsFull = [];    // same as components but with the full names. used to generate attack data.
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
        let itemFull = [] // same as item but with full component name. used for attack data.
        let itemIDs = []; // item that will be added to componentsDsmID array.
        let itemTypes = []; // item that will be added to componentsType array.
        let xmlDoc = parser.parseFromString(apps[i], "text/xml");
        // first add the app's name.
        let name = xmlDoc.getElementsByTagName("name");
        item.push(name[0].textContent);
        itemFull.push(name[0].textContent);
        itemIDs.push(name[0].textContent);
        itemTypes.push(name[0].textContent);
        // then add the components for that app.
        comps = [];
        comps = xmlDoc.getElementsByTagName("components");
        console.log('components blah blah');
        console.log(comps);
        for (var j = 0; j < comps[0].childNodes.length; j++) {
            if (comps[0].childNodes[j].nodeName === 'component') {
                item.push(comps[0].childNodes[j].childNodes[5].textContent);
                itemFull.push(comps[0].childNodes[j].childNodes[7].textContent);
                itemIDs.push(comps[0].childNodes[j].childNodes[3].textContent);
                itemTypes.push(comps[0].childNodes[j].childNodes[11].textContent);
                // increase component count for each component added.
                numComponents++;
            }
        }
        // add the app's components to the total list of components.
        components.push(item);
        // add the app's components (full name) to list of components with full names.
        componentsFull.push(itemFull);
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

    console.log('p instances');
    console.log(privilegeAttackInstances);
    // build each attack item.
    for (let i = 0; i < privilegeAttackInstances.length; i++) {
        let malApp = privilegeAttackInstances[i].childNodes[1].textContent;
        let malComp = privilegeAttackInstances[i].childNodes[3].textContent;
        let malDsmID = privilegeAttackInstances[i].childNodes[7].textContent;
        let vulApp = privilegeAttackInstances[i].childNodes[9].textContent;
        let vulComp = privilegeAttackInstances[i].childNodes[11].textContent;
        let vulDsmID = privilegeAttackInstances[i].childNodes[15].textContent;
        let resource = privilegeAttackInstances[i].childNodes[19].textContent;
        let resourceDsmID = privilegeAttackInstances[i].childNodes[17].textContent;
        privilegeAttacks.push(['p', malApp, malComp, malDsmID, vulApp, vulComp, vulDsmID, resource, resourceDsmID]);
    }

    // build list of all possible unauthorized intent receipt attacks.
    let unauthAttackInstances = [];
    let unauthAttacks = [];
    unauthAttackInstances = xmlDoc.getElementsByTagName("unauthorizedIntentReceiptInstance");
    
    // build each attack item.
    for (let i = 0; i < unauthAttackInstances.length; i++) {
        let malApp = unauthAttackInstances[i].childNodes[1].textContent;
        let malComp = unauthAttackInstances[i].childNodes[3].textContent;
        let malDsmID = unauthAttackInstances[i].childNodes[7].textContent;
        let vulApp = unauthAttackInstances[i].childNodes[9].textContent;
        let vulComp = unauthAttackInstances[i].childNodes[11].textContent;
        let vulDsmID = unauthAttackInstances[i].childNodes[15].textContent;
        let potApp = unauthAttackInstances[i].childNodes[17].textContent;
        let potComp = unauthAttackInstances[i].childNodes[19].textContent;
        let potCompDsmID = unauthAttackInstances[i].childNodes[23].textContent;
        unauthAttacks.push(['u', malApp, malComp, malDsmID, vulApp, vulComp, vulDsmID, potApp, potComp, potCompDsmID]);
    }

    // build list of all possible intent spoofing attacks.
    let spoofAttackInstances = [];
    let spoofAttacks = [];
    spoofAttackInstances = xmlDoc.getElementsByTagName("intentSpoofingInstance");

    for (let i = 0; i < spoofAttackInstances.length; i++) {
        let malApp = spoofAttackInstances[i].childNodes[1].textContent;
        let malComp = spoofAttackInstances[i].childNodes[3].textContent;
        let malDsmID = spoofAttackInstances[i].childNodes[7].textContent;
        let vulApp = spoofAttackInstances[i].childNodes[9].textContent;
        let vulComp = spoofAttackInstances[i].childNodes[11].textContent;
        let vulDsmID = spoofAttackInstances[i].childNodes[15].textContent;
        let potApp = spoofAttackInstances[i].childNodes[17].textContent;
        let potComp = spoofAttackInstances[i].childNodes[19].textContent;
        let potCompDsmID = spoofAttackInstances[i].childNodes[23].textContent;
        spoofAttacks.push(['s', malApp, malComp, malDsmID, vulApp, vulComp, vulDsmID, potApp, potComp, potCompDsmID]);
    }

    console.log('possible p attacks');
    console.log(privilegeAttacks);
    // go through all of the possible attacks, and see if any of the attacks apply.
    // first do this for privilege attacks.
    for (var i = 0; i < privilegeAttacks.length; i++) {
        // check if both the attacker and the victim of the attack exist in the user's components list.
        // check all of the components in each component item.
        // first check if the attacker exists.
        for (var j = 0; j < componentsFull.length; j++) {
            if (componentsFull[j].includes(privilegeAttacks[i][2])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < componentsFull.length; k++) {
                    if (componentsFull[k].includes(privilegeAttacks[i][5])) {
                        // if both exist, then add to list of attacks.
                        attacks.push(privilegeAttacks[i]);
                    }
                }
                attacks.push(privilegeAttacks[i]);
            }
        }
    }

    // repeat for unauthorized intent receipt and spoofing attacks.
    console.log('componentsFull');
    console.log(componentsFull);
    for (var i = 0; i < unauthAttacks.length; i++) {
        // check if both the attacker and the victim of the attack exist in the user's components list.
        // check all of the components in each component item.
        // first check if the attacker exists.
        for (var j = 0; j < componentsFull.length; j++) {
            if (componentsFull[j].includes(unauthAttacks[i][2])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < componentsFull.length; k++) {
                    if (componentsFull[k].includes(unauthAttacks[i][5])) {
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
        for (var j = 0; j < componentsFull.length; j++) {
            if (componentsFull[j].includes(spoofAttacks[i][2])) {
                // if it does, then check if the victim exists.
                for (var k = 0; k < componentsFull.length; k++) {
                    if (componentsFull[k].includes(spoofAttacks[i][5])) {
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
    // add subdomains to explicit and implicit domains. each subdomain's name is the component's dsmID.
    for (let i = 0; i < componentsDsmID.length; i++) {
        for (let j = 1; j < componentsDsmID[i].length; j++) {
            let ID = componentsDsmID[i][j];
            selectedApps['domains'][0]['subdomains'].push({"name": ID});
            selectedApps['domains'][1]['subdomains'].push({"name":ID});
        }
    }

    // add apps and their components. use csv files to determine and add domain data.
    // first add the apps, aka packages.
    for (let i = 0; i < components.length; i++) {
        let packageName = components[i][0];
        selectedApps['packages'].push({"package": packageName, "components": []});
    }
    // next, add each app's components and accompanying data.
    for (let i = 0; i < components.length; i++) {
        for (let j = 1; j < components[i].length; j++) {
            let componentName = components[i][j];
            let componentDsmID = componentsDsmID[i][j];
            let componentType = componentsType[i][j];
            selectedApps['packages'][i]['components'].push({"component": componentName, "dsm_idx": componentDsmID, "type": componentType, "domain_data":[{"domain": "explicit_domain", "data":[]},{"domain": "implicit_domain", "data": []},{"domain": "permission_granted_domain", "data":[]},{"domain": "permission_usage_domain", "data": []},{"domain": "permission_enforcement_domain", "data": []}]});
        }
    }

    // next, add domain data for each component in every package.
    console.log(csv_explicit);
    console.log(csv_explicit[20][21]);
    console.log(csv_perm_g);
    console.log(selectedApps['packages'][0]['components'].length);
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

        // locate the correct row
        for (let j = 0; j < csv_perm_g.length; j++) {
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
        selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][0]['data'] = 
            selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][0]['data'].concat(exInteractions);
        // then implicit.
        selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][1]['data'] = 
            selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][1]['data'].concat(impInteractions);
        // then permissions fields.
        selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][2]['data'] = 
            selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][2]['data'].concat(permGInteractions);

        selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][3]['data'] = 
            selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][3]['data'].concat(permUInteractions);

        selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][4]['data'] = 
            selectedApps['packages'][packageIndex]['components'][compIndex]['domain_data'][4]['data'].concat(permEInteractions);

        compIndex++;
        if (compIndex === selectedApps['packages'][packageIndex]['components'].length) {
            packageIndex++;
            compIndex = 0;
        }
    }
    
    console.log(selectedApps);

    populateAttacksJSON();
}

function populateAttacksJSON() {
    console.log('attacks');
    console.log(attacks);
    let type, resourceDsmID, resource, potDsmId, potApp, potComp, malApp, malDsmID, malComp, vulApp, vulDsmID, vulComp;
    for (let i = 0; i < attacks.length; i++) {
        let attackObj = {}
        switch(attacks[i][0]) {
            case 'p':
                type = "privilege escalation";
                resourceDsmID = attacks[i][8];
                resource = attacks[i][7];
                break;
            case 's':
                type = "intent spoofing";
                potDsmId = attacks[i][9];
                potApp = attacks[i][7];
                potComp = attacks[i][8];
                break;
            case 'u':
                type = "unauthorized intent receipt";
                potDsmId = attacks[i][9];
                potApp = attacks[i][7];
                potComp = attacks[i][8];
        }
        malApp = attacks[i][1];
        malDsmID = attacks[i][3];
        malComp = attacks[i][2];
        vulApp = attacks[i][4];
        vulDsmID = attacks[i][6];
        vulComp = attacks[i][5];
        
        switch(type) {
            case 'privilege escalation':
                attackObj = {"attack_type": type, "attack_info": {"malicious_app": malApp, "malicious_dsmidx": malDsmID, "malicious_component": malComp, "vulnerable_app": vulApp, "vulnerable_dsmidx": vulDsmID, "vulnerable_component": vulComp, "resource_dsmidx": resourceDsmID, "resource": resource}};
                break;
            case 'intent spoofing':
                attackObj = {"attack_type": type, "attack_info":{"malicious_app": malApp, "malicious_dsmidx": malDsmID, "malicious_component": malComp, "vulnerable_app": vulApp, "vulnerable_dsmidx": vulDsmID, "vulmerable_component": vulComp, "pot_app": potApp, "pot_dsmidx": potDsmId, "pot_component": potComp}};
                break;
            case 'unauthorized intent receipt':
                attackObj = {"attack_type": type, "attack_info":{"malicious_app": malApp, "malicious_dsmidx": malDsmID, "malicious_component": malComp, "vulnerable_app": vulApp, "vulnerable_dsmidx": vulDsmID, "vulmerable_component": vulComp, "pot_app": potApp, "pot_dsmidx": potDsmId, "pot_component": potComp}};
        }
        
        attackJson.push(attackObj);
    }

    console.log(attackJson);
    enable_visualize_button();
}

function enable_visualize_button() {
    // console.log("ALL IS LOADED\n");
    // console.log(selectedApps);

    $visualize_button = $("#visualize_button");

    $visualize_button.attr("disabled", false)
}

$(document).ready( function(){

    $visualize_button = $("#visualize_button");
    // if($visualize_button.attr("data-active", false)) {
    //     $visualize_button.hide();
    // }
    // else {
    //     $visualize_button.show();
    // }

    // renderJsonTable(selectedApps, "example8");
    //
    // render_analysis();
    //
    // add_all_popovers();
});

function visualize() {
    renderJsonTable(selectedApps, "example8");

    render_analysis();

    add_all_popovers();
}

function add_all_popovers() {
    add_package_popovers();
    add_attack_popovers();
    add_permission_popovers();

    //initializes all popovers
    $('[data-toggle="popover"]').popover();
}

function add_package_popovers() {
    //attach popover info to table cells
    selectedApps.packages.forEach( function(the_package) {
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
        selectedApps.packages.forEach(function(the_package) {
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
                selectedApps.domains.forEach(function(domain) {
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

    // let table = JSON.parse(table_json);

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
        .attr("data-dsmidx", rows.component_dsm_idx);

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
    d3.select("tr[data-pkg='" + rows.package + "'][data-cpn='" + rows.component + "']")
        .selectAll("td.g") //g to create a new grouping? and prevent rebinding data to the first two td headers
        .data(rows.data)
        .enter()
        .append("td")
        .attr("data-row", rows.package + "_" + rows.component + "_dsmidx-" + rows.component_dsm_idx)
        .attr("data-col", function(d, i) {
            return rows.domain_classes[i];
        })
        .classed("cell-active", function(data) {
            if(data === 1) {
                return true;
            }
        })
        .classed("cell-notactive", function(data) {
            if(data === 0) {
                return true;
            }
        })
        .attr("data-matrix_value", function(d) { return d; })
}

function create_all_table_headers(div_id, table) {
    let domain_headers = {
        "domains": ["", ""],
        "subdomains": ["Packages", "Components"],
        "colspan": [1, 1]
    };

    // let table = JSON.parse(table_json);

    console.log("My TABLE !!!!!");
    console.log(typeof(table));

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
    console.log("TYPE!!!!");
    console.log(attackJson);
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
