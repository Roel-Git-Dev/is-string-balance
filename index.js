
const btnClear = document.querySelector("#btnClear")
const btnCheck = document.querySelector("#btnCheck")
const resultBox = document.querySelector("#resultBox")
let inputString_To_Check = document.querySelector("#String_To_Check")

btnClear.addEventListener("click", () => Clear_Input())
btnCheck.addEventListener("click", () => Is_String_Balance(inputString_To_Check.value) )


function Clear_Input()
{
   inputString_To_Check.value = ""
}

function Is_String_Balance(given_string)
{
    let return_val = document.createElement("div")
    return_val.id = "divResult"
    const char_list_to_check = new Array("(",")","[","]","<",">","{","}")

    if (char_list_to_check.includes(given_string) === false)
    {
        console.log("Sorry")
        return;
    }  

    if (given_string.length % 2  !== 0)
    {
        
        return;
    }
}