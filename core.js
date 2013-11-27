
world = {
    eles: [],
    x: 100,
    y: 50,
    z: 100,
    earht: [[[]]], //mundo tridimencional
    
    newl: function(l, position) { // al crearce una nueva vida

        this.eles.push(l);
    }

};


god = {
  
    createEarht: function(){
        var m = [Math.floor((Math.random()*world.x)+1), Math.floor((Math.random()*world.y)+1), Math.floor((Math.random()*world.z)+1)];
        console.log(m);
        for (var k = 0; k < world.z; k++){
            for (var j = 0; j < world.y; j++){
                var xx = '';
                for (var i = 0; i < world.x; i++){
                    var dis = Math.round( Math.sqrt( Math.pow(m[0] - i, 2) + Math.pow(m[1] - j , 2) ) ); 
                    if(dis < (m[2])){ //distancia x menor a z
                        xx += '|';
                    }
                    
                }   
                console.log(xx);
            }   
        }
        // crear el terreno con diferentes materias
    },
            
    step: function(){
        // recorre eles realizando paso correspondiente si es posible
        
    }
    
};

quickEach = function() {
    var jq = jQuery([1]);
    return function(c) {
        var i = -1, el, len = this.length;
        try {
            while (
                    ++i < len &&
                    (el = jq[0] = this[i]) &&
                    c.call(jq, i, el) !== false
                    )
                ;
        } catch (e) {
            delete jq[0];
            throw e;
        }
        delete jq[0];
        return this;
    };
};

god.createEarht();  