class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            
            
        }
        this.body = Bodies.circle(x, y, r, options)
        this.r = r;
        World.add(world, this.body);
    }
    display() {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        strokeWeight(3);
        fill("white")
        ellipse(0, 0, this.r*2, this.r*2);
        pop()
    }
}