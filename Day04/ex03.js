function fillBus(peopleAtBusStops, busSeats) {

    var peopleNbr = 0

    var busStop = 0

    let max
    for(max = 0; busStop <= busSeats && max < peopleAtBusStops.length; max++){busStop = busStop + peopleAtBusStops[max];}

    return max;

}


console.log(fillBus([1, 3, 10, 1], 12))