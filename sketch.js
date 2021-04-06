var gameState = PLAY;
var PLAY = 1;
var END = 0;
var farm, farmImg;
var tom, tomImg, tomImg2, tom_endImg ;
var jerry, jerryImg, jerryImg2, jerry_endImg;

function preload() {
    //load the images
    farmImg = loadImage("images/garden.png");

    tomImg     = loadAnimation("images/cat1.png");
    tomImg2    = loadAnimation("images/cat2.png", "images/cat3.png");
    tom_endImg = loadAnimation("images/cat4.png");

    jerryImg     = loadAnimation("images/mouse1.png");
    jerryImg2    = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerry_endImg = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    farm = createSprite(500,400);
    farm.addImage(farmImg);
    farm.scale = 1.14;

    //create tom sprite
    tom = createSprite(880,660,20,20);
    tom.scale = 0.18;
    tom.addAnimation("sitting", tomImg);
    tom.addAnimation("walking", tomImg2);
    tom.addAnimation("happy", tom_endImg);
    tom.setCollider("rectangle",0,0,1050,900)
    //tom.debug = true;
    
    jerry = createSprite(220,640,10,10);
    jerry.scale = 0.2;
    jerry.addAnimation("holdingCheese",jerryImg);
    jerry.addAnimation("teasing",jerryImg2);
    jerry.addAnimation("end", jerry_endImg);
    jerry.setCollider("rectangle",0,0,500,770)
    //jerry.debug = true;

}

function draw() {
    background(0,0,0);
    gameState = PLAY;
    //Write condition  to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
      {
       gameState = END;
       tom.velocityX = 0;
       tom.x = 360;
       tom.changeAnimation("happy");
       jerry.changeAnimation("end");
      }
    
    //change animations
    keyPressed();

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code 
 if(keyDown(LEFT_ARROW) && gameState === PLAY){
     jerry.changeAnimation("teasing");
     jerry.frameDelay = 12;

     tom.changeAnimation("walking");
     tom.velocityX = -2;
     tom.frameDelay = 12;

 }


}
