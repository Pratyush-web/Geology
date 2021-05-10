class Stone{
    constructor(x, y, width, height)
    {
        var options = {restitution : 0.8, friction : 0.9, density : 12};

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display()
    {
       var stonePos = this.body.position;
       var stoneAngle = this.body.angle;
       
       push();
       translate(stonePos.x, stonePos.y);
       rotate(stoneAngle);
       rectMode(CENTER);
       fill("brown");
       rect(0, 0, this.width, this.height);
       pop(); 
    }
}