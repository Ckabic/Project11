
var jaxon, jaxon_running,edges,path,pathImg;

function preload(){
  //pre-load images
jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);

    //Moving Background
    path = createSprite(200,200);
    path.addImage(pathImg);
    path.velocityy = 4
    path.scale = 1.5

    //create jaxon sprites
    jaxon = createSprite(200,350, 50, 40)
    jaxon.addAnimation("running",jaxon_running);
    edges = createEdgeSprites();

   //set jaxson's scale
   jaxon.scale = 0.08;
}

function draw() {
  background("white");

  jaxon.x = World.mouseX;

   //reset background
   path.velocityY = 4
   if (path.y> 400) {
    path.y= height/2;
  }

    drawSprites();
}
