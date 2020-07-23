/* 
Calculator features:
1. AC
2. %
3. divided by
4. multiply by
5. minus
6. plus
7. equal-sign
8. decimal

calculator require 3 variables:
number + operator + number

currentNumber is the one displayed on the UI.
*/

// business logic: operator

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        lastValue = currentNumber.split('').pop()
        if (lastValue.includes('+') || lastValue.includes('-') || lastValue.includes('*') || lastValue.includes('/') || lastValue.includes('.')) {
            return
        } else {
            currentNumber += event.target.value
            updateScreen(currentNumber)
        }
    })
})

// business logic: equal-sign -> calculate

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculatefromScreen()
})

const calculatefromScreen = () => {
    /// sanitize the string other than digits, /, *, -, +, x, %, (), decimal
    currentNumber = currentNumber.replace(/[^\d/*+x%()-.]/g, '')

    currentNumber = currentNumber.replace(/x/g, "*")
    currentNumber = currentNumber.replace(/%/g, "/100")
    currentNumber = eval(currentNumber)
    updateScreen(currentNumber)
}

// business logic: all-clear

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    currentNumber = '0'
}

// business logic: main

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else if (typeof currentNumber === "number") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

calculatorScreen.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        calculatefromScreen()
    } else {
        currentNumber = event.target.value
    }
})