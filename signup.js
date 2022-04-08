const div = document.querySelectorAll("div");
const body = document.querySelectorAll("body");
const form = document.querySelector('#subscription');
const submitbutton = document.querySelector("#submitbutton");
const messageEl = document.querySelector('#message');


// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const formData = new FormData(event.target)
//     const firstName = formData.get(".firstname")
//     const lastName = formData.get(".lastname")
//     const email = formData.get(".emailaddress")

//     console.log(firstName, lastName, email)
//     event.target.reset()
// })

submitbutton.addEventListener("click", (e) => {
    e.preventDefault();
    subscribe();
    console.log();
});


const subscribe = async() => {
    try {
        let response = await fetch('/subscribe.php', {
            method: 'POST',
            body: new FormData(form),
        });
        const result = await response.json();

        showMessage(result.message, response.status == 200 ? 'success' : 'error');

    } catch (error) {
        showMessage(error.message, 'error');
    }
};

const showMessage = (message, type = 'success') => {
    messageEl.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `;
};