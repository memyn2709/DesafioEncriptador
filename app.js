function enCRIptar () {
    
    let texto = document.getElementById("textoInicio").value;
    var textocifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
   
    
    if(texto.length != 0){
        document.querySelector(".respuesta").value = textocifrado;
    }else{
        window.alert ("No has tecleado anda!!")
    }

}

function deSENcriptar(){
    let texto = document.getElementById("textoInicio").value;
    var textocifrado =  texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    
    if(texto.length != 0){
    document.querySelector(".respuesta").value = textocifrado;

    }else{
        window.alert("No has tecleado nada!!")
    }
}

function portapapeles() {
    window.alert("Copiado con exito!!");
    var origen = document.getElementById('respuesta');
    var destino = document.getElementById('textoInicio');
    var copyFrom = document.createElement("respuesta");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');

}
