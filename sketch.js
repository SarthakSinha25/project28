
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_Img,ground,tree,tree_Img,stone,slingshot
var mango1,mango2,mango3,mango4,mango5

function preload()
{
	boy_Img = loadImage("img/boy.png")
  tree_Img = loadImage("img/tree.png")
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create()
	world = engine.world;

    boy = createSprite(200,430);
    boy.addImage("boyz",boy_Img);
    boy.scale = 0.09;

    tree = createSprite(600,300,400,20);
    tree.addImage("lala..",tree_Img);
    tree.scale = 0.3;

    mango1 = new Mango(550,325,50,50);
    mango2 = new Mango(495,323,50,50);
    mango3 = new Mango(450,299,50,50);
    mango4 = new Mango(680,310,50,50);
    mango5 = new Mango(740,320,50,50);

    stone = new Stone(60,380,50,50);
    slingshot = new Slingshot(stone.body,{x:150, y:380})

  	ground = new Ground(600,490,1200,20);

    console.log(stone);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("grey");
  ground.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  // console.log(distance);
  if(distance<=mango.width+stone.width){
    Matter.Body.setStatic(mango.body,false);
  }
}

