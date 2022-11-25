



function calculate() 
  let valuSelect= document.getElementById("opera").value
  let firstValue=+document.addEventListener("value1").value
  let secondValue= +document.getElementById("value2").value
  switch (valuSelect) {
    case "ADD":
     result = firstValue + secondValue
      break;
    case "MINUS":
     result = firstValue - secondValue
      break;
    case "MULTIPLY":
     result = firstValue * secondValue
      break;
    case "DIVISION":
      result = firstValue / secondValue
        break;
    case "MODULO":
      result = firstValue % secondValue
        break;
    case "POWER":
      result = firstValue ** secondValue
        break;
      
         
  }
  


document.getElementById("opera").addEventListener('change', (event)=>{
  calculate()
})

document.getElementById("value1").addEventListener("keyup", (event)=>{
  calculate()
})
document.getElementById("value2").addEventListener("keyup", (event)=>{
  calculate()
})

