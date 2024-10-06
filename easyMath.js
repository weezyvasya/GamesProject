const btnEasyMath = document.querySelector(".easyMath")


function game(){
    let task = [
    {
       text: '2 + 2',
       answer: 4
    },
    {
        text: '10 - 2',
        answer: 8

    },
    {
        text: '2 * 7',
        answer: 14

    },
    {
       text: '10 / 2',
       answer: 5

    }
]
let index = Math.floor(Math.random() * ((task.length - 1) - 0) - 0)
let result = Number(prompt(`Реши задачу ${task[index].text}`))

if (result === task[index].answer){
    alert("Правильно")
} else{
    alert(`Ошибка, правильный ответ ${task[index].answer}`)
}
}

btnEasyMath.addEventListener("click", game)