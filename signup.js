const button = document.querySelector("button");
const submitButton = document.querySelector("#submitbutton")
const subscription = document.querySelector("#subscription")

subscription.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const frequency = formData.get("frequency");

    localStorage.setItem("first-name", firstName);
    localStorage.setItem("last-name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("frequency", email);

    console.log(firstName, lastName, email, frequency);
});

console.log(
    "Returned local storage:",
    localStorage.getItem("first-name"),
    localStorage.getItem("last-name"),
    localStorage.getItem("last-name"),
    localStorage.getItem("last-name")
);