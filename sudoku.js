const checkButton = document.querySelector('.check');
const valueInput = document.querySelectorAll('input')


checkButton.addEventListener('click', checkFunct);


function anadirError(row, col) {
    const input = document.getElementById('celula' + row + '-' + col);
    input.classList.add('invalida');
    input.addEventListener('input', () => {
        input.classList.remove('invalida');
    }, { once: true })
}


//Compruebo que el input está entre 1 y 9
function checkFunct() {

    //Reseteo la clase invalida para no tener que refrescar 
    for (let input of valueInput) {
        input.classList.remove('invalida');
    }


    for (const input of valueInput) {
        const validacion = input.checkValidity();

        if (validacion === false) {
            /* return */ /* Alert? */
        }
    }

    //Creo una variable para almacenar todas las lineas
    const sudoku = [];

    //Recupero todos los valores de todos los cuadros
    for (let row = 0; row < 9; row += 1) {
        const sudokuRow = []

        for (let col = 0; col < 9; col += 1) {
            const identificador = 'celula' + row + '-' + col;

            const inputCuadro = document.getElementById(identificador)
            const valor = inputCuadro.value;
            let num = '';

            //Si el valor no es vacio, transformo el valor en número
            if (valor === '') {
                num = '';
            } else {
                num = parseInt(valor, 10);
            }


            sudokuRow.push(num);  //Agrego el valor a la linea
        }

        sudoku.push(sudokuRow); //Agrego cada linea a la variable general de almacenamiento

    }


    //Compruebo que no haya numeros repetidos en cada linea
    //Recorror las lineas
    for (let row = 0; row < 9; row += 1) {
        const lista = new Set()

        //Recorro los elementos de cada linea
        for (let col = 0; col < 9; col += 1) {
            const valor = sudoku[row][col];

            //Comprobar si el valor está vacio. Si sí, no hacer nada.

            if (valor === '') {

            }
            //Si no está vacio,  compruebo si el elemento no está en mi lista 
            else {
                const valorExiste = lista.has(valor);

                if (valorExiste) {
                    console.log('Error!Se repite el número en la fila: ' + row + '/ columna: ' + col);

                    //LLamo a la funcion que añade la classe de error en los campos
                    anadirError(row, col)
                } else {
                    //si no está vacio, lo agrego a la lista 
                    lista.add(valor)
                }
            }
        }

    }

    //Recorror las columnas
    for (let col = 0; col < 9; col += 1) {
        const lista = new Set()

        //Recorro los elementos de cada columna

        for (let row = 0; row < 9; row += 1) {
            const valor = sudoku[row][col];

            //Comprobar si el valor está vacio. Si sí, no hacer nada.

            if (valor === '') {

            }
            //Si no está vacio,  compruebo si el elemento no está en mi lista 
            else {
                const valorExiste = lista.has(valor);

                if (valorExiste) {
                    console.log('Error!Se repite el número en la fila: ' + row + '/ columna: ' + col);

                    //LLamo a la funcion que añade la classe de error en los campos
                    anadirError(row, col)
                } else {
                    //si no está vacio, lo agrego a la lista 
                    lista.add(valor)
                }
            }
        }

    }


    //Indices de los cuadros
    const cuadros = [
        [
            [0, 0], [0, 1], [0, 2],  //Linea 0 , columna 0 -> Linea 0, columna 1, etc.
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2]
        ],
        [
            [0, 3], [0, 4], [0, 5],  //Linea 0 , columna 3 -> Linea 0, columna 1, etc.
            [1, 3], [1, 4], [1, 5],
            [2, 3], [2, 4], [2, 5]
        ],
        [
            [0, 6], [0, 7], [0, 8],  //Linea 0 , columna 6 -> Linea 0, columna 1, etc.
            [1, 6], [1, 7], [1, 8],
            [2, 6], [2, 7], [2, 8]
        ],
        [
            [3, 0], [3, 1], [3, 2],  //Linea 3 , columna 0 -> Linea 3, columna 1, etc.
            [4, 0], [4, 1], [4, 2],
            [5, 0], [5, 1], [5, 2]
        ],
        [
            [3, 3], [3, 4], [3, 5],  //Linea 3 , columna 3 -> Linea 3, columna 4, etc.
            [4, 3], [4, 4], [4, 5],
            [5, 3], [5, 4], [5, 5]
        ],
        [
            [3, 6], [3, 7], [3, 8],  //Linea 3 , columna 6 -> Linea 3, columna 7, etc.
            [4, 6], [4, 7], [4, 8],
            [5, 6], [5, 7], [5, 8]
        ],
        [
            [6, 0], [6, 1], [6, 2],  //Linea 6 , columna 0 -> Linea 6, columna 1, etc.
            [7, 0], [7, 1], [7, 2],
            [8, 0], [8, 1], [8, 2]
        ],
        [
            [6, 3], [6, 4], [6, 5],  //Linea 6 , columna 3 -> Linea 6, columna 4, etc.
            [7, 3], [7, 4], [7, 5],
            [8, 3], [8, 4], [8, 5]
        ],
        [
            [6, 6], [6, 7], [6, 8],  //Linea 6 , columna 6 -> Linea 6, columna 7, etc.
            [7, 6], [7, 7], [7, 8],
            [8, 6], [8, 7], [8, 8]
        ]
    ]

    //Recorror los cuadros
    for (let cuadro of cuadros) {
        const lista = new Set()

        for (let elemento of cuadro) {
            const row = elemento[0];
            const col = elemento[1];

            const valor = sudoku[row][col];

            //Comprobar si el valor está vacio. Si sí, no hacer nada.

            if (valor === '') {

            }
            //Si no está vacio,  compruebo si el elemento no está en mi lista 
            else {
                const valorExiste = lista.has(valor);

                if (valorExiste) {
                    console.log('Error!Se repite el número en la fila: ' + row + '/ columna: ' + col);

                    //LLamo a la funcion que añade la classe de error en los campos
                    anadirError(row, col)
                } else {
                    //si no está vacio, lo agrego a la lista 
                    lista.add(valor)
                }
            }
        }
    }

    //Por cada cuadro utilizo los indices para comprobar los dobles


}
