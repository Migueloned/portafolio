// codigo para evitar ventana emergente al recargar la pagina, por el envio del formulario

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href)
}