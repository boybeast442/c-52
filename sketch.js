var score =0;
var spaceship,ast,laser,night;

var sapceshipImg,astImg, laserImg, nightImg;

var astGroup, astGroup, laserGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
spaceship = loadImage("space ship.png")
	laserImg = loadImage("laser.png")
	astImg = loadImage("ast.jpg")
	nightImg= loadImage("night.png")
  }
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 600);

  night= createSprite(50, width/2, 100,height);
  night.addImage(nightImg)
  
  spaceship= createSprite(100, height/2, 50,50);
  spaceship.addImage(spaceImg)
  spaceship.scale=0.2
  
  laserGroup = createGroup();   
  astGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}
function draw() {
	background("#BDA297");
  
	heading.html("Life: "+life)
	heading.style('color:red'); 
	heading.position(150,20)
  
	scoreboard.html("Score: "+score)
	scoreboard.style('color:red'); 
	scoreboard.position(width-200,20)
  
 
}
if(gameState===1){
    spaceship.y=mouseY  

    if (frameCount % 80 === 0) {
      drawast();
    }

    if(keyDown("space")){
      shootlaser();
    }

    if (astGroup.collide(night)){
      handleGameover(astGroup);
    }
    }

    drawSprites();
  
    
  



function drawrast(){
  ast = createSprite(800,random(20,780),40,40);
  ast.addImage(asrBubbleImg);
  ast.scale = 0.1;
  ast.velocityX = -8;
  ast.lifetime = 400;
  astGroup.add(astbubble);
}

function shootlaser(){
  laser= createSprite(150, width/2, 50,20)
  laser.y= gun.y-20
  laser.addImage(laserImg)
  laser.scale=0.12
  laser.velocityX= 7
  laserGroup.add(laser)
}

function handleGameover(astGroup){
  
    life=life-1;
    astGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}



