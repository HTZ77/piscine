
function getIndexFromName(name) {

    if (fruits.indexOf(name) == -1) {
        // The fruit is not in the array
        return null
    } else {
        displayResult(fruits.indexOf(name))
        return fruits.indexOf(name)
    }

}