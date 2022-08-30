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

function validateConfirmPassword(event)
{
  confirmPasswordChanged = true;
  
  if(event.target.value != passwordInput.value || event.target.value.trim().length === 0)
  {
    updateFormUI("error", "confirm password");
  }
  else
  {
    updateFormUI("success", "confirm password");
  }
}