"use strict";


const [prevNumOutput, currentNumOutput] = document.getElementsByClassName("calculator__field");
const [inputPanel] = document.getElementsByClassName("calculator__input");

let currentNumber = "";
let prevNumber = "";
let operation = "";

const changePrevNumberOutput = () => {
    prevNumOutput.setAttribute("value", (currentNumber + " " + operation + " "));
    prevNumber = currentNumber;
    currentNumber = "";
    currentNumOutput.setAttribute("value", "");
}

const processResult = (num, precision = 3) => {
    let res = num;
    let isNegative = false;
    let multiplier = Math.pow(10, precision);
    if (num < 0) {
        isNegative = true;
        num *= -1;
    }

    res = Math.round(res * multiplier);
    res /= multiplier;
    if (isNegative) {
        num *= -1;
    }

    return String(res);
}

inputPanel.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("calculator__input")) {
        if (target.classList.contains("calculator__action-button")) {
            switch (target.innerText) {
                case "CE":
                    currentNumber = "";
                    currentNumOutput.setAttribute("value", currentNumber);
                    break;
                case "C":
                    currentNumber = "";
                    prevNumOutput.setAttribute("value", "");
                    currentNumOutput.setAttribute("value", "");
                    break;
                case "*":
                    if (currentNumber != "") {
                        operation = "*";
                        changePrevNumberOutput();
                    }
                    break;
                case "/":
                    if (currentNumber != "") {
                        operation = "/";
                        changePrevNumberOutput();
                    }
                    break;
                case "-":
                    if (currentNumber != "") {
                        operation = "-";
                        changePrevNumberOutput();
                    }
                    break;
                case "+":
                    if (currentNumber != "") {
                        operation = "+";
                        changePrevNumberOutput();
                    }
                    break;
                case "=":
                    if (currentNumber != "" && prevNumber != "") {
                        let res = "";
                        switch (operation) {
                            case "*":
                                res = processResult(Number(prevNumber) * Number(currentNumber));
                                break;
                            case "/":
                                if (currentNumber == 0) {
                                    res = "Div. by 0";
                                } else {
                                    res = processResult(Number(prevNumber) / Number(currentNumber), 5);
                                }
                                break;
                            case "-":
                                res = processResult(Number(prevNumber) - Number(currentNumber));
                                break;
                            case "+":
                                res = processResult(Number(prevNumber) + Number(currentNumber));
                                break;
                        }
                        prevNumOutput.setAttribute("value", (prevNumOutput.getAttribute("value") + currentNumber + " ="));
                        currentNumOutput.setAttribute("value", res);
                        prevNumber = "";
                        currentNumber = "";
                        operation = "";
                    }
                    break;
            }
        } else {
            currentNumber += target.innerText;
            currentNumOutput.setAttribute("value", currentNumber);
        }
    }
});
