function doOperation(operation){

    var my_array = operation.split("");
    var number1 = parseInt(operation[0]);
    var whichoperation = operation[2];
    var number2 = parseInt(operation[4]);


    // Addition
    function addition(a,b){
        return a+b
    }

    // Subtraction
    function subtraction(a,b){
        return a-b
    }

    // Multiplication
    function multiplication(a,b){
        return ab
    }

    // Division
    function divide(a,b){
        if (b!=0){
            return a/b
        }else{
            console.log("Can't divide by 0");
            return null
        }
    }

    // Faire le switch avec le deuxième élement de final_array
    switch (whichoperation){
        case "+":return addition(number1, number2)
        case "-":return subtraction(number1, number2)
        case "/":return divide(number1, number2)
        case "":return multiplication(number1, number2)
        default: console.log("You enter an incorrect operation")
    }

}