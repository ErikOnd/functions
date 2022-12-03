// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* WRITE YOUR ANSWER HERE */
function checkArray(randomArr) {
    let result = 0;

    for (let i = 0; i < randomArr.length; i++) {
        if (randomArr[i] > 5) {
            result += randomArr[i];
        }
        return result
    }
}


/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
    {
        name: 'Pants',
        price: 50,
        id: 123,
        quantity: 4,

    },
    {
        name: 'Shoes',
        price: 30,
        id: 1234,
        quantity: 3,
    }
]




/* WRITE YOUR ANSWER HERE */
function shoppingCartTotal(shoppingCart) {

    let result = 0;

    for (let i = 0; i < shoppingCart.length; i++) {

        result += shoppingCart[i].price;
    }

    return result
}

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */
function addToShoppingCart(newItem) {

    shoppingCart.push(newItem);
    return shoppingCart.length;
}

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */
function maxShoppingCart(shoppingCart) {

    let mostExpensive = shoppingCart[0].price;

    for (let i = 0; i < shoppingCart.length; i++) {

        if (mostExpensive < shoppingCart[i].price) {
            mostExpensive = shoppingCart[i];
        }

    }
    return mostExpensive

}

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

function latestShoppingCart(shoppingCart) {

    let numberOfItems = shoppingCart.length;

    return shoppingCart[numberOfItems - 1]

}

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

function loopUntil(x) {

    let counter = 0;

    while (counter <= 3) {
        if (randomNumberArr(Math.floor(Math.random() * 9)) > x) {
            counter++;
        }
        else {
            counter = 0;
        }

    }

    return true
}

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

function average(params) {
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        if (typeof (params[i]) === 'number') {
            sum += params[i];
            counter++
        }
    }
    return sum / counter
}

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

function longest(strArr) {

    let longestWord = strArr[0];

    for (let i = 0; i < strArr.length; i++) {

        if (longestWord.length < strArr[0].length) {
            longestWord = strArr[0];
        }
    }

    return longestWord

}

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

function emailFilter(emailContent) {

    let result = !emailContent.includes("SPAM") && !emailContent.includes("SCAM");
    return result;
}

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

function daysPassed(dateParam) {

    let currentDate = new Date();

}

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */
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



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
