//Modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//función principal
const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
        //iniciamos la conexión
        const xhttp = new XMLHttpRequest();

        //se abre una conexión con el metodo, la ruta y si es asincrono
        xhttp.open('GET', url_api, true);

        //validación del llamado
        xhttp.onreadystatechange = (() => {

            //comparamos el 4, indica que la conexión esta completa
            if (xhttp.readyState === 4) {

                //estatus 200 es correcto, se verifica
                (xhttp.status === 200)

                    //si es 200
                    ? resolve(JSON.parse(xhttp.responseText))

                    //si no esta en 200
                    : reject(new Error('Error', url_api))

            }
        })
        //enviamos la petición
        xhttp.send();
    })


}
//exportamos la función
module.exports = fetchData;