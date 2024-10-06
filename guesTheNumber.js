const btnGuesTheNumber = document.querySelector(".guesTheNum")

function game(){
    let answer = Math.floor(Math.random() * 100) + 1
    let result = Number(prompt("Я загадал число от 1 до 100, какое это число?"))

    console.log(answer)

    while (answer !== result){
        answer < result ? result = Number(prompt("Меньше")) : result = Number(prompt("больше"))
    }

    alert('Угадал')
}


btnGuesTheNumber.addEventListener("click", game)