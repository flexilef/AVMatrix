/* Old JSON */
var tableJSON2 = {
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
    "packages": [
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

/* New JSON */
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