// DOM Element
heightInput = document.getElementById("heightCm")
weightInput = document.getElementById("weightKg")
calculateBtn = document.getElementById("calculate")

// Event click calculate
calculateBtn.addEventListener("click", () => {
    // Get height and weight value from input
    height = heightInput.value
    weight = weightInput.value

    // Calculate bmi
    calculateBmi = weight / Math.pow(height / 100, 2)
})
