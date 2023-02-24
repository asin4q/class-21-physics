const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, left, right, top_wall;
var ball
var button_1

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground = new Ground(200,390,400,20)
  right = new Ground(390,200,20,400)
  left = new Ground(10,200,20,400)
  top_wall = new Ground(200,10,400,20)

  var ballOptions = {
   restitution:0.95
  }
  
  ball = Bodies.circle(200,100,20, ballOptions);
  World.add(world,ball);
  
  button_1 = createImg('push.png');
  button_1.position(220,30);
  button_1.size(50,50)
  button_1.mouseClicked(Hforce)

  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  right.show();
  top_wall.show();
  left.show();

  ellipse(ball.position.x,ball.position.y,20)

  

  
}

function Hforce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  
}

