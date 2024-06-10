let btn = document.getElementById("formbtn")

console.log(btn)

btn.addEventListener('click', function(event) {

    console.log("my andr aya ")
    let isValid = true;

    const email = document.querySelector('input[type="email"]');
    const password = document.querySelector('input[type="password"]');
    const firstName = document.querySelector('input[type="text"]');
    const lastName = document.querySelector('input[type="text"]');
    const phone = document.querySelector('input[type="number"]');

    console.log(email)
    console.log(password)
    console.log(firstName)
    console.log(lastName)
    console.log(phone)

    if (!email.value) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required';
        alert("Email required")
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!password.value) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password is required';
        alert("password required")
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (!firstName.value) {
        isValid = false;
        document.getElementById('firstNameError').textContent = 'First name is required';
        alert("firstname required")
    } else {
        document.getElementById('firstNameError').textContent = '';
    }

    if (!lastName.value) {
        isValid = false;
        document.getElementById('lastNameError').textContent = 'Last name is required';
        alert("lastname required")
    } else {
        document.getElementById('lastNameError').textContent = '';
    }

    if (!phone.value) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number is required';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});