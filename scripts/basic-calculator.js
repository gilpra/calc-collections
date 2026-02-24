const calculatorKeys = document.querySelectorAll(".calculator-key")
const resultOutput = document.getElementById("result")

let isOperator = false

calculatorKeys.forEach(calculatorKey => {
    calculatorKey.addEventListener("click", (key) => {
        key = key.target
        keyValue = key.getAttribute("data-value")
        resultContent = resultOutput.textContent

        if (keyValue) {

            if (key.classList.contains("operator")) {
                if (resultContent === "0") return

                if (isOperator) {
                    resultOutput.textContent = resultContent.slice(0, -1) + keyValue;
                    return
                }

                resultOutput.textContent += keyValue
                isOperator = true
                return
            }

            if (resultContent === "0") {
                resultOutput.textContent = keyValue
                return
            }

            resultOutput.textContent += keyValue
            isOperator = false
        }
    })
});
