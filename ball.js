class Ball
{
  constructor(x, y, w,h,angle) 
  {
    let options = {
    isStatic:true,
     //restitution:0.8,
     frictionAir:0.009,
     density:1.0
    }
    
    //this.image = loadImage("building2.png")
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    //imageMode(CENTER);
    //image(this.image,0,0,this.w,this.h);
    //noStroke();
    fill(148,127,146);
    ellipse(0,0,this.w/2, this.h/2);
    pop();
  }
}


