const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box13,triangle1,triangle2,triangle3,box14,box15;
var box16,box17,triangle4,triangle5,box18;


var ground;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

box1=new Box (400,240,215,130);
box2=new Box(530,209,50,200);
box3=new Box(270,209,50,200);
box4=new Box(400,158,100,35);
box5=new Box(400,111,40,60)
box6=new Box(204,240,80,130)
box7=new Box(596,240,80,130)
box8=new Box(661,209,50,200)
box9=new Box(140,209,50,200)
triangle1=Bodies.triangle(396,81,400,30,404,81);

var ground_options={
isSttatic:false
}


}

function draw() {
  background(0,0,0); 
  
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
triangle1.display()

 
  
}