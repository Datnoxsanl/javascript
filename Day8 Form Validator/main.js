var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSucces(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmtyError(listInput) {
  let isEmtyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmtyError = true;
      showError(input, "Khong duoc de trong");
    } else {
      showError(input);
    }

    return isEmtyError;
  });
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSucces(input);
  } else {
    showError(input, "Email Invalid");
  }

  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phai co it nhat ${min} ky tu`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Khong duoc qua ${max} ky tu`);
  }
  //    showSucces(input);
  return false;
}

function checkMatchPassword(passwordInput, CfPassword) {
  if (passwordInput.value !== CfPassword) {
    showError(CfPassword, "Matj khau khong khop");
    return true;
  }
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isEmtyError = checkEmtyError([username, email, password, password2]);
  let isEmailError = checkEmailError(email);
  let UsernameLengthError = checkLengthError(username, 3, 15);
  let passwordLengthError = checkLengthError(password, 6, 25);
  let ischeckMatchPassword = checkMatchPassword(password, password2);

  if (
    isEmailError ||
    isEmtyError ||
    UsernameLengthError ||
    passwordLengthError ||
    ischeckMatchPassword
  ) {

  } else {
    
  }
});
