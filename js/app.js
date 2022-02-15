document.getElementById("calculator-btn").addEventListener("click", function(event){
   const number = event.target.innerText;

   
   const display = document.getElementById("display");
   display.value = display.value + number;

   if ( number == "AC"){
    display.value = "";
} 
})

document.getElementById("equal").addEventListener("click", function(){
    display.value = eval(display.value);
    if ( display.value == "undefined"){
        display.value = "";
    }
})
