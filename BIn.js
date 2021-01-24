class Bin {
    constructor(x, y,height,angle) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
     this.x=x;
     this.y=y;
     this.height = height;
      this.body = Bodies.rectangle(this.x,this.y, 20, this.height, options);
      this.width = 20;
      
      Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      stroke("black");
      strokeWeight(2);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  