// Función para encriptar el texto
function encriptarTexto(texto) {
    // Aquí implementas tu lógica de encriptación
    // Por ejemplo, puedes simplemente invertir el texto para este ejemplo:
    return texto.split('').reverse().join('');
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    // Inviertes de nuevo el texto para desencriptarlo
    return texto.split('').reverse().join('');
}

// Evento para redireccionar desde index.html a index_2.html
document.querySelector('.layout-1-2').addEventListener('click', function() {
    const texto = document.querySelector('.texto').value;

    if (!texto) {
        alert("Por favor ingresa texto para encriptar");
    } else {
        // Almacenar el texto encriptado en el almacenamiento local
        localStorage.setItem('textoEncriptado', encriptarTexto(texto));
        // Redireccionar a index_2.html
        window.location.href = 'index_2.html';
    }
});

// Evento para verificar si se intentó desencriptar sin encriptar primero
document.querySelector('.layout-1-3').addEventListener('click', function() {
    const texto = document.querySelector('.texto').value;

    if (!texto) {
        alert("Por favor ingresa texto para encriptar");
    } else {
        alert("Encripta el texto previamente");
    }
});

// Lógica para mostrar el texto encriptado en index_2.html
document.addEventListener('DOMContentLoaded', function() {
    const textoEncriptado = localStorage.getItem('textoEncriptado');
    
    if (textoEncriptado) {
        document.querySelector('.texto2').value = textoEncriptado;
    }

    // Evento para copiar el texto al hacer clic en boton copiar
    document.querySelector('.layout-2-1').addEventListener('click', function() {
        const texto2 = document.querySelector('.texto2');
        texto2.select();
        document.execCommand('copy');
    });

    // Evento para desencriptar el texto al hacer clic en desencriptar de index_2.html
    document.querySelector('.layout-1-3').addEventListener('click', function() {
        const textoSeleccionado = document.querySelector('.texto2').value;

        if (textoSeleccionado) {
            const textoDesencriptado = desencriptarTexto(textoSeleccionado);
            document.querySelector('.texto').value = textoDesencriptado;
        }
    });

    // Verificar si se intenta encriptar un texto ya encriptado
    document.querySelector('.layout-1-2').addEventListener('click', function() {
        const textoSeleccionado = document.querySelector('.texto2').value;

        if (textoSeleccionado) {
            alert("El texto ya está encriptado");
        }
    });
});
