const calculatorKeys = document.querySelectorAll(".calculator-key")
const resultOutput = document.getElementById("result")

calculatorKeys.forEach(calculatorKey => {
    calculatorKey.addEventListener("click", (key) => {
        key = key.target
        keyValue = key.getAttribute("data-value")

        if (keyValue) {
            resultOutput.textContent += keyValue
        }
    })
});
