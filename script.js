
function validForm() {

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let nameError = document.querySelector('.box-item #name .error');
    let emailError = document.querySelector('.box-item #email .error');
    let messageResultat = document.getElementById('message-resultat').textContent;

    if (name === "") {
        nameError.textContent = "Name is required";
        return false;
    } else {
        nameError.textContent = "";
    }


    if (email === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = "Invalid email";
        return false;
    } else {
        emailError.textContent = "";
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/formulaire');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            messageResultat = "Form submitted successfully !";
        } else {
            messageResultat = "An error occurred while submitting the form.";
        }
        document.getElementById('message-resultat').textContent = messageResultat;
    };
    xhr.onerror = function() {
        messageResultat = "A network error has occurred.";
        document.getElementById('message-resultat').textContent = messageResultat;
    };
    xhr.send(JSON.stringify({ name: name, email: email }));

    return false;
}