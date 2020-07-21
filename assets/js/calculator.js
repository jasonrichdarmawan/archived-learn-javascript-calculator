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

// business logic: main

const numbers = document.querySelectorAll(".number")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// business logic: operator

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    else if (calculationOperator != '') {
        calculate()
        updateScreen(currentNumber)
        prevNumber = currentNumber
        calculationOperator = ''
    }
    calculationOperator = operator
    currentNumber = '0'
}

// business logic: equal-sign -> calculate

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    if (calculationOperator != '') {
        calculate()
        updateScreen(currentNumber)
        console.log(typeof currentNumber)
    }
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

// business logic: percentage

const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', (event) => {
    calculatePercentage()
    updateScreen(currentNumber)
})

calculatePercentage = (percentage) => {
    let result = ''
    currentNumber /= 100
}

// business logic: all-clear

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// business logic: decimal

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (typeof currentNumber != "string") {
        currentNumber = currentNumber.toString()
    }
    if (currentNumber.includes('.')) {
        return
    } else {
        currentNumber += dot
    }
}

// main

const calculatorScreen = document.querySelector('.calculator-screen')

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}