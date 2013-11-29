
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
        
        for (var xx = 0; xx < world.x; xx++){
            world.earht[xx] = [];
            for (var yy = 0; yy < world.y; yy++){
                world.earht[xx][yy] = [];
                for (var zz = 0; zz < world.z; zz++){
                    world.earht[xx][yy][zz] = 0;
                }   
            }   
        }
        
        
        for (var yy = 0; yy < world.y; yy++){
            for (var zz = 0; zz < world.z; zz++){
                for (var xx = 0; xx < world.x; xx++){
                    var dis = Math.round( Math.sqrt( Math.pow(m[0] - xx, 2) + Math.pow(m[2] - zz , 2) ) ); 
                    if(dis < (m[1] - yy )){ //distancia x menor a y -y
                        world.earht[xx][yy][zz] = 1;
                    }
                    
                }   
            }   
        }
        // crear el terreno con diferentes materias
    },
            
    step: function(){
        // recorre eles realizando paso correspondiente si es posible
        
    }
    
};

function viewy(yy){
    var canvas = document.getElementById('ejex');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var zz = 0; zz < world.z; zz++){
        for (var xx = 0; xx < world.x; xx++){
            if(world.earht[xx][yy][zz] === 1){
                context.beginPath();
                context.arc(xx, zz, 1, 0, 2 * Math.PI, false);
                context.lineWidth = 1;
                context.strokeStyle = '#003300';
                context.stroke();
            }
        }   
    }   
}

function viewz(zz){
    var canvas = document.getElementById('ejez');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var yy = 0; yy < world.y; yy++){
        for (var xx = 0; xx < world.x; xx++){
            if(world.earht[xx][yy][zz] === 1){
                context.beginPath();
                context.arc(xx, yy, 1, 0, 2 * Math.PI, false);
                context.lineWidth = 1;
                context.strokeStyle = '#003300';
                context.stroke();
            }
        }   
    }
}

function viewx(xx){
    var canvas = document.getElementById('ejey');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var yy = 0; yy < world.y; yy++){
        for (var zz = 0; zz < world.z; zz++){
            if(world.earht[xx][yy][zz] === 1){
                context.beginPath();
                context.arc(zz, yy, 1, 0, 2 * Math.PI, false);
                context.lineWidth = 1;
                context.strokeStyle = '#003300';
                context.stroke();
            }
        }   
    }
}

function view(x, y, z){
    
    viewx(x);
    viewy(y);
    viewz(z);
    
}

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