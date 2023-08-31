export const GuardarEnStorage = (clave, elemento) => {
    //conseguir los elementos que ya tenemos en el localStogare
    let elementos = JSON.parse(localStorage.getItem(clave))
    console.log(elementos);
    //comprobar si es un array
    if(Array.isArray(elementos)){
        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else {
        //crear un array con la nueva pelicula
        elementos = [elemento];
    }
    //guardar en el localStorage
    localStorage.setItem(clave,JSON.stringify(elementos))
    // Devolver objeto guardado

    return elemento;
}