/* Table JSON */
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
            "name": "permission_granted",
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
            "name": "permission_usage",
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
                            "domain": "permission_granted",
                            "data": [0, 0, 1]
                        },
                        {
                            "domain": "permission_usage",
                            "data": [0, 0, 1]
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
                            "domain": "permission_granted",
                            "data": [0, 1, 0]
                        },
                        {
                            "domain": "permission_usage",
                            "data": [0, 0, 0]
                        }
                    ]
                }
            ]
        }
    ]
};

/*
Working copy of generated JSON
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
    ]
};

/*
Analysis result JSON v1
 */


var analysisJson = [
    {
        "attack_type": "privilege_escalation",
        "attack_info": {
            "malicious_dsmidx": 0,
            "malicious_component": "LevelUp",
            "vulnerable_dsmidx": 4,
            "vulnerable_component": "Sender",
            "resource_dsmidx": 6,
            "resource": "SMS"
        }
    }//,
    // {
    //     "attack_type": "intent_spoofing",
    //     "attack_info": {
    //         "malicious_dsmidx": 0,
    //         "malicious_component": "LevelUp",
    //         "vulnerable_dsmidx": 4,
    //         "vulnerable_component": "Sender",
    //         "resource_dsmidx": 6,
    //         "resource": "SMS"
    //     }
    // },
    // {
    //     "attack_type": "unauthorized_intent_receipt",
    //     "attack_info": {
    //         "malicious_dsmidx": 0,
    //         "malicious_component": "LevelUp",
    //         "vulnerable_dsmidx": 4,
    //         "vulnerable_component": "Sender",
    //         "resource_dsmidx": 6,
    //         "resource": "SMS"
    //     }
    // }
];