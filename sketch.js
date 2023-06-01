
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var engine;
var bd_img;
var building,building2;
var ground;
var apartment = [];
var ball;
var rope;

function preload(){
bd_img = loadImage("backround.png")
}




function setup() {
  createCanvas(2000,800);
  

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600,12000,25);
  ball = new Ball(200,200,90,80);
  rope = new Rope(ball.body, {x:283, y:65}) // zoom got ended
  var i=0;
  for (i=0;i<6;i++){
    apartment[i]=new Building(900,100,250,400);
  }
  for (i=i;i<12;i++){
    apartment[i]=new Building(800,100,250,400);
  }
  for (i=i;i<20;i++){
    apartment[i]=new Building(700,100,250,400);
  }
  
  
}


function draw() 
{
  background("blue");
  Engine.update(engine);

  background(51);
  image(bd_img,0,0,400,700);

  ball.show();
  ground.show();

  var i=0;
  for(i=0;i<20;i++){
    apartment[i].show();
  }
  rope.display ();
}


function mouseDragged () {
 
  Matter.Body.setPosition (ball.body, {x:mouseX, y:mouseY} );
}
if(buildingIsTouching(Ground)){
  building.restitution=false;
  building.friction=false;
  building.density=false;
}
if(ballIsTouching(building)){
  building.destroy;
}

// save and run
