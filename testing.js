function matrixGenerator(x, y) {
    let outerArray = [];
    let innerArray = [];

    for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
            innerArray.push(j + '' + i)
        }
        outerArray.push(innerArray)
        innerArray = []
    }

    return outerArray;
}

console.log(matrixGenerator(3, 2));





/*  [
    ["00","01","02"]
    ["10","11","12"]
]
  */