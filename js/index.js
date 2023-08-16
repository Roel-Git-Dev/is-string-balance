import { Is_String_Balance } from "./functions/for_index.js"
import { Stack } from "./classes/Stack.js"
const inputToCheck = document.querySelector("#inputToCheck")
const btnClear =  document.querySelector("#btnClear")
const btnCheck =  document.querySelector("#btnCheck")

btnClear.addEventListener("click",(e) => {
    e.preventDefault()
    inputToCheck.value = ""
})

btnCheck.addEventListener("click", (e) => {
    e.preventDefault()
    Is_String_Balance(inputToCheck.value)
})






