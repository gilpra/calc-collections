// DOM Element
const birthDateInput = document.getElementById("birthDate")
const asOfDateInput = document.getElementById("asOfDate")
const calculateBtn = document.getElementById("calculate")

const yearsResult = document.getElementById("yearsResult")
const monthsResult = document.getElementById("monthsResult")
const daysResult = document.getElementById("daysResult")
const totalDaysResult = document.getElementById("totalDaysResult")

// Set today date in Calculate at on input
let todayDate = new Date()
asOfDateInput.value = todayDate.toISOString().slice(0, 10)

// Event click for calculate age button
calculateBtn.addEventListener("click", () => {

    // Get date value for birth date and as of date
    birthDate = new Date(birthDateInput.value)
    asOfDate = new Date(asOfDateInput.value)

    // Variable
    let remain = 0
    let msToDay = 24 * 60 * 60 * 1000

    // Get different date
    let diffDate = asOfDate.getTime() - birthDate.getTime()
    let totalDay = Math.floor(diffDate / msToDay)

    // Get year from diff
    let year = Math.floor(diffDate / (365 * msToDay))
    remain = diffDate % (365 * msToDay)

    // Get month from diff
    let month = Math.floor(remain / (30 * msToDay))
    remain = remain % (30 * msToDay)

    // Get day from diff
    let day = Math.floor(remain / msToDay)

    yearsResult.textContent = year
    monthsResult.textContent = month
    daysResult.textContent = day
    totalDaysResult.textContent = totalDay
})
