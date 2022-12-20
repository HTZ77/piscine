function splitOperation(operation){
    var my_array = operation.split("");
    var number1 = parseInt(operation[0]);
    var whichoperation = operation[1];
    var number2 = parseInt(operation[2]);


    var final_array = [];
    final_array.push(number1);
    final_array.push(whichoperation);
    final_array.push(number2);


    return final_array;

    console.log(final_array);
}