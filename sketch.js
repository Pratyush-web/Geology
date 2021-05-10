const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup()
{
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, height, 1200, 20);
    hammer = new Hammer(10, 100);

    iron1 = new Iron(400, 500, 75, 75);
    iron2 = new Iron(200, 500, 100, 75);

    stone1 = new Stone(800, 500, 60, 120);
    stone2 = new Stone(900, 500, 120, 60);
    
    rubber1 = new Rubber(600, 500, 30);
    rubber2 = new Rubber(100, 500, 20);
    rubber3 = new Rubber(700, 500, 15);
    rubber4 = new Rubber(1050, 500, 60);
}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();

    iron1.display();
    iron2.display();

    stone1.display();
    stone2.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();     
}