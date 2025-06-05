function obtenerInventario() {
    const datos = localStorage.getItem("inventario");
    return datos ? JSON.parse(datos) : [];
}

function guardarInventario(inventario) {
    localStorage.setItem("inventario", JSON.stringify(inventario));
}

function agregarArticulo(event) {
    event.preventDefault();
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombreArticulo").value;
    const categoria = document.getElementById("categoria").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const estado = document.getElementById("estado").value;

    let inventario = obtenerInventario();

    // Verifica si el código ya existe
    const existe = inventario.find(item => item.codigo === codigo);
    if (existe) {
        alert("Ya existe un artículo con ese código.");
        return;
    }

    inventario.push({ codigo, nombre, categoria, cantidad, estado });
    guardarInventario(inventario);
    mostrarInventario();
    document.getElementById("codigo").value = "";
    document.getElementById("nombreArticulo").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("estado").value = "";
}

function mostrarInventario() {
    const inventario = obtenerInventario();
    const tabla = document.getElementById("tablaInventario");
    tabla.innerHTML = "";
    inventario.forEach(item => {
        let estadoClass = "";
        switch (item.estado) {
            case "Disponible":
                estadoClass = "estado-disponible";
                break;
            case "Bajo stock":
                estadoClass = "estado-bajo";
                break;
            case "Reservado":
                estadoClass = "estado-reservado";
                break;
            case "Sin stock":
                estadoClass = "estado-sin";
                break;
            default:
                estadoClass = "";
        }
        const fila = `<tr>
            <td>${item.codigo}</td>
            <td>${item.nombre}</td>
            <td>${item.categoria}</td>
            <td>${item.cantidad}</td>
            <td><span class="${estadoClass}">${item.estado}</span></td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

// Mostrar inventario al cargar la página
window.onload = mostrarInventario;