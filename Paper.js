class Paper{

    constructor(x,y,r){
        var options={
            restitution:0.5   ,
            density :1,
            friction:1
        }
        
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
        this.r=r;


    }

    display(){

        var pos= this.body.position;

        fill("blue")
     ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.r,this.r)
    }


}