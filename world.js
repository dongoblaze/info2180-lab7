"use strict";


window.onload = () =>{
    
    let search = document.getElementById("lookup");
    
    
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
};