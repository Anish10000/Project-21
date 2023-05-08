const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, leftwall, rightwall;
var ball, ball_options;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball_options = {
   density:1.19, friction:0

  }
  
  ball = Bodies.circle(100,100,15, ball_options);
  World.add(world,ball);


  ground = new Ground(400,380,800,10);
  leftwall = new Ground(500,325,10,100);
  rightwall = new Ground(650,325,10,100);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

   
 
 
  ground.display();
  leftwall.display();
  rightwall.display();

  ellipse(ball.position.x, ball.position.y, 15);
}


function keyPressed(){
  if(keyCode == UP_ARROW){
   Matter.Body.applyForce(ball, {x:0, y:0}, {x:20, y:-50})
  }
}


