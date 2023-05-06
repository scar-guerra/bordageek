let nombreInput = document.getElementById('nombre');
let telefonoInput = document.getElementById('telefono')


nombreInput.oninput = () => {
  if(isNaN(nombreInput.value)){
      nombreInput.style.color='#000';
  }else{
      nombreInput.style.color = 'red';

  }

}

let boton = document.getElementById("btnForm")
     


      let formulario = document.getElementById('item');
      if (formulario ){
        boton.onclick = () =>
        
        Toastify({

            text: 'Se envió con éxito tu mensaje ✅',
            
            className: 'info',
            
            duration: 1800,
            
            style: {
            
            background: '#fff',
            
            width: 'auto',
            
            fontSize: 17,
            
            fontFamily: 'Lexend',
            
            color: '#602ebe',
            
            border: '1px solid #9173d2',
            
            boxShadow: '5px 5px #9173d26b'
            
            }
            
            }).showToast();
            
            }
      else{

        Toastify({

            text: 'Se envió con éxito tu mensaje ✅',
            
            className: 'info',
            
            duration: 1800,
            
            style: {
            
            background: '#fff',
            
            width: 'auto',
            
            fontSize: 17,
            
            fontFamily: 'Lexend',
            
            color: '#602ebe',
            
            border: '1px solid #9173d2',
            
            boxShadow: '5px 5px #9173d26b'
            
            }
            
            }).showToast();
      }