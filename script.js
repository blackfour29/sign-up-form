const firstNameInput = document.querySelector(".first-name-input");
const firstNameCheckSuccess = document.querySelector(".first-name-check-success");
const firstNameCheckError = document.querySelector(".first-name-check-error");
const firstNameError = document.querySelector(".first-name-error");

const emailInput = document.querySelector(".email-input");
const emailCheckSuccess = document.querySelector(".email-check-success");
const emailCheckError = document.querySelector(".email-check-error");
const emailError = document.querySelector(".email-error");


firstNameInput.addEventListener("blur", validateName);
firstNameInput.addEventListener("input", checkValidityAggressive);

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", checkValidityAggressive);




let nameChanged = false;
let emailChanged = false;

function checkValidityAggressive(event)
{
  if(nameChanged)
  {
    if(event.target.value.trim().length === 0)
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
    if(!event.target.value.includes("@") || !event.target.value.includes(".com"))
    {
      updateFormUI("error", "email")
    }
    else
    {
      updateFormUI("success", "email");
    }
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
      displayError(emailError, "Invalid email address");
      emailCheckError.classList.remove("hidden");
      emailCheckSuccess.classList.add("hidden");
    }
  }
}