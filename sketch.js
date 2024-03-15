const Engine=Matter.Engine;//propociona métodos y prpiedades para controlar el comportamiento de motores
const World= Matter.World;//crear el mundo fisico y agrega objetos
const Bodies=Matter.Bodies; //crear cuerpos rígidos con formas comunes
const Body=Matter.Body

var btn1
var angle=100;

var fan,fan1,fan2,fan3

function setup() {
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    btn1=createImg('up.png')
    btn1.position(20,30)
    btn1.size(50,50)
    btn1.mouseClicked(vforce)


    var ball_options={
        restitution:0.95,
        frictionAir:0.01
    }

    var ground_option={
        isStatic:true
    }

    ball=Bodies.circle(200,50,10,ball_options)
    World.add(world,ball)

    ground=Bodies.rectangle(0,390,400,20,ground_option)
    World.add(world,ground) 

    ground1=Bodies.rectangle(100,300,100,20,ground_option)
    World.add(world,ground1)
    //Agregar actualización de centro
    rectMode(CENTER)

    fan=new Ground(50,370,50,30)
    fan1=new Ground(150,370,50,30)

    con=Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.001
    })

    World.add(world,con)
}

function draw() 
{
    background(51)
    Engine.update(engine)

   /* Matter.Body.rotate(ground1,angle)

    fill("cyan")
    ellipse(ball.position.x,ball.position.y,20)
    fill("yellow")
    rect(ground.position.x,ground.position.y,400,20)

    push()
    translate(ground1.position.x,ground1.position.y)
    rotate(angle)
    rect (0,0,100,20)
    pop()
    angle+=0.1

    fan.show()
    fan1.show()*/

    ellipse(ball.position.x,ball.position.y,10)
    push ()
    strokeWeight(2)
    stroke (255)
    line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
    pop ()
  
}

function vforce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

