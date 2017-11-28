var table = {
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
}