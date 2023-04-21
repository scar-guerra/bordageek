const bordados = [{
    id: 1,

    nombre: "Vulpix",

    imagen: "img/poke1.jpeg",

    descripcion: "Tamaño: 18 cms",

    precio: 5500
},
{
    id: 2,

    nombre: "Coraje",

    imagen: "img/Coraje.jpeg",

    descripcion: "Tamaño: 23 cms",

    precio: 10000 
},
{
    id: 3,

    nombre: "BB-8",

    imagen: "img/star_wars.jpeg",

    descripcion: "Tamaño: 14 cms",

    precio: 3500
},
{
    id: 4,

    nombre: "Snoopy",

    imagen: "img/snoopy.jpeg",

    descripcion: "Tamaño: 10 cms",

    precio: 2000
}

]


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const bordado of bordados) {
    guardarLocal(bordado.id, JSON.stringify(bordado));
}

guardarLocal("listaProd", JSON.stringify(bordados));
