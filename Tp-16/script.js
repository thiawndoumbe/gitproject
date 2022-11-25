// // This function clear all the values
// function clearScreen() {
//   document.getElementById("result").value = "";
//   }
 
//   // This function display values
//   function display(value) {
//   document.getElementById("result").value += value;
//   }
//   // This function evaluates the expression and return result
//   function calculate() {
//   var p = document.getElementById("result").value;
//   var q = eval(p);
//   document.getElementById("result").value = q;
// 

//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    let a = document.getElementById("btn").value 
    let b = eval(a) 
    document.getElementById("btn").value = b 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("btn").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("btn").value = "" 
} 

{/* <style>
td button{width:100%}
</style>    */}

//  //fonction qui affiche la valeur
function afficher(val) 
{ 
   document.getElementById("result").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
   document.getElementById("result").value = "" 
} 


// document.getElementById("btn").addEventListener("onclick", (onclick)=>{
//     calculate()
// };            
             //let newvalu = eval(calculvalu) 
             //document.getElementById("result").value = newvalu 