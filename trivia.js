const triviaapi = `https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple`

fetch(triviaapi)
    .then(response => response.json())
    .then(response => {