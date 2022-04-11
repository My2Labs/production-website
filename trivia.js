const triviaapi = `https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple`
const spinner = document.querySelector(".spinner")
const div = document.querySelectorAll("div")

fetch(triviaapi)
    .then(response => response.json())
console.log(response)
    .then(response => {
        const triviaquestion1 = response.question
        div.append(triviaquestion1)
        console.log(triviaquestion1)
        return triviaquestion1
    })