var bg,bgImage;
var  spacecraft,spacecraftImage;
var right,rightImage;
var left,leftImage;
var downImage;
var iss,issImage;
var block
function preload()
{
bgImage = loadImage("spacebg.jpg")
issImage = loadImage("iss.png")
spacecraftImage = loadAnimation("spacecraft1.png")
rightImage = loadAnimation("spacecraft4.png")
leftImage = loadAnimation("spacecraft3.png")
downImage = loadAnimation("spacecraft2.png")
}
function setup() {
  createCanvas(1300,600);
  bg = createSprite( 650,300,2600,800 )
  bg.addImage("bg",bgImage)
  bg.scale = 2.5

  iss = createSprite(650,300,50,50)
  iss.addImage("iss",issImage) 
  iss.scale = 1.5
  spacecraft = createSprite(random(0,1300),300,50,50)
  spacecraft.addAnimation("main",spacecraftImage) 
  spacecraft.addAnimation("right",rightImage) 
  spacecraft.addAnimation("left",leftImage) 
  spacecraft.addAnimation("down",downImage) 
  spacecraft.scale = 0.2
  
  block = createSprite(560,355,20,20)
block.visible  = false


}

function draw() {
 
  background(0,255,255);
  
 
  if(keyDown(RIGHT_ARROW))
  {
    spacecraft.x+=5
    spacecraft.changeAnimation("right",rightImage)
  } else{
    spacecraft.changeAnimation("main",spacecraftImage)
  }


  if(keyDown(LEFT_ARROW))
  {
    spacecraft.x-=5
    spacecraft.changeAnimation("left",leftImage)
  }  

  
  if(keyDown(DOWN_ARROW))
  {
    spacecraft.y+=5
    spacecraft.changeAnimation("down",downImage)
  }  

  if(keyDown(UP_ARROW))
  {
    spacecraft.y-=5
 
  }  
   if(spacecraft.isTouching(block))
   {
     text("Docking Successful!",588,525)
   }

  drawSprites();
}