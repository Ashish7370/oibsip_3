document.getElementById('convert-btn').addEventListener('click', function() {
    let temp = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let result;

    if (unit === 'F') {
        // Convert Fahrenheit to Celsius
        result = (temp - 32) * 5 / 9;
        document.getElementById('result').value = result.toFixed(4) + ' °C';
    } else {
        // Convert Celsius to Fahrenheit
        result = (temp * 9 / 5) + 32;
        document.getElementById('result').value = result.toFixed(4) + ' °F';
    }
});