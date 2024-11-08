function VerificarCalificacion() {
    let grado = parseInt(document.getElementById("grado").value);
    let mensaje = "";
    if (grado >= 90) {
       mensaje = "Aprobado con Honores."; 
    }else if (grado>=70) {
         mensaje = "Aprobado.";
    }else{
        mensaje = "Reprobado."; 
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}
function determinarParidad() {
    let parImpar = parseInt(document.getElementById("parImpar").value);
    let mensaje = "";
    if (parImpar%2 == 0) {
        mensaje = "El numero es par."; 
    }else {
        mensaje = "El numero es impar."; 
    }
    document.getElementById("parImparSalida").innerText = mensaje;
}
function evaluarDescuento() {
    let descuento = parseInt(document.getElementById("descuento").value);
    let mensaje = "";    
    if (descuento > 100) {
         mensaje = "Con el 10% de descuento el valor de su compra es: "+descuento*0.9; 
    }else {
        mensaje = "No aplica descuento."; 
    }
    document.getElementById("descuentoSalida").innerText = mensaje;
}
function jugarAdivinanza() {
    let random = Math.ceil(Math.random()*10)+1; 
    let adivinar = parseInt(document.getElementById("adivinar").value);
    let mensaje = "";
    if (random == adivinar) {
    mensaje = "¡Felicidades, adivinaste el número!";
    }else{
    mensaje = "Lo siento, el número era "+random;
    }
    document.getElementById("adivinarSalida").innerText = mensaje;
}
