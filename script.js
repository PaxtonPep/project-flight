// script.js

window.onload = () => {
    loadAirportDropdown();
};

function loadAirportDropdown() {
    const select = document.getElementById("airportSelect");
    select.innerHTML = "";

    airports.forEach(ap => {
        const opt = document.createElement("option");
        opt.value = ap.icao;
        opt.textContent = `${ap.name} (${ap.icao})`;
        select.appendChild(opt);
    });

    select.onchange = loadChartDropdown;
    loadChartDropdown();
}

function loadChartDropdown() {
    const airport = airports.find(a => a.icao === document.getElementById("airportSelect").value);
    const chartSelect = document.getElementById("chartSelect");
    chartSelect.innerHTML = "";

    const addOption = (label, value) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        chartSelect.appendChild(opt);
    };

    // Departures
    airport.departures.forEach((link, i) => {
        if (link !== "none") {
            addOption(`Departure Chart ${i + 1}`, `dep_${i}`);
        }
    });

    // Arrivals
    airport.arrivals.forEach((link, i) => {
        if (link !== "none") {
            addOption(`Arrival Chart ${i + 1}`, `arr_${i}`);
        }
    });

    // Taxi/Gate
    if (airport.taxi_gate_same === "y") {
        airport.taxi_charts.forEach((link, i) => {
            if (link !== "none") {
                addOption(`Gate/Taxi Chart ${i + 1}`, `taxi_${i}`);
            }
        });
    } else {
        airport.taxi_charts.forEach((link, i) => {
            if (link !== "none") {
                addOption(`Taxi Chart ${i + 1}`, `taxi_${i}`);
            }
        });

        airport.gate_charts.forEach((link, i) => {
            if (link !== "none") {
                addOption(`Gate Chart ${i + 1}`, `gate_${i}`);
            }
        });
    }

    chartSelect.onchange = loadImages;
    loadImages();
}

function loadImages() {
    const airport = airports.find(a => a.icao === document.getElementById("airportSelect").value);
    const chartType = document.getElementById("chartSelect").value;
    const container = document.getElementById("imageContainer");

    container.innerHTML = "";

    let link = "";

    if (chartType.startsWith("dep_")) {
        link = airport.departures[parseInt(chartType.split("_")[1])];
    } else if (chartType.startsWith("arr_")) {
        link = airport.arrivals[parseInt(chartType.split("_")[1])];
    } else if (chartType.startsWith("taxi_")) {
        link = airport.taxi_charts[parseInt(chartType.split("_")[1])];
    } else if (chartType.startsWith("gate_")) {
        link = airport.gate_charts[parseInt(chartType.split("_")[1])];
    }

    if (link === "none") return;

    const box = document.createElement("div");
    box.className = "imgBox";

    const img = document.createElement("img");
    img.src = link === "insert image link" ? "" : link;
    img.alt = link;
    box.appendChild(img);

    const btn = document.createElement("button");
    btn.textContent = "Hide";
    btn.onclick = () => box.remove();
    box.appendChild(btn);

    container.appendChild(box);
}
