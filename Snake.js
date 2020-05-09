class Snake{
    constructor(x,y){
        this.snakeX = [];
        this.snakeY = [];

        this.snakeX.push(x);
        this.snakeY.push(y);

        this.xdir = 0;
        this.ydir = 0;

        this.tailCount = 1;
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

    update(){
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
        
        if(this.snakeX.length >= this.tailCount){
            this.snakeX.shift();
            this.snakeY.shift();
        }

        this.snakeX.push(this.x);
        this.snakeY.push(this.y);
    }

    display(){

        for(var i = 0; i < this.tailCount; i++){
            var CY = this.snakeY[i];
            var CX = this.snakeX[i];

            fill(random(0,255));
            rect(CX, CY, 10, 10);
        }

    }
}
