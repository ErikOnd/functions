function loopUntil(x) {

    let myArray = [0, 0, 0];

    for (let i = 2; myArray[i - 2] <= x && myArray[i - 1] <= x && myArray[i] <= x; i++) {
        myArray.push(Math.floor(Math.random() * 9))

    }
    console.log(myArray)

}



loopUntil(4)