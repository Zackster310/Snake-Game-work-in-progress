var move;

var snake;
var foodX;
var foodY;


function setup(){
    var canvas = createCanvas(800,600);

    snake = new Snake(400,300);

    foodLoc();
    
}

function draw(){
    background(200);

    snake.update();

    snake.display();

    noStroke();
    fill(255, 0, 0);
    rect(foodX, foodY, 10, 10);
}

function foodLoc(){
    foodX = random(30,770);
    foodY = random(30,570);
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake.xdir = -10 ;
        snake.ydir = 0;
    }
    if(keyCode === RIGHT_ARROW){
        snake.xdir = 10;
        snake.ydir = 0;
    }
    if(keyCode === UP_ARROW){
        snake.ydir = -10;
        snake.xdir = 0;
    }
    if(keyCode === DOWN_ARROW){
        snake.ydir = 10;
        snake.xdir = 0;
    }
}
