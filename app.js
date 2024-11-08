function VerificarCalificacion() {
    let calificacion = parseInt(document.getElementById("calificacion").value);
    let mensaje = "";
    if (calificacion >= 90) {
       mensaje = "Aprobado con Honores."; 
    }else if (calificacion>=70) {
         mensaje = "Aprobado.";
    }else{
        mensaje = "Reprobado."; 
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}
function determinarParidad() {
    let numero = parseInt(document.getElementById("numero").value);
    let mensaje = "";
    if (numero%2 == 0) {
        mensaje = "El numero es par."; 
    }else {
        mensaje = "El numero es impar."; 
    }
    document.getElementById("parImparSalida").innerText = mensaje;
}
function evaluarDescuento() {
    let monto = parseInt(document.getElementById("monto").value);
    let mensaje = "";    
    if (monto > 100) {
         mensaje = "Con el 10% de descuento el nuevo monto es: "+monto*0.9; 
    }else {
        mensaje = "No aplica descuento."; 
    }
    document.getElementById("descuentoSalida").innerText = mensaje;
}
function jugarAdivinanza() {
    let random = Math.ceil(Math.random()*10);; 
    let adivinanza = parseInt(document.getElementById("adivinanza").value);
    let mensaje = "";
    if (random == adivinanza) {
    mensaje = "¡Felicidades, adivinaste el número!";
    }else{
    mensaje = "Lo siento, el número era "+random;
    }
    document.getElementById("adivinarSalida").innerText = mensaje;
}
