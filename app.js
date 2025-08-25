//main array
let amigos = [];

//function to add a friend
function agregarAmigo(){
    
    if ((document.getElementById('amigo').value) == ''){
        alert("Nombre de Amigo Vacio - Escriba un nombre");
        return;
    }
    
    let amigoIngresado = document.getElementById('amigo').value;
    amigos.push(amigoIngresado);
    // you can enable these validation logs
    // console.log(amigos.length);
    // console.log(amigos[amigos.length-1]);

    document.querySelector('#amigo').value = '';
    actualizarLista();
}

//function to update friends list
function actualizarLista(){
    let listaHtml=document.querySelector('#listaAmigos');
    listaHtml.innerHTML = "";

    for (let i=0; i<amigos.length; i++){
        // you can enable this validation logs
        // console.log(amigos[i]);
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent=amigos[i];
        document.querySelector('#listaAmigos').appendChild(nuevoLi);
    } 
}

//function to draw a friend
function sortearAmigo(){
    
    if ((amigos.length) == 0){
        alert("No hay Amigos Agregados - Añade un nombre");
        return;
    }

    let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
    // you can enable these validation logs
    // console.log(indiceAleatorio);
    // console.log(amigos[indiceAleatorio]);

    const nuevoLi_resul = document.createElement("li");
    nuevoLi_resul.textContent=amigos[indiceAleatorio];
    document.querySelector('#resultado').appendChild(nuevoLi_resul);
}

