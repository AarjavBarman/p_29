
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3;
var bb1,bb2,bb3,bb4,bb6,bb21;
var pb1,pb2,pb3,pb4,pb21,pb22,pb23;
var gb1,gb2,gb21,gb22,gb23,gb24,gb25;
var gr1;
function preload()
{
	
}

function setup() {
	createCanvas(1220, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(650,700,1300,40);
	ground2 = new ground(450,500,280,10);
	ground3 = new ground(800,410,250,10);
	bb1 = new blue(350,480,40,30);
	bb2 = new blue(390,480,40,30);
	bb3 = new blue(430,480,40,30);
	bb4 = new blue(470,480,40,30);
	bb5 = new blue(510,480,40,30);
	bb6 = new blue(550,480,40,30);
	pb1 = new pink(390,450,40,30);
	pb2 = new pink(430,450,40,30);
	pb3 = new pink(470,450,40,30);
	pb4 = new pink(510,450,40,30);
	gb1 = new green(430,420,40,30);
	gb2 = new green(470,420,40,30);
	gr1 = new grey(450,390,40,30);
	gb21 = new green(720,390,40,30);
	gb22 = new green(760,390,40,30);
	gb23 = new green(800,390,40,30);
	gb24 = new green(840,390,40,30);
	gb25 = new green(880,390,40,30);
	pb21 = new pink(760,360,40,30);
	pb22 = new pink(800,360,40,30);
	pb23 = new pink(840,360,40,30);
	bb21 = new blue(800,330,40,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();
  ground3.display();
  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();
  bb6.display();
  pb1.display();
  pb2.display();
  pb3.display();
  pb4.display();
  gb1.display();
  gb2.display();
  gr1.display();
  gb21.display();
  gb22.display();
  gb23.display();
  gb24.display();
  gb25.display();
  pb21.display();
  pb22.display();
  pb23.display();
  bb21.display();
  drawSprites();
 
}



