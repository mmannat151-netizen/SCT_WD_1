function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
        return;
    }

    // Convert input to Celsius
    let celsius;

    switch (from) {
        case "C":
            celsius = temp;
            break;

        case "F":
            celsius = (temp - 32) * 5 / 9;
            break;

        case "K":
            celsius = temp - 273.15;
            break;
    }

    // Convert Celsius to target unit
    switch (to) {

        case "C":
            result = celsius;
            break;

        case "F":
            result = (celsius * 9 / 5) + 32;
            break;

        case "K":
            result = celsius + 273.15;
            break;
    }

    document.getElementById("result").innerHTML =
        `Result: ${result.toFixed(2)} °${to === "K" ? "K" : to}`;
}