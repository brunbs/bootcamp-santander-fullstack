function debugError(arr, number) {
    try {
        if (!arr || !number) {
            throw new ReferenceError('Envie os parâmetros');
        }
    
        if (typeof array !== Object) {
            throw new TypeError('Array precisa ser do tipo object');
        }
    
        if (typeof number !== 'number') {
            throw new TypeError('Number precisa ser do tipo numero');
        }
    
        if(arr.length !== number) {
            throw new RangeError('Tamanho inválido');
        }

        return arr;

    } catch(e) {
        console.log(e.message);
    }
}

const array = [1, 2, 3, 4, 5];
const number = 4;

console.log(debugError(array, number));