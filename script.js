
  function chercker(){
    var amount_input=parseInt(document.getElementById("amount").value);
    // check if number is greater than 0
    if (amount_input == 0) {
      alert("Enter Amount greater than 0");
    }

    // check if number is 0
    else if (amount_input < 0) {
    alert("Enter the positive Amount, you have entered negative value");
    
    }

    // if the field is blank 
 
}


  
 
 function calculate(){
        var amount_input=parseInt(document.
        getElementById("amount").value);

        if(amount_input.value == ""){
            alert("Enter the positive amount");
        }else{
           alert("You Entered Amount is: " +amount_input);
         }
       

        var rate_input=parseInt(document.
        getElementById("interest-rate").value);

        
        var years_input=parseInt(document.
        getElementById("years").value);
        


        years_input = document.getElementById("years").value;
    
        //Interest calculation logic

       var Interest = amount_input*rate_input*years_input/100;
       var total=Interest+amount_input;

       // In terms of addition Current year provide. 

       years_input = new Date().getFullYear()+parseInt(years_input);

        // Final output Logic 
            
       document.getElementById("output1").
       innerHTML=amount_input;

       document.getElementById("output2").
       innerHTML=rate_input;

       document.getElementById("output3").
       innerHTML=total;
       document.getElementById("output4").
       innerHTML=years_input;

 }
       
        // Range Slider Logic

        var slider = document.getElementById("interest-rate");
        var output= document.getElementById("rate");
       
        slider.oninput = function() {
        output.innerHTML = this.value;
        }

       
  


    

   
   

