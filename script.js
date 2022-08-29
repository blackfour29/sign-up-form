const firstNameInput = document.querySelector(".first-name-input");
const firstNameCheckSuccess = document.querySelector(".first-name-check-success");
const firstNameCheckError = document.querySelector(".first-name-check-error");
const firstNameError = document.querySelector(".first-name-error");

const emailInput = document.querySelector(".email-input");
const emailCheckSuccess = document.querySelector(".email-check-success");
const emailCheckError = document.querySelector(".email-check-error");
const emailError = document.querySelector(".email-error");


firstNameInput.addEventListener("blur", validateName);
firstNameInput.addEventListener("input", checkValidity);

emailInput.addEventListener("blur", validateEmail);

let nameChanged = false;

function checkValidity(event)
{
  if(nameChanged)
  {
    if(event.target.value.trim().length === 0)
    {
      updateFirstNameUI("error");
    }
    else
    {
      updateFirstNameUI("success");
    }
  }

}


function validateName(event)
{
  nameChanged = true;
  let name = event.target.value.trim();
  
  if(name.length === 0)
  {
    updateFirstNameUI("error");
  }
  else
  {
    updateFirstNameUI("success");
  }
}

function validateEmail(event)
{
  if(!event.target.value.includes("@") || !event.target.value.includes(".com"))
  {
    displayError(emailError, "Invalid email address");
    emailCheckError.classList.remove("hidden");
    emailCheckSuccess.classList.add("hidden");
  }
  else
  {
    emailCheckSuccess.classList.remove("hidden");
    emailCheckError.classList.add("hidden");
    emailError.classList.add("invisible");
  }
}


function displayError(element, message)
{
  element.textContent = message;
  element.classList.remove("invisible");
}


function updateFirstNameUI(type)
{
  if(type === "success")
  {
    firstNameCheckSuccess.classList.remove("hidden");
    firstNameCheckError.classList.add("hidden");
    firstNameError.classList.add("invisible");
  }
  else if(type === "error")
  {
    firstNameCheckError.classList.remove("hidden");
    firstNameCheckSuccess.classList.add("hidden");
    displayError(firstNameError, "First name cannot be blank");
  }
}