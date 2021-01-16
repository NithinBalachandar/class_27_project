class Rope {
 constructor(bodyAObj,pointBObj){ 
    var options={ 
        bodyA:bodyAObj,
        bodyB:constrainedBody,
        length:100      
    }
      this.rope=Constraint.create(options)
       World.add(world,this.rope) }
            display() {
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                } 
        }