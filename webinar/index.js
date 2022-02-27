/*----------------------
     NavBar, and Footer
----------------------*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*----------------------
    Accordion
----------------------*/

var accordions = document.getElementsByClassName("accordion");
var open = document.getElementsByClassName("open");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

/*---------------------------
        Left Side View
---------------------------*/
var emoji = document.querySelector("h1 > span");
var waveButton = document.querySelector("button");
waveButton.addEventListener("click", function() {
  emoji.classList.remove("animate");
  setTimeout(function() {
    emoji.classList.add("animate");
  }, 0);
});

/*---------------------------------------------------------
     Form : Just Incase you want to implement validation.
-----------------------------------------------------------*/
const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //Get the value the form field.
  const usernameValue = username.value.trim(); //trim to delete blanc space.
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorInput(username, "UserName cannot be blanc.");
  } else {
    setSuccessInput(username);
  }

  //###################################
  if (emailValue === "") {
    setErrorInput(email, "Email cannot be blanc.");
  } else {
    validateEmail(emailValue) && setSuccessInput(email);
  }

  //###################################
  if (passwordValue === "") {
    setErrorInput(password, "Password connot be blanc.");
  } else {
    setSuccessInput(password) && validatePassword(passwordValue);
  }

  //###################################
  if (password2Value === "") {
    setErrorInput(password2, "Password connot be blanc.");
  } else if (password2Value !== passwordValue) {
    setErrorInput(password2, "Password dose not match.");
  } else {
    setSuccessInput(password2);
  }
}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form__control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function validateEmail(email) {
  let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function validatePassword(password) {
  let regular_expressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regular_expressions.match(regular_expressions);
}
