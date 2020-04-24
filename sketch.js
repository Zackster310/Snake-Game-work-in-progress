const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var move;

var snake;
var fruit;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    world.gravity.y = 0;
    world.gravity.x = 0;

    food();

    snake = new Snake(400,300)
}

function draw(){
    //background(200);
    Engine.update(engine);

    snake.display();

    if(isTouching(snake.body,fruit)){
        World.remove(world,fruit);
        food();
    }

    if(move === left){
        left();
    }
    if(move === right){
        right();
    }
    if(move === up){
        up();
    }
    if(move === down){
        down();
    }
}

function food(){
    var rand1 = random(30,770);
    var rand2 = random(30,770);

    fruit = new Fruit(rand1,rand2);
    fruit.display();

}

function left(){
    snake.body.position.x = snake.body.position.x - 0.01;
    snake.body.position.y = snake.body.position.y;
}
function right(){
    snake.body.position.x = snake.body.position.x + 0.01;
    snake.body.position.y = snake.body.position.y;
}
function up(){
    snake.body.position.y = snake.body.position.y - 0.01;
    snake.body.position.x = snake.body.position.x;
}
function down(){
    snake.body.position.y = snake.body.position.y + 0.01;
    snake.body.position.x = snake.body.position.x;
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        move = left;
    }
    if(keyCode === RIGHT_ARROW){
        move = right;
    }
    if(keyCode === UP_ARROW){
        move = up;
    }
    if(keyCode === DOWN_ARROW){
        move = down;
    }
}
