
    function calculate(){
        var amount_input=parseInt(document.
        getElementById("amount").value);


        var rate_input=parseInt(document.
        getElementById("interest-rate").value);

        var years_input=parseInt(document.
        getElementById("years").value);

        years_input = document.getElementById("years").value;

    


       var Interest = amount_input*rate_input*years_input/100;
       var total=Interest+amount_input;
        years_input = new Date().getFullYear()+parseInt(years_input);

       function updateRate() 
        {
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval;
        }


       document.getElementById("output1").
       innerHTML=amount_input;

       document.getElementById("output2").
       innerHTML=rate_input;

       document.getElementById("output3").
       innerHTML=total;
       document.getElementById("output4").
       innerHTML=years_input;

    }

    var rate = document.getElementById("interest-rate");
        output.innerHTML = rate.value;
        rate.oninput = function() {
        output.innerHTML = this.value;
        }

    

   
   

