// DOM Element
const calculatorKeys = document.querySelectorAll(".calculator-key")
const resultOutput = document.getElementById("result")

// Variabel
let isOperator = false
let isDecimal = false

// Looping for all calculator key
calculatorKeys.forEach(calculatorKey => {

    // Add event click for all calculator key
    calculatorKey.addEventListener("click", (key) => {

        key = key.target
        keyValue = key.getAttribute("data-value")
        resultContent = resultOutput.textContent

        // Check if click key has attributte data-value
        if (keyValue) {

            // Check if click . key
            if (keyValue === ".") {
                // Cek if last character output not operator
                if (isOperator) return
                // Cek if last character output not .
                if (isDecimal) return

                // Add decimal/. to ouput
                resultOutput.textContent += keyValue
                isDecimal = true
                return
            }

            // Check if click key has operator class
            if (key.classList.contains("operator")) {

                // Check if output only 0
                if (resultContent === "0") return
                
                isDecimal = false

                // Check if last character operator and replace it
                if (isOperator) {
                    resultOutput.textContent = resultContent.slice(0, -1) + keyValue;
                    return
                }

                // Add operator to output
                resultOutput.textContent += keyValue
                isOperator = true
                return
            }

            // Replace 0 to number input
            if (resultContent === "0") {
                resultOutput.textContent = keyValue
                return
            }

            // Add number to output
            resultOutput.textContent += keyValue
            isOperator = false
        }
    })
});
