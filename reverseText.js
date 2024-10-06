const btnReverseText = document.querySelector(".reverseText")

function game(){
    let text = prompt("Напиши текст")

    let result = text.split('').reverse().join('')

    alert(result)


}

btnReverseText.addEventListener("click", game)