const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,200,50,50);
    box2 = new Box(1000,100,50,50);
    box3 = new Box(1000,300,50,50);
    box4 = new Box(1000,400,50,50);
   
    box5 = new Box(950,200,50,50);
    box6 = new Box(950,100,50,50);
    box7 = new Box(950,300,50,50);
    box8 = new Box(950,400,50,50);

    box9 = new Box(900,200,50,50);
    box10 = new Box(900,100,50,50);
    box11= new Box(900,300,50,50);
    box12 = new Box(900,400,50,50);

    ball = new Ball(200,500,70,70);

    rope = new Rope(ball.body,{x:500,y:200});
    
    ground = new Ground(800,height,1600,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
    ball.display();
    rope.display();

    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

