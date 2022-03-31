const calculatorScreen = document.querySelector('.calculator-Screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let equalPressed = 0;

const inputNumber = (number) => {
    if (currentNumber === '0' || currentNumber === "") {
        currentNumber = number
    } 
    // else if (equalPressed == 1) {
    //     currentNumber = number
    //     equalPressed = 0
    // } 
    else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll (".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    // prevNumber = currentNumber
    // calculationOperator = operator
    // currentNumber = ''
    if(calculationOperator === '') {
        prevNumber = currentNumber
    } else if (currentNumber = number) {
        currentNumber = operator
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-Sign')

equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    // equalPressed = 1;
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
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
        case "%":
            result = prevNumber % currentNumber
        default:
            break
    }
    currentNumber = result
    calculationOperator =''
}

const clearBtn = document.querySelector('.all-Clear')

clearBtn.addEventListener('click', () => {
    // console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const erase = document.querySelector('.erase')

erase.addEventListener("click", () => {
    currentNumber=currentNumber.slice(0, -1)
    updateScreen(currentNumber)
})