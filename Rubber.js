class Rubber{
	constructor(x, y, r)
	{
		var options = {restitution : 0.3, friction : 5, density : 1};
		this.body = Bodies.circle(x, y, r, options);
		this.x = x;
		this.y = y;
		this.r = r;
		World.add(world, this.body);
	}

	display()
	{
		var rubberPos = this.body.position;		
		
		push();
		translate(rubberPos.x, rubberPos.y);
		rotate(this.body.angle);
		ellipseMode(RADIUS);
		strokeWeight(4);
		stroke("black");
		fill("blue");
		ellipse(0, 0, this.r, this.r);
		pop();
	}
}