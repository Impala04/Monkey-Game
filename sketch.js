
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  survivalTime=0;
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)

  
}


function draw() {
  background(rgb(100,200,300))
  survivalTime= Math.ceil(frameCount/frameRate())
  
  text('SURVIVAL TIME='+survivalTime,300,30)
  if(keyDown('space')){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.9
  if(ground.x<0){
    ground.x=ground.width/2
  }
  ofBanana()
  ofObstacles()
  
monkey.collide(ground)
  drawSprites()
  
}

function ofBanana(){
  if(frameCount % 80 === 0){
  var banana=createSprite(600,random(50,300),20,20)
  banana.addAnimation('image',bananaImage)
    banana.scale=0.1;
  banana.velocityX=-4
    banana.lifetime=200;
  }
}


function ofObstacles(){
  if(frameCount%120===0){
    var obstacle=createSprite(600,320,30,30)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-3;
    obstacle.scale=0.2;
    
  }
}



