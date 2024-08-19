const questions = [];
const nextQuestion = () => { document.querySelector(".but").click(); }

for(let i = 0; i < 30; i++){
    const answers = [];
    const getCurrentQuestion = document.querySelector("#pri1").textContent;
    const getCurrentAnswers = document.querySelectorAll("#cuestiones1 .pr05").forEach( (answer) => {
           answers.push(answer.innerText);
    })

    questions.push({
        question: getCurrentQuestion,
        answers: answers
    });

    nextQuestion();
}

console.log(questions);