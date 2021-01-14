class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            lenght: 10,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
    
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    
    }
    
    display() {
        
        strokeWeight(4);
        line(bodyA.x, body.y, bodyB.x, body.y);
    
    }
    
    }