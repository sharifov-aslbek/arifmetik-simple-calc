let firstInput = document.querySelector(".first")
let btns = document.querySelectorAll(".btns button")
let twoInput = document.querySelector(".two")
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector(".btn4")
let h1 = document.querySelector("h1")
let result = 0
btn1.addEventListener("click" , () => {
   result += parseInt(firstInput.value)
   result += parseInt(twoInput.value)
   h1.append(result) 
} )
btn2.addEventListener("click" , () => {
   let num = firstInput.value - twoInput.value
   if(h1.textContent) {
      h1.textContent = num
   } else {
      h1.textContent = num
   }
   // h1.append(result) 
} )
btn3.addEventListener("click" , () => {
   let num1 = firstInput.value * twoInput.value
   h1.textContent = num1
   // h1.append(result) 
} )
btn4.addEventListener("click" , () => {
   let num1 = firstInput.value / twoInput.value
   h1.textContent = num1
   // h1.append(result) 
} )