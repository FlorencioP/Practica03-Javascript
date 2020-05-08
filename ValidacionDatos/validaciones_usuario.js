function validarCamposObligatorios() {
    var bandera = true 
     
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i] 
        if(elemento.value == '' && elemento.type == 'text'){
           if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia' 
            } 
            
            elemento.style.border = '1px red solid' 
            elemento.className = 'error' 
            bandera = false 
        } 
    }

    if(!bandera){ 
        alert('Error: revisar los comentarios') 
    } 
        
    return bandera 
} 
    



function validarLetras(elemento) { 
    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1) 
        console.log(miAscii) 
            
        if(miAscii >= 97 && miAscii <= 122 || miAscii == 32){ 
            return true 
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false 
        } 
    }else{ 
            
        return true 
    } 
}

function validarNumeros(elemento) { 

    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1) 
        console.log(miAscii) 
            
        if(miAscii >= 48 && miAscii <= 57){ 
            return true 
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false 
        } 
    }else{ 
            
        return true 
    } 
}



function validar() {
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i));
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
        document.getElementById("salida").innerHTML = ("Cedula Válida");
      }else{
        document.getElementById("salida").innerHTML = ("Cedula Inválida");
      }
    }
  }
