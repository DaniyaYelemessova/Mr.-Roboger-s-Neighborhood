// Business logic
function beepBoop(name, number) {
  let newResult = [];
  for (let i = 0; i <= number; i++) {
    let stringNumber = i.toString();
    if (stringNumber.includes("3")) {
      newResult.push("Won't you be my neighbor, " + name + "?");
    } else if (stringNumber.includes("2")) {
      newResult.push("Boop!");
    } else if (stringNumber.includes("1")) {
      newResult.push("Beep");
    } else {
      newResult.push(i);
    }
  }
  return newResult;
}


// UI LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", numberReplacer);
});

function resetForm() {
  const form = document.getElementById("form");
  form.reset();
}

function classHidden() {
  document.querySelector("#error").setAttribute("class", "hidden");
  document.querySelector("#textInput").setAttribute("class", "hidden");
}

function numberChecker(number) {
  if (number < 0) {
    document.querySelector("#error").removeAttribute("class");
    return;
  }
}

function numberReplacer(e) {
  e.preventDefault();
  classHidden();
  const input = document.getElementById("inputNumber").value;
  const numberCheck = numberChecker(input);
  const inputName = document.getElementById("inputName").value;
  if(Number(inputName)){
    document.querySelector("#textInput").removeAttribute("class");
    return
  }
  const beepBooper = beepBoop(inputName, input);
  const output = document.getElementById("output");
  output.textContent = "";
  let p = document.createElement("p");
  p.className = "p";
  p.textContent = beepBooper.join(" , ");
  output.appendChild(p);
  resetForm();
}

// UI LOGIC #2

const blue = document.getElementById("blue");
blue.addEventListener("click", changeToBlue);

const grey = document.getElementById("grey");
grey.addEventListener("click", changeToGrey);

const green = document.getElementById("green");
green.addEventListener("click", changeToGreen);

function changeToBlue() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "#001540";
}

function changeToGrey() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "#232023";
}

function changeToGreen() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "#003e3a";
}
