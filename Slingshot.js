class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.4,
            length: 20
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
            var A=this.slingshot.bodyA.position;
            var B=this.slingshot.pointB;
            line(A.x,A.y,B.x,B.y);
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}