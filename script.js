function encriptar() {
    let ingreso = document.getElementById("ingreso").value; //obtengo el valor del ingreso en el textarea de entrada
    let resultado = new String();
    resultado = ingreso.replace(/a/g, "AI"); //uso MAYÚSCULAS así luego no reemplazo la "i" de "ai" sino...
    resultado = resultado.replace(/e/g, "ENTER"); // los /g es para reemplazar no solo la primer ocurrencia, sino global
    resultado = resultado.replace(/i/g, "IMES");
    resultado = resultado.replace(/o/g, "OBER");
    resultado = resultado.replace(/u/, "UFAT");
    resultado = resultado.toLowerCase(); //todo a minúsculas nuevamente
    document.getElementById("resultado").value = resultado;
}

function desencriptar() {
    let ingreso = document.getElementById("ingreso").value; //obtengo el valor del ingreso en el textarea de entrada
    let resultado = new String();
    resultado = ingreso.replace(/ai/g, "a");
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");

    document.getElementById("resultado").value = resultado;
}

function copiar() {
    let resultado = document.getElementById("resultado").value;
    navigator.clipboard.writeText(resultado);
}