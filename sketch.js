var garden , gardenImg;
var cat , catImgSiting , catImgWalking , catImgLast;
 var mouse , mouseImgCheese , mouseImgTeasing , mouseImgLast;

function preload() {
    //load the images here
   gardenImg=loadImage("images/garden.png");
   catImgSiting=loadImage("images/cat1.png");
   catImgWalking=loadAnimation("images/cat2.png","images/cat3.png");
   catImgLast=loadAnimation("images/cat4.png"); 
   mouseImgCheese=loadImage("images/mouse1.png");
   mouseImgTeasing=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImgLast=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(985,585);
    //creating background
    garden=createSprite(470,300);
    garden.addImage(gardenImg);
    garden.scale=1
    //create tom and jerry sprites here
   cat=createSprite(850,500);
   cat.addImage("catS",catImgSiting);
   cat.scale=0.13;
   cat.debug=false;
   cat.setCollider("rectangle",0,0,1400,800)

   mouse=createSprite(150,500);
   mouse.addImage("mouseC",mouseImgCheese);
   mouse.scale=0.15;
   mouse.debug=true;
   mouse.setCollider("rectangle",0,0,800,800);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(keyCode==="LEFT_ARROW"){
        keyPressed();
           }
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catL",catImgLast);
      cat.changeAnimation("catL");
      mouse.addAnimation("mouseL",mouseImgLast);
      mouse.changeAnimation("mouseL");
    }
    
    
    
    
    
    drawSprites();
    
    
}


function keyPressed(){

  cat.velocityX=-5;
  cat.addAnimation("catW",catImgWalking);
  cat.changeAnimation("catW");
  mouse.addAnimation("mouseT",mouseImgTeasing);
  mouse.changeAnimation("mouseT");
  mouse.scale=0.09;
}
