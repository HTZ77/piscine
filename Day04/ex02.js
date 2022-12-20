function findHousing(housingToFind, housingList) {
    var compteur = 0
    var result = 0
    while (compteur < housingList.length) {
        if (housingToFind.toLowerCase() == housingList[compteur].toLowerCase()) {
            housingToFindUpperCase = housingToFind.charAt(0).toUpperCase() + housingToFind.slice(1).toLowerCase();
            result = [compteur, housingToFindUpperCase]
        }
        compteur++
    }
    if (result == 0) {
        return null
    } else {
        return result
    }
}
