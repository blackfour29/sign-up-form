function validateName()
{
  firstNameChanged = true;
  
  if(!validName())
  {
    updateFormUI("error", "first name");
  }
  else
  {
    updateFormUI("success", "first name");
  }
}

function validateEmail()
{
  emailChanged = true;
  if( !validEmail() )
  {
    updateFormUI("error", "email")
  }
  else
  {
    updateFormUI("success", "email");
  }
}

function validatePassword()
{
  passwordChanged = true;
  if(!validPassword())
  {
    updateFormUI("error", "password"); 
  }
  else
  {
    updateFormUI("success", "password");
  }
}

function validateLastName()
{
  lastNameChanged = true;
  
  if(!validLastName())
  {
    updateFormUI("error", "last name");
  }
  else
  {
    updateFormUI("success", "last name");
  }
}

function validatePhoneNumber()
{
  phoneNumberChanged = true;

  if(!validPhoneNumber())
  {
    updateFormUI("error", "phone number");
  }
  else
  {
    updateFormUI("success", "phone number");
  }
}

function validateConfirmPassword()
{
  confirmPasswordChanged = true;
  
  if(!validConfirmPassword())
  {
    updateFormUI("error", "confirm password");
  }
  else
  {
    updateFormUI("success", "confirm password");
  }
}


function validName()
{
  if(firstNameInput.value.trim().length===0)
  {
    return 0;
  }
  return 1;
}

function validEmail()
{
  if(!emailInput.value.includes("@") || !emailInput.value.includes(".com"))
  {
    return 0;
  }
  return 1;
}

function validPassword()
{
  if(passwordInput.value.length <= 7)
  {
    return 0;
  }
  return 1;
}

function validLastName()
{
  if(lastNameInput.value.trim().length === 0)
  {
    return 0;
  }
  return 1;
}

function validPhoneNumber()
{
  let match = phoneNumberInput.value.match(phonePattern); // returns an array or null
  
  if(match === null )
  {
    return 0;
  }
  return 1;
}

function validConfirmPassword()
{
  if(confirmPasswordInput.value != passwordInput.value || confirmPasswordInput.value.trim().length === 0)
  {
    return 0;
  }
  return 1;
}