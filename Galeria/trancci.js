var lista
//lista = lista.sort(function() {return Math.random() - 0.5});
var dipsAct = 0
function recargar(){
    dipsAct = 0
    lista = [1,2,3,4,5,6,7,8,9,10];
    lista = lista.sort(function() {return Math.random() - 0.5});
    document.getElementById("imgactual").setAttribute("src" ,"images/img"+lista[dipsAct]+".jfif" )
    console.log(lista) 
    document.getElementById("anter").disabled = true;
    document.getElementById("sig").disabled = false;
    document.getElementById("imgder").setAttribute("src" ,"images/img"+lista[dipsAct+1]+".jfif" )
}
function der(){
    console.log(lista) 
    document.getElementById('imgder').style.right = '-70%';
    document.getElementById('imgder').style.display = 'block';
    var num =-70
    var derch = setInterval(movder, 10);
    function movder(){
        document.getElementById('imgder').style.right = num+"%";
        num = num +1.4
        document.getElementById("anter").disabled = true;
        document.getElementById("sig").disabled = true;
        if (num >= 17.5) {
            clearInterval(derch);
            document.getElementById('imgder').style.display = 'none';
            dipsAct=dipsAct +1
            document.getElementById("imgactual").setAttribute("src" ,"images/img"+lista[dipsAct]+".jfif" )
            document.getElementById("imgder").setAttribute("src" ,"images/img"+lista[dipsAct+1]+".jfif" )
            document.getElementById("imgizq").setAttribute("src" ,"images/img"+lista[dipsAct-1]+".jfif" )
            document.getElementById("anter").disabled = false;
            if (dipsAct == 4){
                document.getElementById("sig").disabled = true;
            }else{
                document.getElementById("sig").disabled = false;
            }
        }
    }
}
function izq(){
    //document.getElementById("imgactual").setAttribute("src" ,"images/img3.jfif" )
    //document.getElementById('imgactual').style.display = 'none';
    console.log(lista) 
    document.getElementById('imgizq').style.right = '120%';
    document.getElementById('imgizq').style.display = 'block';
    var num = 120
    var izqch = setInterval(movizq, 10);
    function movizq(){
        document.getElementById('imgizq').style.right = num+"%";
        num = num -1.4
        document.getElementById("anter").disabled = true;
        document.getElementById("sig").disabled = true;
        if (num <= 17.5) {
            clearInterval(izqch);
            document.getElementById('imgizq').style.display = 'none';
            dipsAct=dipsAct -1
            document.getElementById("imgactual").setAttribute("src" ,"images/img"+lista[dipsAct]+".jfif" )
            document.getElementById("imgder").setAttribute("src" ,"images/img"+lista[dipsAct+1]+".jfif" )
            if(dipsAct == 0){
                document.getElementById("imgizq").setAttribute("src" ,"images/imgp.png" )
            }else{
                document.getElementById("imgizq").setAttribute("src" ,"images/img"+lista[dipsAct-1]+".jfif" )
            }
            document.getElementById("sig").disabled = false;
            if (dipsAct == 0){

                document.getElementById("anter").disabled = true;

            }else{
                document.getElementById("anter").disabled = false;
            }
        }
    }
 }