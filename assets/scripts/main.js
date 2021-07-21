const email = document.getElementById('email')
const phone = document.getElementById('phone')
const nameU = document.getElementById('name')
const address = document.getElementById('address')
const city = document.getElementById('city')
const country = document.getElementById('public')
const postal = document.getElementById('postal')

const send = document.getElementById('enviar')

send.addEventListener('click', (e) => {
    e.preventDefault()
    if (email.value.length < 3 ||
        phone.value.length < 3 ||
        nameU.value.length < 3 ||
        address.value.length < 3 ||
        city.value.length < 3 ||
        country.value === "none" ||
        postal.value.length < 3) {
        alert("You must fill in all fields")
    } else {
        alert("The form has been submitted successfully")
    }
})