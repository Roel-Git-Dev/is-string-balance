import { Stack } from "../classes/Stack.js"
import { Input_String_Characters_Validator, Element_AppendOnce } from "./utilities.js"

const listofValidCharacters =  Array("(",")","[","]","<",">","{","}")

//Function that check if string is balance
function Is_String_Balance(given_string)
{
    const is_valid_input = Input_String_Characters_Validator(given_string,listofValidCharacters)
    if(is_valid_input.hasOwnProperty("error") && is_valid_input.error === "ZeroLengthStringError")
    {
        alert("Error: No input / input length of zero (0)")
        return
    }
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
    let resultCircles = document.querySelectorAll(".result-left-circle, .result-right-circle")
    if(stack_count > 0)
    {   
        myResult.removeAttribute("data-result")
        myResult.setAttribute("data-result","unbalance")
        resultCircles.forEach(item => item.removeAttribute("data-result"))
        resultCircles.forEach(item => item.setAttribute("data-result","unbalance"))
        myResult.innerText = `This ${given_string} is not balance`
    }
    else
    {
        myResult.removeAttribute("data-result")
        myResult.setAttribute("data-result","balance")
        resultCircles.forEach(item => item.removeAttribute("data-result"))
        resultCircles.forEach(item => item.setAttribute("data-result","balance"))
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