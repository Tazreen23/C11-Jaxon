var pathImg,runnerImg,runner,path;
var edges,left,right;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  runner=createSprite(100,100,20,20);
  runner.addImage("runner",runnerImg);
  //runner.velocityY=4;
  runner.scale=1.2;
  
  //Moving background
  path=createSprite(200,200);
  path.addAnimation("path",pathImg);
  path.velocityY=4;
  path.scale=1.2;
  edges=createEdgeSprites();
  left=createSprite(0,0,100,800);
  left.visible=false;
  right=createSprite(390,0,100,800);
  right.visible=false;
}

function draw() {
  background(0);
if (path.y>400){
  path.y=height/2;
}
runner.x=mouseX;
runner.collide(edges[3]);
runner.collide(left);
runner.collide(right);
drawSprites() 
//mouseX=1.2;

}












