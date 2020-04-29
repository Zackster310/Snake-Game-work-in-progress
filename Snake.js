class Snake{
    constructor(x,y){
        var options = {
            //isStatic : true
        }

        this.body  = Bodies.rectangle(x,y,10,10,options);
        this.width = 10;
        this.height = 10;
        this.tailCount = 0;

        World.add(world,this.body);
    }

    eat(x,y){
        if(this.x === x && this.y === y){
            this.tailCount++
            return true;
        }

        else{
            return false;
        }
    }

    display(){
        var pos =this.body.position;

        for(var i = 0; i < this.tailCount; i++){
            rect(this.x,this.y,this.width, this.height);
        }


        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(random(0,255));
        strokeWeight(0.5);
        rect(0, 0, this.width, this.height);
        pop();
    }
}