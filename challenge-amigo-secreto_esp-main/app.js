
let amigos = [];
//agregar los amigos y limpiamos el campo
function agregarAmigo() {
    let textoUsuario = document.getElementById('amigo'); 
    let nombre = textoUsuario.value.trim(); // Obtiene el valor y elimina espacios en blanco

    //validar "" campo en blanco
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); 
        return; 
    }

    amigos.push(nombre); // Agrega el nombre a la lista amigos
    textoUsuario.value = ""; 

    recorrerAmigos()
}

function recorrerAmigos(){
   let lista =  document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    //rerrorer la lista
    for (let inicio = 0; inicio < amigos.length; inicio++) { 
        let li = document.createElement('li'); 
        li.textContent = amigos[inicio]; 
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //validar si la lista esta en ceros
    if (amigos.length === 0){
        alert('No hay amigos para sortear, por favor agrega amigos')
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let nombreSeleccionado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${nombreSeleccionado}</strong>`;
    reiniciarJuego();
}
function reiniciarJuego() {
    amigos.length = 0; 
    document.getElementById('listaAmigos').innerHTML = ""; 
}


