const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,box1,sling,polygan;



function setup(){
   createCanvas(1200,400);
  
   
   engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);
  stand1 = new Stand(700,300,190,20);
  stand2 = new Stand(1000,200,150,20);
  
  polygan = new Polygan(100,200,40,40);
  
 
  sling = new Sling(polygan.body,{x:200, y:200});
  

  //first row(stand1)
  box1 = new Box(625,255,30,40);
  box2 = new Box(655,255,30,40);
  box3 = new Box(685,255,30,40);
  box4 = new Box(715,255,30,40);
  box5 = new Box(745,255,30,40);
  box6 = new Box(775,255,30,40);
  
  //2nd row(stand1)
  box7 = new Box(655,235,30,40);
  box8 = new Box(685,235,30,40);
  box9 = new Box(715,235,30,40);
  box10= new Box(745,235,30,40);
  
  //3rd row(stand1)
  box11 = new Box(685,225,30,40);
  box12 = new Box(715,225,30,40);

  //4th row(stand1)
  box13 = new Box(700,155,30,40);


//1st row (stand2)
  box14 = new Box(940,155,30,40);
  box15 = new Box(970,155,30,40);
  box16 = new Box(1000,155,30,40);
  box17 = new Box(1030,155,30,40);
  box18 = new Box(1060,155,30,40);  

//2nd row(stand2)
  box19 = new Box(970,125,30,40);
  box20 = new Box(1000,125,30,40);
  box21 = new Box(1030,125,30,40);  

//3rd row(stand2)
box22 = new Box(1000,105,30,40);




  Engine.run(engine);
}

function draw(){
 background("pink");
  
 
 strokeWeight(4);
 ground.display();
  stand1.display();
  stand2.display();
  polygan.display();
  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();


  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

 
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygan.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


function keyPressed(){
  if(keyCode ===32){
    sling.attach(polygan.body)
  }
}