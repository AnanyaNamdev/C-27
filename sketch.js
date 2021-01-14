
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  bob1 = new Bob(300, 400, 40);
	  bob2 = new Bob(350, 400, 40);
	  bob3 = new Bob(400, 400, 40);
	  bob4 = new Bob(450, 400, 40);
	  bob5 = new Bob(500, 400, 40);

	  roof = new Roof(400, 200, 300, 50);

	  rope1 = new Rope(roof, bob1, 0, 0);
	 // rope2 = new Rope(roof, bob2, 0, 0);
	 // rope3 = new Rope(roof, bob3, 0, 0);
	  //rope4 = new Rope(roof, bob4, 0, 0);
	  //rope5 = new Rope(roof, bob5, 0, 0);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  rope1.display();
  
  drawSprites();
 
}



