function subtraction(n1, n2){
    return n1 - n2;
}

function addition(n1, n2){
    return n1 + n2;
}

function multiplication(n1, n2){
    return n1 * n2;
}

function division(n1, n2){
    return n1 / n2;
}

module.exports = {
    sub: subtraction,
    add: addition,
    mult: multiplication,
    div: division,
}