class Building
{
  constructor(x, y, w,h,angle) 
  {
    let options = {
    // isStatic:true,
     restitution:0.8,
     friction:1.0,
     density:0.04,
    };
    
    this.image = loadImage("building2.png")
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
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    //noStroke();
    //fill(148,127,146);
    //rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}