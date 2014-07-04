
world = {
    eles: [],
    x: 200,
    y: 100,
    z: 200,
    earht: [[[]]], //mundo tridimencional
    
    newl: function(l, position) { // al crearce una nueva vida
        
        if(typeof l == 'undefined' || l == null){
            l = new L();
        }
        if(typeof position == 'undefined'){
            position = [Math.floor((Math.random()*world.x)),
                        (world.y - 1),
                        Math.floor((Math.random()*world.z))];
        }
        
        for (var yy = world.y - 1; yy > 0; yy--){
            if(world.earht[position[0]][yy][position[2]] !== 0){
                position[1] = yy + 1;
                break;
            }
            
        }   
        
        l.position = position;
        this.eles.push(l);
    }

};

xyzRender = [0,0,0];

god = {
  
    createEarht: function(){
        var m = [Math.floor((Math.random()*world.x)+1), Math.floor((Math.random()*world.y)+1), Math.floor((Math.random()*world.z)+1)];
//        console.log(m);
        
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

function viewy(yy, evitaloop){
    evitaloop = (typeof evitaloop === 'undefined')? false : evitaloop;
    
    xyzRender[1] = yy;
    var canvas = document.getElementById('ejex');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var zz = 0; zz < world.z; zz++){
        for (var xx = 0; xx < world.x; xx++){
          if(world.earht[xx][yy][zz] === 1){
              context.beginPath();
              context.arc(zz, xx, 1, 0, 2 * Math.PI, false);
              context.lineWidth = 1;
              context.strokeStyle = '#088A08';
              context.stroke();
          }
        }   
    }   
    
    context.beginPath();
    context.strokeStyle = "#f00";
    context.moveTo(xyzRender[2],0);
    context.lineTo(xyzRender[2],world.x);
    context.lineWidth = 1;
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = "#0000FF";
    context.moveTo(0,xyzRender[0]);
    context.lineTo(world.z,xyzRender[0]);
    context.lineWidth = 1;
    context.stroke();
    
    if(evitaloop) return false;
    viewz(xyzRender[2], true);
    viewx(xyzRender[0], true);
    
}

function viewz(zz, evitaloop){
    evitaloop = (typeof evitaloop === 'undefined')? false : evitaloop;
    
    xyzRender[2] = zz;
    var canvas = document.getElementById('ejez');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var yy = 0; yy < world.y; yy++){
        for (var xx = 0; xx < world.x; xx++){
            if(world.earht[xx][yy][zz] === 1){
                context.beginPath();
                context.arc(xx, canvas.height- yy, 1, 0, 2 * Math.PI, false);
                context.lineWidth = 1;
                context.strokeStyle = '#f00';
                context.stroke();
            }
        }   
    }
    
    context.beginPath();
    context.strokeStyle = "#0000FF";
    context.moveTo(xyzRender[0],0);
    context.lineTo(xyzRender[0],canvas.height);
    context.lineWidth = 1;
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = "#088A08";
    context.moveTo(0,  canvas.height - xyzRender[1]);
    context.lineTo(world.z, canvas.height - xyzRender[1]);
    context.lineWidth = 1;
    context.stroke();
    
    if(evitaloop) return false;
    viewy(xyzRender[1], true);
    viewx(xyzRender[0], true);
    
}

function viewx(xx, evitaloop){
    evitaloop = (typeof evitaloop === 'undefined')? false : evitaloop;
    
    xyzRender[0] = xx;
    var canvas = document.getElementById('ejey');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var yy = 0; yy < world.y; yy++){
        for (var zz = 0; zz < world.z; zz++){
          try {
            if(world.earht[xx][yy][zz] === 1){
                context.beginPath();
                context.arc(zz, canvas.height- yy, 1, 0, 2 * Math.PI, false);
                context.lineWidth = 1;
                context.strokeStyle = '#0000FF';
                context.stroke();
            }
          }catch (e){
            console.log(xx +'-'+ yy +'-'+ zz);
            break;
          }
        }   
    }
    
    context.beginPath();
    context.strokeStyle = "#f00";
    context.moveTo(xyzRender[2],0);
    context.lineTo(xyzRender[2],canvas.height);
    context.lineWidth = 1;
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = "#088A08";
    context.moveTo(0,  canvas.height - xyzRender[1]);
    context.lineTo(world.z, canvas.height - xyzRender[1]);
    context.lineWidth = 1;
    context.stroke();
    
    if(evitaloop) return false;
    viewy(xyzRender[1], true);
    viewz(xyzRender[2], true);
    
}

function viewtop(){
  
    var canvas = document.getElementById('topview');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
  
  
    for(var l in world.eles){
      context.strokeStyle = "#000000";
      context.fillRect(world.eles[l]['position'][0],world.eles[l]['position'][2],1,1);
//      console.log(world.eles[l]);
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