

let nombreuser = prompt("Bienvenid@ a Bordageek! ¿Cuál es tu nombre? 💜");

const nombreuse = document.getElementById("hola");
nombreuse.textContent = "Hola "+nombreuser;
nombreuse.style.fontSize = "30px";


console.table(bordados);

const carrito = [];

let producto = document.getElementById('bordadosdestacados');

function cardBordados(){
    for(const bordado of bordados){
        producto.innerHTML += `
        <div class="card" style="width: 20rem; border: none; margin: 2rem;">
        
          <img class="card-img-top" src=${bordado.imagen} alt="yerba mate">
        
          <div class="card-body">
        
            <h5 class="card-title">${bordado.nombre}</h5>
        
            <p class="card-text">${bordado.descripcion}</p>
        
            <p class="card-text">$ ${bordado.precio}</p>
        
            <button onclick="btnComprar()" id=btn${bordado.id} class="btn btn-primary" style="border: 1px solid #9173d2; padding: 8px 0px; box-shadow: 5px 5px #9173d26b; width: 60%; background-color: white; color: #602ebe; margin: auto;">¡Lo Quiero!</button>
        
          </div>
        
        </div>
        
        `;
    }
}
   
cardBordados();



function btnComprar(){

    carrito.push(bordados);
    alert('Se agregó al carrito 🛒');


      
alert('Encuentra las ofertas en la consola 🤩 OFERTAS MENOS DE $6.000')
let precioBajo = bordados.filter(bord => bord.precio <= 6000)

console.table(precioBajo);

}


 