// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
const imputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (!imputAmigo.value){
        alert("Debes asignar un nombre.")
        }
    listaAmigos.push(imputAmigo.value);

    ulListAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
};

function sortearAmigo (){
    const random = Math.floor((Math.random()* listaAmigos.length));
    const amigoSecreto = listaAmigos[random]
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
