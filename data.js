const numAleatorio = numMax =>
    Math.trunc(Math.random() * numMax + 1)



const importarInfo = async () => {
    //Recupero la informacion del fichero JSON
    //Creo un objeto a partir de esa informacion en el JSON

    const cuadrillos = await fetch("info.json")
        .then(response => {
            if (response.ok === true) {
                return response.json()
            } else {
                return Promise.reject("El fichero no se ha encontrado")
            }
        })




    //Seleccionar de forma aleatoria un cuadrillo en la lista
    const numCuadrillo = numAleatorio(cuadrillos.length);
    const sudoku = cuadrillos[numCuadrillo - 1];
    const cuadrillo = sudoku.numeros;

    console.log(sudoku);

    //Recorro los elementos de cada linea y columna del tablero
    for (let row = 0; row < 9; row += 1) {

        for (let col = 0; col < 9; col += 1) {

            const valor = cuadrillo[row][col];

            //Por cada campo, si hay un valor, hacer el campo no modificable.
            if (valor !== null) {

                const identificador = 'celula' + row + '-' + col;
                const inputCuadro = document.getElementById(identificador)
                inputCuadro.readOnly = true;

                //Le asigno el valor al campo
                inputCuadro.value = valor;
            }
        }
    }

    //Y si no hay, no hacer nada

}

importarInfo(); 