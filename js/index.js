import { Is_String_Balance } from "./functions/for_index.js"
import { Stack } from "./classes/Stack.js"
const inputToCheck = document.querySelector("#inputToCheck")
const btnClear =  document.querySelector("#btnClear")
const btnCheck =  document.querySelector("#btnCheck")

//Clear Input Button
btnClear.addEventListener("click",(e) => {
    e.preventDefault()
    inputToCheck.value = ""
})
//Check  Input Button
btnCheck.addEventListener("click", (e) => {
    e.preventDefault()
    Is_String_Balance(inputToCheck.value)
})






