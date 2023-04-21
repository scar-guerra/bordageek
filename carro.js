
const carrito = [];
let contenedor = document.getElementById("bordadosdestacados");

cardBordados();
function cardBordados(){
    for(const bordado of bordados){
       contenedor.innerHTML += `
        <div class="card col-sm-2" style="width: 20rem; border: none; margin: 2rem;">
        
          <img class="card-img-top" src=${bordado.imagen} alt="bordados">
        
          <div class="card-body">
        
            <h5 class="card-title">${bordado.nombre}</h5>
        
            <p class="card-text">${bordado.descripcion}</p>
        
            <p class="card-subtitle">$${bordado.precio}</p> 

            <button id='btn${bordado.id}' class="btn btn-primary" style="border: 1px solid #9173d2; padding: 8px 0px; box-shadow: 5px 5px #9173d26b; width: 60%; background-color: white; color: #602ebe; margin: auto;">¡Lo Quiero!</button>

           </div>
        </div>
      `;
    }
    bordados.forEach((bordado)=>{
      document.getElementById(`btn${bordado.id}`).addEventListener('click',()=>{
          agregarCarrito(bordado);
  });
});
}



function agregarCarrito(agregarProd){
  carrito.push(agregarProd);

  Toastify({
    text: (`${agregarProd.nombre} se agregó al carrito 💜`),
    className: "info",
    duration: 1500,
    style: {
      background: "#fff",
      width:300,
      fontSize: 17,
      fontFamily: 'Lexend',
      color: '#602ebe',
      border: '1px solid #9173d2',
      boxShadow: '5px 5px #9173d26b'
    }
  }).showToast();

  document.querySelector('.tabla').innerHTML += `
      <tr>
          <td>${agregarProd.nombre}</td>
          <td>$${agregarProd.precio}</td>
          <td>${agregarProd.descripcion}</td>
      </tr>
  `;

  let totalCarrito = carrito.reduce((acumulador,bordado)=>acumulador+bordado.precio,0);
  document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
};


let btns= document.querySelector('.btn_shop');

btns.addEventListener ('click', () => {
 if(btns = carrito){

  Toastify({
    text: ('Revisa tu Checkout! 😎'),
    className: 'btn_shop',
    duration:2000,
    style: {
      background: "#fff",
      width:300,
      fontSize: 17,
      fontFamily: 'Lexend',
      color: '#63b617',
      border: '1px solid #63b617',
      boxShadow: '5px 5px #63b61770',
    
    }
  }).showToast();

 }
 });