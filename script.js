function calculateBMI() {
    // Get input values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let heightUnit = document.querySelector('input[name="height-unit"]:checked').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height.');
        return;
    }

    // Convert height to meters if in feet
    if (heightUnit === 'feet') {
        height *= 0.3048; // 1 foot = 0.3048 meters
    }

    // Calculate BMI based on gender
    let bmi;
    if (gender === 'male') {
        bmi = calculateMaleBMI(weight, height);
    } else if (gender === 'female') {
        bmi = calculateFemaleBMI(weight, height);
    }

    // Round BMI to 1 decimal place
    bmi = bmi.toFixed(1);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is <strong>${bmi}</strong>.<br>Category: <strong>${category}</strong>`;
}

function calculateMaleBMI(weight, height) {
    return weight / (height * height);
}

function calculateFemaleBMI(weight, height) {
    return weight / (height * height) + 0.1;
}
