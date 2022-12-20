function getBasketContent() {
    var arrayfruits = ["strawberry","strawberry","strawberry","apple","apple","lime","lime","peach","pear","pear" ]

    console.log(arrayfruits.length + " Fruit(s) selected")
    return arrayfruits
}



if (typeof getBasketContent === "function") {
    const fruits = getBasketContent()
    showMyBasket(fruits)
}