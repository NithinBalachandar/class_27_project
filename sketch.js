
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,600,50,50);
	bobObject2 = new Bob(200,600,50,50);
	bobObject3 = new Bob(300,600,50,50);
	bobObject4 = new Bob(400,600,50,50);
	bobObject5 = new Bob(500,600,50,50);
	bobObject6 = new Bob(600,600,50,50);
	roofObject1 = new Roof(400,50,800,30);
	Engine.run(engine);

	var options1 = {
		bodyA: bobObject1.body,
		bodyB: roofObject1.body,
		stiffness:0.04,
		length: 550
	}
	var options2 = {
		bodyA: bobObject2.body,
		bodyB: roofObject1.body,
		stiffness:0.04,
		length: 550
	}
	var options3 = {
		bodyA: bobObject3.body,
		pointB: {x:100,y:100},
		stiffness:0.04,
		length: 510
	}
	var options4 = {
		bodyA: bobObject4.body,
		bodyB: roofObject1.body,
		stiffness:0.04,
		length: 550
	}
	var options5 = {
		bodyA: bobObject5.body,
		bodyB: roofObject1.body,
		stiffness:0.04,
		length: 550
	}
	var options6 = {
		bodyA: bobObject6.body,
		pointB: roofObject1.body,
		stiffness:0.04,
		length: 550
	}
	var rope1 = Constraint.create(options1);
	World.add(world, rope1);

	var rope2 = Constraint.create(options2);
	World.add(world, rope2);

	var rope3 = Constraint.create(options3);
	World.add(world, rope3);

	var rope4 = Constraint.create(options4);
	World.add(world, rope4);

	var rope5 = Constraint.create(options5);
	World.add(world, rope5);

	var rope6 = Constraint.create(options6);
	World.add(world, rope6);

	};

function draw() {
  rectMode(CENTER);
  background(999);
  
  drawSprites();
roofObject1.display();	
roofObject1.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
bobObject6.display();
strokeWeight(3);
line(bobObject1.body.position.x,bobObject1.body.position.y,100,50);
line(bobObject2.body.position.x,bobObject1.body.position.y,200,50);
line(bobObject3.body.position.x,bobObject1.body.position.y,300,50);
line(bobObject4.body.position.x,bobObject1.body.position.y,400,50);
line(bobObject5.body.position.x,bobObject1.body.position.y,500,50);
line(bobObject6.body.position.x,bobObject1.body.position.y,600,50);
}