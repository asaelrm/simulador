function calcularNivel() {
    const fecha = new Date(document.getElementById("fechadeNacimiento").value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    let mensaje = "";
    
    if (edad < 12) {
        mensaje = "nivel primario";
    } else if (edad >= 12 && edad <= 15) {
        mensaje = "Nivel segundario Inicial";
    } else if (edad >= 16 && edad <= 18) {
        mensaje = "Nivel segundario final";
    } else {
        mensaje = "Edad fuera del rango escolar obligatorio";
    }
    
    document.getElementById("resultado").innerText = mensaje;
}
