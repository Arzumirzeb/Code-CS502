const form = document.querySelector("form")
const button = document.querySelector("button")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirm_password")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value
    }
    console.log(user);
})

function checkValidation() {
    if (username.value && email.value && password.value && confirm_password.value && password.value === confirm_password.value) {
        button.disabled = false
    } else {
        button.disabled = true
    }

}


username.addEventListener('input', checkValidation)
email.addEventListener('input', checkValidation)
password.addEventListener('input', checkValidation)
confirm_password.addEventListener('input', checkValidation)
