const listaModa= [
    1,2,2,3,5,4,6,4,4,5,2,2,4,2,4,3,2,8,5,4,2,3,3,2,4
]

const lista1Count = {};

listaModa.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valAcumulado, nuevoVal){
       return valAcumulado[1] - nuevoVal[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];
