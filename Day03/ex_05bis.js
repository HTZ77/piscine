function getBasketContent(nbFruits){
    var array_fruits = ["strawberry","strawberry","strawberry","apple","apple","lime","lime","peach","pear","pear"];
    console.log(array_fruits.length + " fruit(s) selected")

    if (nbFruits>array_fruits.length){
        console.log("Too many fruit(s) selected");
    }

    return array_fruits;


}