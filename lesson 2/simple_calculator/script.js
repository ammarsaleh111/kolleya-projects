const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Only allow numbers and basic calculator operators.
        if (!/^[0-9+*/.()\- ]+$/.test(display.value)) {
            throw new Error("Invalid input");
        }

        display.value = Function('"use strict"; return (' + display.value + ')')();
        if (!Number.isFinite(Number(display.value))) {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}
