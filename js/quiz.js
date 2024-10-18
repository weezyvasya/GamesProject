const btnQuiz = document.querySelector('.quiz')

function gameQuiz() {
    let quizQuestion = [
        {
            text: "Что такое DOM? (Метод работы со строками, Объектная модель документа, Часть HTML)",
            answer: "Объектная модель документа"
        },
        {
            text: "Как называется метод массивов, который переварачивает массив? (Split(), Join(), Reverse())",
            answer: "Reverse"
        },
        {
            text: "Что такое HTML? (Язык программирования, Язык гипертекстовой разметки, Стили страницы)",
            answer: "Язык гипертекстовой разметки"
        },
        {
            text: "Что такое CSS? (Каскадная таблица стилей, Язык програмирования, Язык разметки)",
            answer: "Каскадная таблица стилей"
        },
    ]
    let answerUser = null
    const result = {
        right: 0,
        total: quizQuestion.length
    }

    for (let i = 0; i < quizQuestion.length; i++){
        answerUser = prompt(quizQuestion[i].text)
        if (quizQuestion[i].answer.toLocaleLowerCase() === answerUser.toLocaleLowerCase()) {
            result.right++
        } 
    }

alert(`Вы ответил правильно на ${result.right} из ${result.total}`)

}


btnQuiz.addEventListener('click', gameQuiz)