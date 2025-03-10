<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
</head>
<body>
    <h1>Random Number Generator</h1>
    <label for="min">Enter Minimum Value:</label>
    <input type="number" id="min" placeholder="Min"><br><br>
    <label for="max">Enter Maximum Value:</label>
    <input type="number" id="max" placeholder="Max"><br><br>
    <button onclick="generateRandomNumber()">Generate Random Number</button>
    <h2 id="result"></h2>

    <script>
        function generateRandomNumber() {
            const min = parseInt(document.getElementById('min').value);
            const max = parseInt(document.getElementById('max').value);

            if (isNaN(min) || isNaN(max)) {
                document.getElementById('result').innerText = "Please enter valid numbers.";
                return;
            }

            if (min > max) {
                document.getElementById('result').innerText = "Minimum value cannot be greater than Maximum value.";
                return;
            }

            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result').innerText = `Random Number: ${randomNumber}`;
        }
    </script>
</body>
</html>
