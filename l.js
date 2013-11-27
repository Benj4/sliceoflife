
function L(){
    var self = this;
    this.patas = [{largo : 1, fuerza : 1, angulo : 0}]; // largo en pixel, fuerza indica cuanto peso puede arrastrar, angulo es hacia donde apunta
    this.boca = {};
    this.edad = 0;
    this.cuerpo = {
        dimencion : 1,
        materiales : [[1,2],[2,2],[3,2]], // array[0] = material, array[1] = cantidad
        energia: 100
    };
    
    this.atracciones = { 
        igualpadres : false,
        igualpropias: false

    };
    
    this.preferencias = {
        
    };
    
    this.adn = {};
    this.acciones = {
        buscar : function(){}, // consume energia
        mover : function(){}, // gasta energia
        comer : function(){}, // adquiere energia y materia
        reproducir : function(){} // consume energia y material
    };
    
    
}


var l = new L();
