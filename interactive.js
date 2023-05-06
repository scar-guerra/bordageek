


  Swal.fire({
    title: '<div style="color:#602ebe;font-size:25px;font-weight: 400; font-family:Lora, sans-serif;">Hola! Bienvenido a Bordageek! 💜</div>',
    html:'<div  style="color:#000;font-size:18px;font-weight: 400; font-family:Lora, sans-serif;">¿Por donde quieres comenzar?</div>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<div style="font-weight: 800;font-family:Lora, sans-serif; color:#fff !important;"><a style="    padding: 15px;color:#fff !important" href="/carrito.html">Ir a la Tienda! 🛍</a></div>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<div style="font-weight: 800;font-family:Lora, sans-serif;color:#fff;"><a style="    padding: 15px;color:#fff !important" href="/coleccionfav.html">Nuestros Favoritos ⭐️</a></div>',
    cancelButtonAriaLabel: 'Thumbs down',
    cancelButtonColor: '#c8aaff',
    confirmButtonColor:'#9a63fd'
  })


 let hola = document.getElementById('hola')

  function capturarNombre() {
    return new Promise(function(resolve, reject) {
      document.getElementById("formulario").onsubmit = function(event) {
        event.preventDefault(); 
        var nombre = document.getElementById("holaSaludo").value;
        resolve(nombre);
      };
    });
  }

  capturarNombre().then(function(nombre) {
    hola.innerHTML = "Hola! "+ nombre
  });
 
 

  
  // alertVentana
  
  let alertVentana = false;

  setInterval(() =>{
    document.title = 
    alertVentana ? "Bordageek" : "Bordados";

    alertVentana = !alertVentana;
  }, 2000);











