var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    cs1 = createSprite(100,590,200,20);
    cs1.shapeColor = "red";
    cs2 = createSprite(300,590,200,20);
    cs2.shapeColor = "yellow";
    cs3 = createSprite(500,590,200,20);
    cs3.shapeColor = "blue";
    cs4 = createSprite(700,590,200,20);
    cs4.shapeColor = "green";

    ball = createSprite(400,300,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 5;

    //create box sprite and give velocity

}

function draw() {
    background("lightblue");
    //create edgeSprite
    edges = createEdgeSprites(); 

    
    ball.bounceOff(edges);
    //ball.bounceOff(cs1);
    //ball.bounceOff(cs2);
    //ball.bounceOff(cs3);
    //ball.bounceOff(cs4);


    if (ball.isTouching(cs1)){
        ball.shapeColor = "red"
    }

    if (ball.isTouching(cs2)){
        ball.shapeColor = "yellow"
    }

    if (ball.isTouching(cs3)){
        ball.shapeColor = "blue"
    }

    if (ball.isTouching(cs4)){
        ball.shapeColor = "green"
    }
    music.play();


    //add condition to check if box touching surface and make it box
    drawSprites();
}
