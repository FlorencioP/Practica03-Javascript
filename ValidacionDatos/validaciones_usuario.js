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
                elemento.style.border = '1px red solid' 
                elemento.className = 'error' 
                bandera = false
            }
        }
    }

    if(bandera == true){
        console.log("ACEPTADO")  

        window.open("fomularioCompleto.php","_blank")
    }

    if(bandera == false){ 
        alert('Registro Fallido: Por favor revise sus datos') 
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
function validarNumsF(elemento) { 
    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1) 
        console.log(miAscii) 
        if(miAscii >= 47 && miAscii <= 57){ 
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
function validarApellidos(){
    var cad = document.getElementById('apellidos').value
    console.log(cad) 
    var valor = cad.indexOf(" ")
    console.log(valor)
    if(valor == -1){
        document.getElementById('mensajeApellido').innerHTML = '<br>Por favor ingrese sus 2 apellidos' 
        apellidos.style.border = '1px red solid' 
        apellidos.className = 'error' 
        bandera = false 
    }else{
        var sig = cad.charAt(valor + 1)
        cad = cad.replace (" "+ sig , "" )
        console.log(cad)
        var valor2 = cad.indexOf(" ")
        if(valor2 == -1){
            document.getElementById('mensajeApellido').innerHTML = '' 
            apellidos.style.border = '1px black solid' 
            apellidos.className = 'none' 
            bandera = true
        }else{
            document.getElementById('mensajeApellido').innerHTML = '<br>Solo se permiten 2 apellidos' 
            apellidos.style.border = '1px red solid' 
            apellidos.className = 'error' 
            bandera = false 
        }
    }
}
function validarTelefono(){
    var cad = document.getElementById('telefono').value
    console.log(cad)
    var valor = cad.length
    if( valor == 10 ){
        document.getElementById('mensajeTelefono').innerHTML = '' 
        telefono.style.border = '1px black solid' 
        telefono.className = 'none' 
        bandera = true
    }else{
        document.getElementById('mensajeTelefono').innerHTML = '<br>Ingrese un telefono de 10 Digitos' 
        telefono.style.border = '1px red solid' 
        telefono.className = 'error' 
        bandera = false
    }
}


function validarFecha(){
    var cad = document.getElementById('fechaNacimiento').value
    console.log(cad)
    var fechas = cad.split("/");
    console.log(fechas.length)
    console.log(fechas[1])
    console.log(fechas[2])
    if(fechas.length == 3 ){
        if(fechas[0]<=31 && fechas[0]>0 && fechas[1]<=12 && fechas[1]>0){
            document.getElementById('mensajeFecha').innerHTML = '' 
            fechaNacimiento.style.border = '1px black solid' 
            fechaNacimiento.className = 'none' 
            bandera = true
        }else{
            document.getElementById('mensajeFecha').innerHTML = '<br>Ingrese una fecha valida' 
            fechaNacimiento.style.border = '1px red solid' 
            fechaNacimiento.className = 'error' 
            bandera = false
        }

    }else{
        document.getElementById('mensajeFecha').innerHTML = '<br>Ingrese una fecha valida' 
        fechaNacimiento.style.border = '1px red solid' 
        fechaNacimiento.className = 'error' 
        bandera = false
    }
}
function validarMail(){
    var cad = document.getElementById('correo').value
    var valor = cad.indexOf("@")
    console.log(valor)
    if(valor == -1){
        document.getElementById('mensajeCorreo').innerHTML = '<br>Ingrese un Correo Valido' 
        correo.style.border = '1px red solid' 
        correo.className = 'error' 
        bandera = false
    }else{
        var corr = cad.split("@");
        var tam = corr[0].length
        if(tam >=3 && (corr[1] == "est.ups.edu.ec" || corr[1] == "ups.edu.ec") && corr.length ==2){           
            document.getElementById('mensajeCorreo').innerHTML = '' 
            correo.style.border = '1px black solid' 
            correo.className = 'none' 
            bandera = true
        }else{
            document.getElementById('mensajeCorreo').innerHTML = '<br>Ingrese un Correo Valido' 
            correo.style.border = '1px red solid' 
            correo.className = 'error' 
            bandera = false
        }
    }
}
function validarContra(){
    var cad = document.getElementById('contrasena').value;
    var contra = cad.split("")
    var v1 = false;
    var v2 = false;
    var v3 = false;
    var v4 = false;
    for(var i = 0; i < contra.length; i++){
        
        var letr = contra[i]
        var miAscii = letr.charCodeAt(0)

        if(cad.length >=8){
            v1 = true;
        }

        if(miAscii >= 65 && miAscii <= 92){
            v2 = true;
        }

        if(miAscii >= 97 && miAscii <= 122){
            v3 = true;
        }

        if((miAscii >= 35 && miAscii <= 47) || (miAscii >= 58 && miAscii <= 64)||(miAscii >= 91 && miAscii <= 96)){
            v4 = true;
        }

        if(v4 == true && v3 == true && v2 == true && v1 == true){           
            document.getElementById('mensajeContra').innerHTML = '' 
            contrasena.style.border = '1px black solid' 
            contrasena.className = 'none' 
            bandera = true
        }else{
            document.getElementById('mensajeContra').innerHTML = '<br>Ingrese una Contraseña Valida' 
            contrasena.style.border = '1px red solid' 
            contrasena.className = 'error' 
            bandera = false
        }



    }

}

function validarDir(){

    if(direccion.value == ''){

    }else{
        document.getElementById('mensajeDireccion').innerHTML = '' 
        direccion.style.border = '1px black solid' 
        direccion.className = 'none' 
        bandera = true
    }

}


