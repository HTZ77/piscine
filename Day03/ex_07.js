function getFruitNameFromIndex(index) {

    if (index >= 0 && index < fruits.length) {
        return fruits[index]
    } else if (index == -1) {
        return fruits[fruits.length - 1]
    } else {
        return null
    }

    // return string
}