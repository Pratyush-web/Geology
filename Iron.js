class Iron{
    constructor(x, y, width, height)
    {
        var options = {restitution : 0.8, friction : 3, density : 30};
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display()
    {
        var ironPos = this.body.position;
        var ironAngle = this.body.angle;

        push();
        translate(ironPos.x, ironPos.y);
        rotate(ironAngle);
        rectMode(CENTER);
        fill("grey");
        rect(0, 0, this.width, this.height);
        pop();
    }
}