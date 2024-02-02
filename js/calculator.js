"use strict";
// TODO: set initial value as 0

const [stringNumOutput, currentNumOutput] = document.getElementsByClassName("calculator__field");

const [inputPanel] = document.getElementsByClassName("calculator__input");

let currentNumber = "";
let prevNumber = "";
let operation = "";

inputPanel.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("calculator__input")) {
        if (target.classList.contains("calculator__action-button")) {
            const currentFieldText = stringNumOutput.getAttribute("value");

            switch (target.innerText) {
                case "CE":
                    currentNumber = "";
                    currentNumOutput.setAttribute("value", currentNumber);
                    break;
                case "C":
                    currentNumber = "";
                    stringNumOutput.setAttribute("value", "");
                    currentNumOutput.setAttribute("value", "");
                    break;
                case "*":
                    operation = "*";
                    stringNumOutput.setAttribute("value", (currentNumber + " " + operation + " "));
                    prevNumber = currentNumber;
                    currentNumber = "";
                    break;
                case "/":
                    operation = "/";
                    stringNumOutput.setAttribute("value", (currentNumber + " " + operation + " "));
                    prevNumber = currentNumber;
                    currentNumber = "";
                    break;
                case "-":
                    operation = "-";
                    stringNumOutput.setAttribute("value", (currentNumber + " " + operation + " "));
                    prevNumber = currentNumber;
                    currentNumber = "";
                    break;
                case "+":
                    operation = "+";
                    stringNumOutput.setAttribute("value", (currentNumber + " " + operation + " "));
                    prevNumber = currentNumber;
                    currentNumber = "";
                    break;
                case "=":
                    let res = "";
                    switch (operation) {
                        case "*":
                            res = String(Number(currentNumber) * Number(prevNumber));
                            break;
                        case "/":
                            res = String(Number(currentNumber) / Number(prevNumber));
                            break;
                        case "-":
                            res = String(Number(currentNumber) - Number(prevNumber));
                            break;
                        case "+":
                            res = String(Number(currentNumber) + Number(prevNumber));
                            break;
                        default:
                            res = "ОШИБКА";
                    }
                    stringNumOutput.setAttribute("value", (stringNumOutput.getAttribute("value") + currentNumber + " ="));
                    currentNumOutput.setAttribute("value", res);
                    break;
                default:
                    currentNumber += target.innerText;
                    currentNumOutput.setAttribute("value", currentNumber);
            }
        } else {
            currentNumber += target.innerText;
            currentNumOutput.setAttribute("value", currentNumber);
        }
    }
});
