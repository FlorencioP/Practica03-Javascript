window.onload = recargar()
var lista
//lista = lista.sort(function() {return Math.random() - 0.5});

function recargar(){
    lista = [1,2,3,4,5,6,7,8,9,10];
    lista = lista.sort(function() {return Math.random() - 0.5});


    console.log(lista) 
}


function izq(){

    document.getElementById('imgactual').setAttribute("src" ,"images/img3.jfif" )
    console.log(lista) 
}

