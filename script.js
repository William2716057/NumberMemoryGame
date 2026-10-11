function getNumberElement(containerId) {
    var el = document.getElementById(containerId);
    if (!el) {
        throw new Error('Element with id "' + containerId + '" not found.');
    }
    return el;
}

var PREFIXES = ["021", "022", "027"];

function mobileNumbers(value, options) {
    if (!/^02[127]\d{4}$/.test(value)) {
        throw new Error("Value must be 021, 022 or 027 followed by four digits."); //change here
    }
    var el = getNumberElement(options.containerId);
    el.textContent = value;
    el.style.opacity = "1";

    window.setTimeout(function () {
        el.style.opacity = "0";
    }, options.durationMs);
}

function showNumber(value, options) {
    if (value < 100 || value > 999) {
        throw new Error("Value must be a 3-digit number (100–999)."); //not needed
    }
    var el = getNumberElement(options.containerId);
    el.textContent = value.toString();
    el.style.opacity = "1";

    window.setTimeout(function () {
        el.style.opacity = "0";
    }, options.durationMs);
}

window.addEventListener("DOMContentLoaded", function () {
    var randomThreeDigit = Math.floor(Math.random() * 900) + 100;
    showNumber(randomThreeDigit, { durationMs: 3000, containerId: "number-display" });
    //mobileNumbers(randomThreeDigit, { durationMs: 3000, containerId: "number-display" });
    //mobileNumbers(randomThreeDigit(), { durationMs: 3000, containerId: "number-display" });
});