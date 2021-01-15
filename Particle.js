class Particle {
    
    constructor(x , y ,r){
        var options = {
            //restitution: 0.4,
            isStatic : false,
	}
    this.radius = r
        this.body = Bodies.circle(x, y, this.radius, options)
        
    //console.log(this.body)
        this.color = color(random(0 , 255) , random(0 , 255),random(0 , 255))
        World.add(world , this.body)
    }
    display() {
        
        var pos = this.body.position
        var angle = this.body.angle
        //push();
       // translate(pos.x , pos.y)
       // rotate(angle)
        
       // noStroke()
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(pos.x , pos.y, this.radius , this.radius)
       // pop()
    }
}