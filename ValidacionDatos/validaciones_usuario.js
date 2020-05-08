
var bandera = true 

function validarCedula(){

    //Validacion Cedula
    var cad = document.getElementById('cedula').value.trim();
        
    console.log(cad)

    var total = 0;
    var longitud = cad.length;
    
    console.log(longitud)

    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
        console.log("asdasd")
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
      
      console.log(total)
      console.log(cad.charAt(longitud-1))


        if (cad.charAt(longitud-1) == total) {
            document.getElementById('mensajeCedula').innerHTML = '' 
            cedula.style.border = '1px black solid' 
            cedula.className = 'none' 
            bandera = true
        
        }
        else{
    
            document.getElementById('mensajeCedula').innerHTML = '<br>La Cedula Ingresada no es Valida' 
            cedula.style.border = '1px red solid' 
            cedula.className = 'error' 
            bandera = false 

        }
    }
    else{
        document.getElementById('mensajeCedula').innerHTML = '<br>La Cedula esta mal ingresada' 
        
        cedula.style.border = '1px red solid' 
        cedula.className = 'error' 
        bandera = false 
    }



    

}


function validarCamposObligatorios() {
    bandera = true 
     
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i] 



        // Verificador de campos no vacios 
        if(elemento.value == '' && elemento.type == 'text'){


            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>Este Campo se encuentra Vacio'
            }

            if(elemento.id == 'nombres'){
                document.getElementById('mensajeNombres').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            if(elemento.id == 'apellidos'){
                document.getElementById('mensajeApellido').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            if(elemento.id == 'direccion'){
                document.getElementById('mensajeDireccion').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            if(elemento.id == 'telefono'){
                document.getElementById('mensajeTelefono').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            if(elemento.id == 'fechaNacimiento'){
                document.getElementById('mensajeFecha').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            if(elemento.id == 'correo'){
                document.getElementById('mensajeCorreo').innerHTML = '<br>Este Campo se encuentra Vacio' 
            }

            elemento.style.border = '1px red solid' 
            elemento.className = 'error' 
            bandera = false 

            
        } 

        if(elemento.value == '' && elemento.type == 'password'){
            if(elemento.id == 'contrasena'){
                document.getElementById('mensajeContra').innerHTML = '<br>Ingrese Una contraseña' 
            }
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
            
        if(miAscii >= 48 && miAscii <= 57){ 
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }else {
             
            return true 
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


function validarNombres(){
    var cad = document.getElementById('nombres').value
    console.log(cad) 
    var valor = cad.indexOf(" ")
    console.log(valor)

    if(valor == -1){

        document.getElementById('mensajeNombres').innerHTML = '<br>Por favor ingrese sus 2 nombres' 
        
        nombres.style.border = '1px red solid' 
        nombres.className = 'error' 
        bandera = false 

    }else{

        var sig = cad.charAt(valor + 1)

        cad = cad.replace (" "+ sig , "" )
        console.log(cad)

        var valor2 = cad.indexOf(" ")

        
        if(valor2 == -1){

            document.getElementById('mensajeNombres').innerHTML = '' 
            nombres.style.border = '1px black solid' 
            nombres.className = 'none' 
            bandera = true

        }else{

            document.getElementById('mensajeNombres').innerHTML = '<br>Solo se permiten 2 nombres' 
            nombres.style.border = '1px red solid' 
            nombres.className = 'error' 
            bandera = false 
            
        }
   


    }


}
