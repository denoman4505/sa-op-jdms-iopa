let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let serverSettings = Schema({
    guildID: {
        type: String,
        default: "931205053207953448"
    },
    WARNID: {
        type: Number,
        default: 0
    },
	Etkinlik: {
		type: Boolean,
		default: 0
	},
    TAG: {
        type: String,
        default: "933072903971405867"
    },
    TAG2: {
        type: String,
        default: ""
    },
    LINK: {
        type: String,
        default: "balendin"
    },
    GKV: {
        type: Array,
        default: ["917303652325150741"]
    },
    GRV: {
        type: Array,
        default: ["917303652325150741"]
    },
    BAN_TAG: {
        type: Array,
        default: ["933072916260749333"]
    },

    // Channel Settings


    CHAT: {
        type: String,
        default: "933072899156361256"
    },
    REGISTER: {
        type: String,
        default: "933072874338672740"
    },
    TAGLOG: {
        type: String,
        default: "933072977661153301"
    },
    RULES: {
        type: String,
        default: "933072878642003979"
    },
    SLEEP: {
        type: String,
        default: "933072933176356924"
    },
    PUBCategory: {
        type: Array,
        default: ["933072865031512064"]
    },

    // Roles Settings

    VKAuthor: {
        type: String,
        default: "933072946140954684"
    },
    UNREGISTER: {
        type: Array,
        default: ["933072924129234965"]
    },
    MAN: {
        type: Array,
        default: ["933072922606718987","933072923131011093","933072923613351936"]
    },
    WOMAN: {
        type: Array,
        default: ["933072920736059472","933072921201614868","933072922023702600"]
    },
    TEAM: {
        type: String,
        default: "933072903971405867"
    },
    BOOST: {
        type: String,
        default: "931205672962514986"
    },
    JAIL: {
        type: String,
        default: "933072915593842808"
    },
    REKLAM: {
        type: String,
        default: "933072915593842808"
    },
    SUPHELI: {
        type: String,
        default: "933072916529168425"
    },
    BANTAG: {
        type: String,
        default: "933072916260749333"
    },
    MUTED: {
        type: String,
        default: "848794446245789745"
    },
    VMUTED: {
        type: String,
        default: "848794446245789744"
    },

    // Author Roles Settings

    MUTEAuthorized: {
        type: Array,
        default: ["933072896673341521"]
    },
    VMUTEAuthorized: {
        type: Array,
        default: ["933072896232931329"]
    },
    JAILAuthorized: {
        type: Array,
        default: ["933072894739755038"]
    },
    REKLAMAuthorized: {
        type: Array,
        default: ["933072894739755038"]
    },
    BANAuthorized: {
        type: Array,
        default: ["933072894249021481"]
    },
    WARNAuthorized: {
        type: Array,
        default: []
    },
    REGISTERAuthorized: {
        type: Array,
        default: ["933072898497867806","933072897797402694"]
    },
    COMMANDAuthorized: {
        type: Array,
        default: ["933072898497867806"]
    },
    EnAltYetkiliRol: {
        type: String,
        default: "933072884627279883"
    },
    UstYetkiliRol: {
        type: Array,
        default: ["933072883280928839"]
    }, // 3 YETKİLİ ROL 
    Ust1YetkiliRol: {
        type: String,
        default: "933072882991505469"
    }, // 1. YETKİLİ ROL
    Ust2YetkiliRol: {
        type: String,
        default: "933072882295255050"
    }, // 2. YETKİLİ ROL
    Ust3YetkiliRol: {
        type: String,
        default: "933072882295255050"
    }, // 3. YETKİLİ ROL
    VKCEZALI: {
        type: String,
        default: "933072946828836904"
    },
    DCCEZALI: {
        type: String,
        default: ""
    },
    STCEZALI: {
        type: String,
        default: "933072948166787082"
    },

    // Limit System

    BANLimit: {
        type: Number,
        default: 2
    },
    JAILLimit: {
        type: Number,
        default: 3
    },
    REKLAMLimit: {
        type: Number,
        default: 5
    },
    MUTELimit: {
        type: Number,
        default: 5
    },
    VMuteLimit: {
        type: Number,
        default: 5
    },

    // Logging System

    INVITEChannel: {
        type: String,
        default: "933072979556986900"
    },

    MUTEChannel: {
        type: String,
        default: "933072884677632070"
    },
    VMUTEChannel: {
        type: String,
        default: "933072886011416626"
    },
    BANChannel: {
        type: String,
        default: "933072885369684040"
    },
    JAILChannel: {
        type: String,
        default: "933072886787350528"
    },
    WARNChannel: {
        type: String,
        default: ""
    },
    REKLAMChannel: {
        type: String,
        default: "933072974687371405"
    },

    REGISTERChannel: {
        type: String,
        default: "933072874338672740"
    },
    NAMEChannel: {
        type: String,
        default: "933072871352336474"
    },
    CHATChannel: {
        type: String,
        default: "933072899156361256"
    },
    ROLEChannel: {
        type: String,
        default: "933072871817900133"
    },
    PINGChannel: {
        type: String,
        default: "933072870869991444"
    },
    COMMANDChannel: {
        type: String,
        default: "933072870869991444"
    },
    VOICEChannel: {
        type: String,
        default: "933072903702970378"
    },
    LEVELChannel: {
        type: String,
        default: "933072884023328778"
    },
    GUARDChannel: {
        type: String,
        default: "933072990403461190"
    }
})

module.exports = mongoose.model("setup", serverSettings);