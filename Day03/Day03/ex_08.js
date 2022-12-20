function getFruit(parameter) {

    if (typeof parameter == "string") {
        if (fruits.indexOf(parameter) == -1) {
            // The fruit is not in the array
            return null
        } else {
            displayResult(fruits.indexOf(parameter))
            return fruits.indexOf(parameter)
        }
    } else {
        if (parameter >= 0 && parameter < fruits.length) {
            displayResult(fruits[parameter]);
            return fruits[parameter]
        } else if (parameter == -1) {
            displayResult(fruits[fruits.length-1]);
            return fruits[fruits.length - 1]
        } else {
            return null
        }

    }

}