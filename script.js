//DOM buttons
const nums = document.querySelector('.nums');

for (let i=9; i>=0; i--) {
    let btn = document.createElement("BUTTON")
    btn.textContent=`${i}`;
    nums.appendChild(btn);
}
let decBtn = document.createElement("BUTTON");
decBtn.textContent=".";
nums.appendChild(decBtn);

let acBtn = document.createElement("BUTTON");
acBtn.textContent="AC";
nums.appendChild(acBtn);


//operative logic
function add(num1,num2) {
    return Number(num1)+Number(num2);
}
function subtract(num1,num2) {
    return num1-num2;
}
function product(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    return num1/num2;
}


function operate(operation,num1,num2) {
    if (operation=="+") {
        return add(num1,num2);
    }
    else if (operation=="-") {
        return subtract(num1,num2);
    }
    else if (operation=="*") {
        return product(num1,num2);
    }
    else if (operation=="/") {
        return divide(num1,num2);
    }
}

//DOM operations
const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('BUTTON');
const history = document.querySelector('.history');
const currNum = document.querySelector('.currNumber');

//Logic for correct inputs
let num1 = "";
let num2 = "";
let ops = "";
let result;

function input(text) {
    if (ops == "") {
        if (!isNaN(text)) {
            num1+=text;
            currNum.textContent=num1;
        }
        else if (text == "AC") {
            window.location.reload();
        }
        else {
            if (text==".") {
                num1+=text;
                currNum.textContent=num1;
            }
            else {
                ops=text;
                history.textContent=`${num1}${ops}`;
                currNum.textContent="";
            }
        };
    }
    else {
        if (!isNaN(text)) {
            num2+=text;
            currNum.textContent=num2;
        }
        else if (text == "AC") {
            window.location.reload();
        }
        else {
            if (text==".") {
                num2+=text;
                currNum.textContent=num2;
            }
            else if (text=="=") {
                if (ops == "") {
                    currNum.textContent=num1;
                }
                else {
                    result=operate(ops,num1,num2);
                    history.textContent=`${num1}${ops}${num2}`
                    currNum.textContent=result;
                    num1 = "";
                    num2 = "";
                }
            }
            else {
                result=operate(ops,num1,num2);
                currNum.textContent="";
                num1=result;
                ops=text;
                history.textContent=`${result}${ops}`
                num2="";

            }
        };
    }
}


//Adding event listeners
btns.forEach(button => {
    button.addEventListener('click',  () => {
        input(button.textContent);
      })
})