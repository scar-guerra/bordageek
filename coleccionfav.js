
function obtCharacter(){
    const APIRICK = 'https://rickandmortyapi.com/api/character/';
    fetch(APIRICK)
    .then((resultado)=>resultado.json())
    .then((data)=>{
        console.log(data.results);
        let tablaB = document.getElementById('rickmorty');
        const rickmorty = data.results;
        rickmorty.forEach(character =>{
            tablaB.innerHTML+=`
            <tr class="box_tb" style="vertical-align: middle;">
            <td><p style="font-family: Lora, serif;font-size:17px;">${character.name}</p></td>
            <td><p style="font-family: Lora, serif;font-size:17px;">${character.species}</p></td>
            <td>
            <img style="border-radius: 10px;width: 30%;margin: 13px;" src=${character.image}></td>
            </tr>
            `;
        })
    })
}
obtCharacter();




