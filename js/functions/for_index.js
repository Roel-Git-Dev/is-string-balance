import { Stack } from "../classes/Stack.js"
import { Input_String_Characters_Validator, Element_AppendOnce } from "./utilities.js"


const listofValidCharacters =  Array("(",")","[","]","<",">","{","}")

function Is_String_Balance(given_string)
{
    if(given_string.length === 0)
    {
        alert("Error: No input to check")
        return
    }
    const is_valid_input = Input_String_Characters_Validator(given_string,listofValidCharacters)
    if(is_valid_input.hasOwnProperty("error") && is_valid_input.error === "InvalidCharactersUseError")
    {
        alert("Error: Invalid character(s) was used")
        return
    }
    if(is_valid_input.hasOwnProperty("error") && is_valid_input.error === "UnusableStringLengthError")
    {
        alert("Error: The length of the string input is invalid in this context")
        return
    }
    
    const stack_count =  Return_Stack_Count(given_string)
    let myResult = Element_AppendOnce("div","#mainbox > .lower-box","myResult")

    if(stack_count > 0)
    {   
        myResult.className="result-false"
        myResult.innerText = `This ${given_string} is not balance`
    }
    else
    {
        myResult.className="result-true"
        myResult.innerText = `This ${given_string} is balance`
    }
}

function Return_Stack_Count(given_string)
{
    let myStack  = new Stack()
    for (let current_char of given_string)
    {
        if(myStack.Count() <=  0)
        {
            myStack.Push(current_char)
            continue
        }

        if(`${myStack.Peek()}${current_char}` ===  "()" || `${myStack.Peek()}${current_char}` ===  "[]" || 
            `${myStack.Peek()}${current_char}` ===  "<>" || `${myStack.Peek()}${current_char}` ===  "{}" ){
           
            myStack.Pop()
            continue
          }
          else
          {
            myStack.Push(current_char)
            continue
          }

    }

    return myStack.Count()
}

export {Is_String_Balance}