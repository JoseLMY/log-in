// Función para manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores del usuario y la contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lógica de autenticación (este es un ejemplo simple, no se recomienda usar en producción)
    if (username === 'usuarioEjemplo' && password === 'contraseñaEjemplo') {
        showMessage('Autenticación satisfactoria', 'success');
    } else {
        showMessage('Error en la autenticación', 'error');
    }
});

// Función para mostrar el mensaje de autenticación
function showMessage(message, type) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // Agrega una clase para aplicar estilo (se definirá en CSS)
}
