const inputToCheck = document.querySelector("#inputToCheck")
const btnClear =  document.querySelector("#btnClear")
const btnCheck =  document.querySelector("#btnCheck")

const listofValidCharacters =  Array("(",")","[","]","<",">","{","}")

btnClear.addEventListener("click",(e) => {
    e.preventDefault()
    inputToCheck.value = ""
})

btnCheck.addEventListener("click", (e) => {
    e.preventDefault()
    Is_Balance_String(inputToCheck.value)
})

function Is_Balance_String(given_string)
{
   if(Input_Validators(given_string) ===  false)
   {
    return;
   }

   
}

function Input_Validators(given_string)
{
  for(current_char of given_string)
  {
    if(listofValidCharacters.includes(current_char) === false)
    {
        alert("Input contains invalid characters")
        return false
    }
  }

  if (given_string.length % 2 !== 0)
  {
    alert("Input length is not even, therefore cannot be balance") 
    return false
  }
  return true
}