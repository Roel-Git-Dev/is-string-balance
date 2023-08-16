
function Input_String_Characters_Validator(given_string, valid_characters)
{
    for(let current_char of given_string)
    {
        if(valid_characters.includes(current_char) === false)
        {
            return {
                error: "InvalidCharactersUseError"
            }
        }
    }

  if (given_string.length % 2 !== 0)
  {
    return {
        error: "UnusableStringLengthError"
    }
  }
  return {success: true}
}

export {Input_String_Characters_Validator}