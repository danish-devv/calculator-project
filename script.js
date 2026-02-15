let btns = document.querySelectorAll("button");
let display = document.querySelector("#main-input");
let string = "";

let buttons = Array.from(btns);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      // string=string.substring(0,string.length-1)
      display.value = string;
    } else if (e.target.innerHTML == "clr") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerText;
      display.value = string;
    }
  });
});
