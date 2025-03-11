document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Convert weight to kg if necessary
    let weightInKg = weight;
    if (weightUnit === 'lbs') {
        weightInKg = weight * 0.453592; // Convert lbs to kg
    }

    // Convert height to meters if necessary
    let heightInMeters = height;
    if (heightUnit === 'ft') {
        heightInMeters = height * 0.3048; // Convert ft to meters
    }

    // Calculate BMI
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine BMI category (with optional gender-based insights)
    let category = '';
    if (gender === 'male') {
        if (bmi < 18.5) {
            category = 'Underweight (Male)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight (Male)';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight (Male)';
        } else {
            category = 'Obesity (Male)';
        }
    } else if (gender === 'female') {
        if (bmi < 18.5) {
            category = 'Underweight (Female)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight (Female)';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight (Female)';
        } else {
            category = 'Obesity (Female)';
        }
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
});