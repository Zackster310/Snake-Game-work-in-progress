var move;

var snake;
var foodX;
var foodY;

var gameState;


function setup(){
    var canvas = createCanvas(800,600);

    snake = new Snake();

    gameState = "play";

    foodLoc();

    frameRate(7);
    
}

function draw(){

    if(gameState === "play"){
        background(200);

        snake.update();

        if(snake.eat(foodX,foodY)){
            foodLoc();
        }

        snake.display();

        noStroke();
        fill(255, 0, 0);
        rect(foodX, foodY, 10, 10);

        if(snake.x > 800 || snake.x < 0 || snake.y > 600 || snake.y < 0){
            gameState = "end";
        }
    }

    else if(gameState === "end"){
        background("red");
    }
}

function foodLoc(){
    foodX = floor(random(0,20))*20;
    foodY = floor(random(0,20))*20;
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
