
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = characters.slice(52, 62)
const symbols = characters.slice(62, )

// console.log(numbers)


let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")


function getPassword(){
    let newPassword = ""
    // console.log(newPassword)
    maxCount = document.getElementById("length-input").value
    symbolsInput = document.getElementById("symbols-input").checked
    numbersInput = document.getElementById("numbers-input").checked

    console.log(maxCount)
    for (let count=0; count<maxCount; count++){
        if(symbolsInput & numbersInput){
            randomIndex = Math.floor(Math.random() * characters.length)
            newPassword += characters[randomIndex]
            console.log(characters)
        } else if(symbolsInput && !numbersInput){
            let newArray = characters.filter(x => !numbers.includes(x))
            randomIndex = Math.floor(Math.random() * newArray.length)
            newPassword += newArray[randomIndex]
            console.log(newArray)
        } else if(!symbolsInput && numbersInput){
            let newArray = characters.filter(x => !symbols.includes(x))
            randomIndex = Math.floor(Math.random() * newArray.length)
            newPassword += newArray[randomIndex]
            console.log(newArray)
        } else {
            let intermediateArray = numbers.concat(symbols)
            let newArray = characters.filter(x => !intermediateArray.includes(x))
            randomIndex = Math.floor(Math.random() * newArray.length)
            newPassword += newArray[randomIndex]
            console.log(newArray)
        }
        
    }

    return newPassword
}

function buttonClick(){
    passwordOneEl.textContent = getPassword()
    passwordTwoEl.textContent = getPassword()
}


function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}