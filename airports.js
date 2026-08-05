// airports.js
// This is the ONLY file you edit.

const airports = [

    {
        name: "Larnaca",
        icao: "LCLK",

        departures: [
            "https://files.catbox.moe/i69h5h.png",
            "https://files.catbox.moe/dhybnk.png",
            "none"
        ],

        arrivals: [
            "https://files.catbox.moe/fg41b7.png",
            "https://files.catbox.moe/v52r11.png",
            "none"
        ],

        taxi_charts: [
            "https://files.catbox.moe/4il3wv.png",
            "none",
            "none"
        ],

        gate_charts: [
            "https://files.catbox.moe/ma992i.png",
            "https://files.catbox.moe/xqr18b.png",
            "none"
        ],

        taxi_gate_same: "n"
    },

    {
        name: "Paphos",
        icao: "LCPH",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/h3anuv.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/3afyi2.png", "none", "none"],

        taxi_gate_same: "n"
    },

    {
        name: "RAF Akrotiri",
        icao: "LCRA",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/zxwmhj.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/zxwmhj.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Arroyo Barril",
        icao: "MDAB",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/we99rh.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/we99rh.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Cabo Rojo",
        icao: "MDCR",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/16re7a.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/16re7a.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Cibao",
        icao: "MDST",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/bos5p0.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/bos5p0.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Punta Cana",
        icao: "MDPC",

        departures: ["https://files.catbox.moe/ro6rlv.png", "https://files.catbox.moe/rhlru0.png", "none"],
        arrivals: ["https://files.catbox.moe/rykj1k.png", "https://files.catbox.moe/jjc2s2.png", "https://files.catbox.moe/mbkfz7.png"],

        taxi_charts: ["https://files.catbox.moe/q5kodn.jpg", "none", "none"],
        gate_charts: ["https://files.catbox.moe/mvvo4q.jpg", "none", "none"],

        taxi_gate_same: "n"
    },

    {
        name: "Kittilä",
        icao: "EFKT",

        departures: ["https://files.catbox.moe/qv8bwt.png", "none", "none"],
        arrivals: ["https://files.catbox.moe/ltcq6k.png", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/wete7s.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/wete7s.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Antoine-Simon",
        icao: "MTCA",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/uymdyf.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/uymdyf.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Gran Canaria",
        icao: "GCLP",

        departures: ["https://files.catbox.moe/d5oyq1.jpg", "https://files.catbox.moe/9cip84.jpg", "https://files.catbox.moe/raxts5.jpg"],
        arrivals: ["https://files.catbox.moe/3bln8y.jpg", "https://files.catbox.moe/7uqp2h.jpg", "https://files.catbox.moe/mj89ww.jpg"],

        taxi_charts: ["https://files.catbox.moe/xeackp.jpg", "none", "none"],
        gate_charts: ["https://files.catbox.moe/xeackp.jpg", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Menorca",
        icao: "LEMH",

        departures: ["https://files.catbox.moe/54y8i8.png", "none", "none"],
        arrivals: ["https://files.catbox.moe/csswxb.png", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/y0p5ia.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/y0p5ia.png", "none", "none"],

        taxi_gate_same: "y"
    },

    {
        name: "Gatwick",
        icao: "EGKK",

        departures: ["https://files.catbox.moe/ex6cp4.jpg", "https://files.catbox.moe/rfx7j7.jpg", "https://files.catbox.moe/jxpe3c.jpg"],
        arrivals: ["https://files.catbox.moe/ukldnv.jpg", "https://files.catbox.moe/ts484z.jpg", "none"],

        taxi_charts: ["https://files.catbox.moe/0hgwe6.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/n5fxol.jpg", "none", "none"],

        taxi_gate_same: "n"
    },

    {
        name: "Southampton",
        icao: "EGHI",

        departures: ["none", "none", "none"],
        arrivals: ["none", "none", "none"],

        taxi_charts: ["https://files.catbox.moe/swga44.png", "none", "none"],
        gate_charts: ["https://files.catbox.moe/swga44.png", "none", "none"],

        taxi_gate_same: "y"
    }

];
