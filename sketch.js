
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var plat;
var bin1,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new Ball(150,300,30);
	plat= new Ground(500,height,1000,30);
	bin1= new Bin(700,360,110,180);
	bin2= new Bin(900,360,110,180);
	bin3= new Bin(800,425,220,90);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  plat.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:40,y:-35})
	}
}


