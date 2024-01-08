const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialchars = ["%", "*", "/", "+", "-", "+", "."]
let output = "";
// console.log(display, buttons)
const calculate = (btnValue) =>{
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1)
    }else{
        if(output === "" && specialchars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}


buttons.forEach((button) => {
    // button.addEventListener("click", (e) => console.log(e.target.dataset.value));
     button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})