import { Stack } from "../classes/Stack.js"
import { Input_String_Characters_Validator } from "./utilities.js"


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
        alert("Error: An invalid character(s) was used")
        return
    }
    if(is_valid_input.hasOwnProperty("error") && is_valid_input.error === "UnusableStringLengthError")
    {
        alert("Error: The length of the string input is invalid in this context")
        return
    }
    
}

function Return_Stack_Length(given_string)
{
    const myStack  = new Stack()
    for (let current_char of given_string)
    {
        if(myStack.Count() > 0)
        {
            if(`${myStack.Peek()}${current_char}` ===  "()" ||
            `${myStack.Peek()}${current_char}` ===  "[]" || 
            `${myStack.Peek()}${current_char}` ===  "<>" ||
            `${myStack.Peek()}${current_char}` ===  "{}"
            )
            myStack.Pop()
            continue
        }
    myStack.Push(current_char)
    }

    return myStack.Count()
}

export {Is_String_Balance}