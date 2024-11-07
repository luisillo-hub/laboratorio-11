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
    document.getElementById("gradosalida").innerText = mensaje;
}
function determinarParidad() {
    let numero = parseInt(document.getElementById("numero").value);
    let mensaje = "";
    if (numero%2 == 0) {
        mensaje = "El numero es par."; 
    }else {
        mensaje = "El numero es impar."; 
    }
    document.getElementById("gradosalida").innerText = mensaje;
}
function evaluarDescuento() {
    let monto = parseInt(document.getElementById("monto").value);
    let mensaje = "";    
    if (monto > 100) {
    
    }
}
function jugarAdivinanza() {
    let random = rand(0-10); 
    let adivinanza = parseInt(document.getElementById("adivinanza").value);
    let mensaje = "";
}
