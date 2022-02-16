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

document.getElementById("backspace").addEventListener("click", function(){
    let result = display.value;
    result = result.substring(0, result.length - 1);
    display.value = result;
})
