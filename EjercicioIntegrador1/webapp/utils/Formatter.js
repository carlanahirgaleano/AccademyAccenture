 sap.ui.define([
      
   
],
    function () {
        "use strict";

        return {
            
            formatPeso: function(sPeso){
                var nPeso = parseFloat(sPeso)
                if(nPeso < 1 ){
                    return "Succes"
                }else if(nPeso>1 && nPeso<2){
                    return "Warning"
                }else{
                    return "Error"
                }
            },
            formatDineroAEuro: function(nDinero){
                var fDinero= parseFloat(nDinero);
               fDinero = fDinero/160
               return fDinero;
            }
           
        }



        
    }, true);