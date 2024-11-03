function appendDisplay(value) {
    const displayText = document.getElementById("displayText");
    displayText.value += value;
}

function clearDisplay() {
    document.getElementById("displayText").value = "";
    document.getElementById("lblOutput").innerHTML = "Calculation";
}

function calc() {
    const displayText = document.getElementById("displayText").value;
    const lblOutput = document.getElementById("lblOutput");
    try {
        const result = eval(displayText);
        lblOutput.innerHTML = isNaN(result) ? "Invalid Expression" : result;
    } catch {
        lblOutput.innerHTML = "Error";
    }
}