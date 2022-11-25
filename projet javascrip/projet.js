//  This function clear all the values
function clearScreen() {
    document.getElementById("bouton").value = "";
}


// This function display values
function display(value) {
    document.getElementById("bouton").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("bouton").value;
    var q = eval(p);
    document.getElementById("bouton").value = q;
}