var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "BLUE";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "RED";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "GREEN";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "YELLOW";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 8;
    ball.velocityY = 8;

    music. play ();

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
        ball.shapeColor = "BLUE";       
    }

    if(block2.isTouching(ball) && ball.bounceOff (block2))
    {
        ball.shapeColor = "RED";    
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))
    {
        ball.shapeColor = "GREEN";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4))
    {
        ball.shapeColor = "YELLOW";
    }

    drawSprites();
}
