//importamos la función
const fetchData = require('../utils/fetchData');

//ruta de la API
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data => {
    //Imprimimos el número de personajes
    console.log(data.info.count);

    //volvemos a hacer la promesa de pedir algo, en este caso el personaje 1, rick
    return fetchData(`${API}${data.results[0].id}`)
})
.then(data => {
    //esperamos la promesa anterior y vemos el personaje solicitado 
    console.log(data.name)

    //volvemos a hacer la promesa, pero esta es sobre al dimensión del personaje anterior
    return fetchData(data.origin.url)
})
.then(data => {
    //vemos la dimensión del personaje
    console.log(data.dimension)
})
//en caso de un error
.catch(err => {
    console.log(err)
})