
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, paper1,ground1,box2,box3;	
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	box1=new dustbin(930,380,20,100);
	box2=new dustbin(990,420,140,20);
	box3=new dustbin(1050,380,20,100);
	paper1=new paper(200,430,40);
	ground1=new ground(600,440,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box2.display();
  box1.display();
  box3.display();
  paper1.display();
  ground1.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-85});
    
  	}
}





