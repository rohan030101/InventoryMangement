let username = document.getElementById('username').value;
let password = document.getElementById('loginpassword').value;

function sendpassword(username, password) {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/javascript'
        },
        body: username, password,
    });
}