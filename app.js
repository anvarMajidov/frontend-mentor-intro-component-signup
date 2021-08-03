let form = document.querySelector("form");
let errorMessage = document.querySelectorAll(".error-message");
let errorIcons = document.querySelectorAll(".err-icon");
let inputBoxes = document.querySelectorAll(".inputs__inner");
let inputs = document.querySelectorAll(".input");
let button = document.querySelector(".submit-box__button");

button.addEventListener("mousedown", () => {
  makeActive(null, button);
});
window.addEventListener("mouseup", () => {
  removeActive(null, button);
});

inputs.forEach((input, ind) => {
  input.addEventListener("blur", (e) => {
    if (isCorrect(input)) {
      removeActive(ind, inputBoxes, errorMessage, errorIcons, inputs);
    } else {
      makeActive(ind, inputBoxes, errorMessage, errorIcons, inputs);
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input, ind) => {
    if (isCorrect(input)) {
      removeActive(ind, inputBoxes, errorMessage, errorIcons);
    } else {
      makeActive(ind, inputBoxes, errorMessage, errorIcons);
    }
  });
});

function makeActive(index) {
  let elements = [].slice.call(arguments).slice(1);

  if (index === null) {
    elements.forEach((el) => {
      el.classList.add("active");
    });
  } else {
    elements.forEach((el) => {
      el[index].classList.add("active");
    });
  }
}
function removeActive(index) {
  let elements = [].slice.call(arguments).slice(1);

  if (index === null) {
    elements.forEach((el) => {
      el.classList.remove("active");
    });
  } else {
    elements.forEach((el) => {
      el[index].classList.remove("active");
    });
  }
}

function isCorrect(el) {
  let className = el.className;
  let value = el.value;

  if (className.includes("email")) {
    return isValidEmail(value);
  } else {
    return value.length > 0 && !isOnlySpace(value);
  }
}

function isValidEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function isOnlySpace(word) {
  let letters = word.split("");

  let amountOfSpaces = 0;
  letters.forEach((letter, ind) => {
    if (letter === " ") {
      ++amountOfSpaces;
    }
  });
  console.log(amountOfSpaces);
  return amountOfSpaces === letters.length;
}

//show password and hide
let pswrInput = document.querySelector(".input.password");
let pswrdBtn = document.querySelector(".show-psw");

pswrdBtn.addEventListener("click", () => {
  let type =
    pswrInput.getAttribute("type") === "password" ? "text" : "password";
  pswrInput.setAttribute("type", type);

  pswrdBtn.classList.toggle("active");

  // this one is more understandable
  // pswrInput.getAttribute("type") === "password"
  //   ? pswrInput.setAttribute("type", "text")
  //   : pswrInput.setAttribute("type", "password");
});
