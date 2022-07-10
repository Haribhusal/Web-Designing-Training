function validate(event) {
    event.preventDefault();
    let usernameValue = document.getElementById('uname').value;
    let emailValue = document.getElementById('email').value;
    if (usernameValue == '') {
        document.querySelector('.usernameInvalid').innerHTML = "Invalid Username"
        return false
    }
    if (usernameValue.length < 5 || usernameValue.length > 20) {
        document.querySelector('.usernameInvalid').innerHTML = "Username must be of 5 to 20 characters"
        return false
    }
}



let passInput = document.getElementById("pass");
let myBtn = document.querySelector('.showPassTrigger');
myBtn.addEventListener('click', () => {
    passInput.setAttribute('type', 'text')
    myBtn.innerText = "Hide Password"
})

