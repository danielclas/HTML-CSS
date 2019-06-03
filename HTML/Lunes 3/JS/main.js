
var estado=0, modoAuto=false, interval;
window.onload=start;
    
    function cambiarColor(id, prender){
        var color='grey';
        if(prender)color=id;
        //document.querySelector('#'+id).style.backgroundColor=color;
        document.getElementById(id).style.backgroundColor=color;
    }   

    function botonCambiar(){
        console.log('Evento boton cambiar '+estado++);    

        if(estado>3)estado=0;     

         switch(estado){
            case 0:
                cambiarColor('red', true);
                cambiarColor('yellow', !true);
                cambiarColor('green', !true);
            break;
            case 1:
                cambiarColor('red', true);
                cambiarColor('yellow', true);
                cambiarColor('green', !true);
            break;
            case 2:
                cambiarColor('red', !true);
                cambiarColor('yellow', !true);
                cambiarColor('green', true);
            break;
            case 3:
                cambiarColor('red', !true);
                cambiarColor('yellow', true);
                cambiarColor('green', !true);
            break;
        }   
    }      

    function botonAuto(){

        modoAuto=!modoAuto;
        console.log(modoAuto);

        if(modoAuto){
            interval=setInterval(botonCambiar, 1500);
            ocultarBotonManual(true);            
            textoBotonAuto('Modo Manual');
        }else{
            clearInterval(interval);            
            ocultarBotonManual(false);
            textoBotonAuto('Modo Automatico');
            
        }
    }

    function ocultarBotonManual(ocultar){
        document.querySelector('#boton-cambiar').style.display=ocultar?'none':'block';
    }

    function textoBotonAuto(texto){        
        document.querySelector('#boton-auto').innerHTML=texto;
    }


    function start(){
        cambiarColor('red', true);
        cambiarColor('yellow', !true);
        cambiarColor('green', !true);
        textoBotonAuto('Modo Automatico');
    }

    

    

    

     

    