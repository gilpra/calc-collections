// DOM Element
heightInput = document.getElementById("heightCm")
weightInput = document.getElementById("weightKg")
calculateBtn = document.getElementById("calculate")

bmiResult = document.getElementById("bmiResult")
bmiCategory = document.getElementById("bmiCategory")

// Event click calculate
calculateBtn.addEventListener("click", () => {
    // Get height and weight value from input
    let height = heightInput.value
    let weight = weightInput.value

    // Calculate bmi
    let calculateBmi = weight / Math.pow(height / 100, 2)

    // Set category bmi
    let category = ""
    if (calculateBmi < 18.5) {
        category = "Underweight weight"
    } else if (calculateBmi > 18.5 && calculateBmi < 25.0) {
        category = "Normal weight"
    } else if (calculateBmi > 25.0 && calculateBmi < 30.0) {
        category = "Overweight weight"
    } else if (calculateBmi > 30.0) {
        category = "Obese weight"
    }

    // Display result
    bmiResult.textContent = calculateBmi.toFixed(1)
    bmiCategory.textContent = category
})
