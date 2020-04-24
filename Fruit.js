class Fruit{
    constructor(x,y){
        var options = {
            //isStatic : true
        }

        this.body  = Bodies.rectangle(x,y,10,10,options);
        this.width = 10;
        this.height = 10;

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        strokeWeight(0.5);
        rect(0, 0, this.width, this.height);
        pop();
    }
}