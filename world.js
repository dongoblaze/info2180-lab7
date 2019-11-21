"use strict";


window.onload = () =>{
    
    let search = document.getElementById("lookup");
    let lookup_city = document.getElementById("lookup_cities");
    let country = this.$("#country");
    let result = document.getElementById('result');
    
    
    search.addEventListener('click', ()=>{
        
        
       this.$.ajax("world.php", {
            method: 'GET',
            data:this.$('#country').serialize(),
            success: (data) => {
               let result = document.getElementById('result');
                
                result.innerHTML = data;
            },
        });
    });

     lookup.addEventListener('click', ()=>{
        
        this.$.ajax("world.php){
            method: "GET",
            data: country.serialize()+"&context=cities",
            success: (data)=>{
                result.innerHTML = data;

              },
         });
    });

};