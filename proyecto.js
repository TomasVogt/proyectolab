function registrar() {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    if (!nombre || !contraseña) {
        alert("Completa ambos campos");
        return;
    }
    // Guarda usuario en localStorage
    localStorage.setItem("usuario_" + nombre, contraseña);
    alert("Usuario registrado. Ahora puedes iniciar sesión.");
}

function validar() {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const guardada = localStorage.getItem("usuario_" + nombre);
    if (guardada && guardada === contraseña) {
        window.location.href = "inventario.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}