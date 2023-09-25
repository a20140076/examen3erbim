alert("Cuestionario sobre los Óceanos");
var nombre=prompt("Por favor ingresa tu nombre");
alert("Bienvenido/a "+nombre);
res1=prompt("¿Cuánta agua hay en la Tierra?\nA:Alrededor de un 41% de la superficie terrestre es agua.\nB:Alrededor de un 51% de la superficie terrestre es agua\nC:Alrededor de un 71% de la superficie terrestre es agua")
if (res1=="A"){
    res1=0
    }
    else if(res1=="B"){
    res1=0
    }
    else if(res1=="C"){
        res1=25
    }
    else{
    alert(nombre+ " no es una opción valida")
    }
    res2=prompt("¿Qué océano es el más grande?\nA:El Pacífico\nB:El Atlántico\nC:El Índico")
    if (res2=="A"){
        res2=25
        }
        else if(res2=="B"){
        res2=0
        }
        else if(res2=="C"){
            res2=0
        }
        else{
        alert(nombre+ " no es una opción valida")
        }
    res3=prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA:11 Km\nB:23 Km\nC:31 Km")
    if (res3=="A"){
        res3=0
        }
        else if(res3=="B"){
        res3=0
        }
        else if(res3=="C"){
            res3=25
        }
        else{
        alert(nombre+ " no es una opción valida")
        }

        var total=res1+res2+res3
        if (total>=50){
            document.write (nom+ "lo has hecho bien")
        }
        else {
            document.write (nom+ "vuelve a intentarlo")
        }