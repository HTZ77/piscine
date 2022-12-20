var a = 2
var b = 4
var action = "sub" 


function addition(){
    return a+b ;
}

function subtraction(){
    return a-b
}
function calculator(){
    if (action == "add"){
        return addition(a,b);
    }
    else {
        return subtraction (a,b)
    }
}