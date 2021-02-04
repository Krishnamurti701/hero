class Hero { 
    constructor(x,y,r) { 
        var options = {
            'frictionAir': 0.005,
            'density':1
            
             } 
             this.x = x;
              this.y = y;
              this.r = r;
             this.image = loadImage("images/Superhero-1.png")
             this.body = Bodies.circle(this.x,this.y,(this.r)/2,options); 
              World.add(world, this.body);
             }
              display(){
             
                var pos =this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x,pos.y)
                rotate(angle);
                ellipse(0,0, this.r);
                pop();
               
                 }
                };