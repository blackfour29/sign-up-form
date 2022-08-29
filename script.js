const firstNameInput = document.querySelector(".first-name-input");
const firstNameCheckSuccess = document.querySelector(".first-name-check-success");
const firstNameCheckError = document.querySelector(".first-name-check-error");
const firstNameError = document.querySelector(".first-name-error");

const emailInput = document.querySelector(".email-input");
const emailCheckSuccess = document.querySelector(".email-check-success");
const emailCheckError = document.querySelector(".email-check-error");
const emailError = document.querySelector(".email-error");

const passwordInput = document.querySelector(".password-input");
const passwordCheckSuccess = document.querySelector(".password-check-success");
const passwordCheckError = document.querySelector(".password-check-error");
const passwordError = document.querySelector(".password-error");

const lastNameInput = document.querySelector(".last-name-input");
const lastNameCheckSuccess = document.querySelector(".last-name-check-success");
const lastNameCheckError = document.querySelector(".last-name-check-error");
const lastNameError = document.querySelector(".last-name-error")

const phoneNumberInput = document.querySelector(".phone-number-input");
const phoneNumberCheckSuccess = document.querySelector(".phone-number-check-success");
const phoneNumberCheckError = document.querySelector(".phone-number-check-error");
const phoneNumberError = document.querySelector(".phone-number-error")

const confirmPasswordInput = document.querySelector(".confirm-password-input");
const confirmPasswordCheckSuccess = document.querySelector(".confirm-password-check-success");
const confirmPasswordCheckError = document.querySelector(".confirm-password-check-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");


firstNameInput.addEventListener("blur", validateName);
firstNameInput.addEventListener("input", checkValidityAggressive);

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", checkValidityAggressive);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", checkValidityAggressive);

lastNameInput.addEventListener("blur", validateLastName);
lastNameInput.addEventListener("input", checkValidityAggressive);

phoneNumberInput.addEventListener("blur", validatePhoneNumber);
phoneNumberInput.addEventListener("input", checkValidityAggressive);

confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
confirmPasswordInput.addEventListener("input", checkValidityAggressive);

let phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/ ;

let nameChanged = false;
let emailChanged = false;
let passwordChanged = false;
let lastNameChanged = false;
let phoneNumberChanged = false;
let confirmPasswordChanged = false;

function checkValidityAggressive(event)
{
  if(nameChanged)
  {
    if(firstNameInput.value.trim().length === 0)
    {
      updateFormUI("error", "first name");
    }
    else
    {
      updateFormUI("success", "first name");
    }
  }

  if(emailChanged)
  {
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".com"))
    {
      updateFormUI("error", "email")
    }
    else
    {
      updateFormUI("success", "email");
    }
  }

  if(passwordChanged)
  {
    if(passwordInput.value.length <= 7)
    {
      updateFormUI("error", "password")
    }
    else
    {
      updateFormUI("success", "password");
    }
  }

  if(lastNameChanged)
  {
    if(lastNameInput.value.trim().length === 0)
    {
      updateFormUI("error", "last name");
    }
    else
    {
      updateFormUI("success", "last name");
    }
  }

  if(phoneNumberChanged)
  {
    if((phoneNumberInput.value.match(phonePattern)))
    {
      updateFormUI("success", "phone number")
    }
    else
    {
      updateFormUI("error", "phone number")
    }
  }

  if(confirmPasswordChanged)
  {
    if(confirmPasswordInput.value != passwordInput.value)
    {
      updateFormUI("error", "confirm password");
    }
    else
    {
      updateFormUI("success", "confirm password");
    }
  }

}

function validateConfirmPassword(event)
{
  confirmPasswordChanged = true;
  
  if(event.target.value != passwordInput.value)
  {
    updateFormUI("error", "confirm password");
  }
  else
  {
    updateFormUI("success", "confirm password");
  }
}

function validatePhoneNumber(event)
{
  phoneNumberChanged = true;


  if((event.target.value.match(phonePattern)))
  {
    updateFormUI("success", "phone number")
  }
  else
  {
    updateFormUI("error", "phone number")
  }
}

function validateLastName(event)
{
  lastNameChanged = true;
  let lastName = event.target.value.trim();
  
  if(lastName.length === 0)
  {
    updateFormUI("error", "last name");
  }
  else
  {
    updateFormUI("success", "last name");
  }
}

function validatePassword(event)
{
  passwordChanged = true;
  if(event.target.value.length <= 7)
  {
    updateFormUI("error", "password");
  }
  else
  {
    updateFormUI("success", "password");
  }
}

function validateName(event)
{
  nameChanged = true;
  let name = event.target.value.trim();
  
  if(name.length === 0)
  {
    updateFormUI("error", "first name");
  }
  else
  {
    updateFormUI("success", "first name");
  }
}

function validateEmail(event)
{
  emailChanged = true;
  if(!event.target.value.includes("@") || !event.target.value.includes(".com"))
  {
    updateFormUI("error", "email")
  }
  else
  {
    updateFormUI("success", "email");
  }
}


function displayError(element, message)
{
  element.textContent = message;
  element.classList.remove("invisible");
}


function updateFormUI(type, element)
{
  if(type === "success")
  {
    if(element === "first name")
    {
      firstNameCheckSuccess.classList.remove("hidden");
      firstNameCheckError.classList.add("hidden");
      firstNameError.classList.add("invisible");
    }
    else if(element === "email")
    {
      emailCheckSuccess.classList.remove("hidden");
      emailCheckError.classList.add("hidden");
      emailError.classList.add("invisible");
    }
    else if(element === "password")
    {
      passwordCheckSuccess.classList.remove("hidden");
      passwordCheckError.classList.add("hidden");
      passwordError.classList.add("invisible");
    }
    else if(element === "last name")
    {
      lastNameCheckSuccess.classList.remove("hidden");
      lastNameCheckError.classList.add("hidden");
      lastNameError.classList.add("invisible");
    }
    else if(element === "phone number")
    {
      phoneNumberCheckSuccess.classList.remove("hidden");
      phoneNumberCheckError.classList.add("hidden");
      phoneNumberError.classList.add("invisible");
    }
    else if(element === "confirm password")
    {
      confirmPasswordCheckSuccess.classList.remove("hidden");
      confirmPasswordCheckError.classList.add("hidden");
      confirmPasswordError.classList.add("invisible");
    }
  
  }
  else if(type === "error")
  {
    if(element === "first name")
    {
      firstNameCheckError.classList.remove("hidden");
      firstNameCheckSuccess.classList.add("hidden");
      displayError(firstNameError, "First name cannot be blank");
    }
    else if(element === "email")
    {
      emailCheckError.classList.remove("hidden");
      emailCheckSuccess.classList.add("hidden");
      displayError(emailError, "Invalid email address");
    }
    else if(element === "password")
    {
      passwordCheckError.classList.remove("hidden");
      passwordCheckSuccess.classList.add("hidden");
      displayError(passwordError, "Password needs to be at least 8 characters long");
    }
    else if(element === "last name")
    {
      lastNameCheckError.classList.remove("hidden");
      lastNameCheckSuccess.classList.add("hidden");
      displayError(lastNameError, "Last name cannot be blank");
    }
    else if(element === "phone number")
    {
      phoneNumberCheckError.classList.remove("hidden");
      phoneNumberCheckSuccess.classList.add("hidden");
      displayError(phoneNumberError, "Phone number invalid");
    }
    else if(element === "confirm password")
    {
      confirmPasswordCheckError.classList.remove("hidden");
      confirmPasswordCheckSuccess.classList.add("hidden");
      displayError(confirmPasswordError, "Passwords don't match");
    }
  }
}