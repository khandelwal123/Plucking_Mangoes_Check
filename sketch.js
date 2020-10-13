
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, stone, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, sling

function preload()
{
	Boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(835, 555);
	ground = new Ground(600, 895);
	stone = new Stone(92, 685);
	mango1 = new Mango(660, 515);
	mango2 = new Mango(710, 430);
	mango3 = new Mango(630, 450);
	mango4 = new Mango(780, 350);
	mango5 = new Mango(790, 450);
	mango6 = new Mango(735, 520);
	mango7 = new Mango(860, 310);
	mango8 = new Mango(870, 410);
	mango9 = new Mango(835, 520);
	mango10 = new Mango(920, 495);
	mango11 = new Mango(950, 380);
	mango12 = new Mango(995, 450);
	mango13 = new Mango(1040, 520);
	mango14 = new Mango(1080, 460);
	sling = new Sling(stone.body, {x: 92, y: 685});

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("yellow");

	image(Boy, 50, 585, 210, 330);

	tree.display();
	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();	
	mango12.display();
	mango13.display();
	mango14.display();

	stone.display();	

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);	
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);
	detectCollision(stone, mango12);
	detectCollision(stone, mango13);
	detectCollision(stone, mango14);

	drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}); 
  }
  
  function mouseReleased(){
	sling.fly();
  }
  
  function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:92, y:685});
		sling.attach(stone.body);
	}
  }

function detectCollision(object1, object2){
	mangoBody = object2.body.position
	stoneBody = object1.body.position

	var distance = dist(object2.x, object2.y, object1.x, object1.y)
 
	if(distance <= object2.r + object1.r){
		Matter.Body.setStatic(object2.body, false);
	}
}