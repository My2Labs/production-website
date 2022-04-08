const form = document.querySelectorAll("form")
const submitbutton = document.querySelector(".submitbutton")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const firstName = formData.get(".firstname")
    const lastName = formData.get(".lastname")
    const email = formData.get(".emailaddress")

    console.log(firstName, lastName, email)
    event.target.reset()
})

submitbutton.addEventListener(`click`, (e) => {

    console.log(values);
});
W