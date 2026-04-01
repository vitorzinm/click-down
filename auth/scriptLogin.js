const login = document.getElementById('login');

login.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        window.location.href = "index.html";
    }
})