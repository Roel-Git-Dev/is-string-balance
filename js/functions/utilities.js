/*
Description: Check if the input string have valid characters.
Args:
given_string = input string to check.
valid_characters = array of characters to check against the given string
Return: error or success object
*/
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
/*
Description: Create an Element with an id. If it already exists
gives the query selector handle.
Args:
tag_name = the tagname of the element to be created.
parent_selector =  selector string of the parent to append to.
element_id = the id of the element.
Return: The new element.
*/
function Element_AppendOnce(tag_name, parent_selector, element_id)
{
   if(document.querySelector(`#${element_id}`))
   {
    return document.querySelector(`#${element_id}`)
   }

   let new_element = document.createElement(tag_name)
   new_element.id = element_id
   let parent = document.querySelector(parent_selector)
   parent.append(new_element)

   return document.querySelector(`#${element_id}`)
}

 
export {Input_String_Characters_Validator,Element_AppendOnce}