var bullet,wall,Speed,weight,Width;





function setup() {
  createCanvas(1400,400);
 bullet=createSprite(50,200,10,15);
 bullet.shapeColor="white";
 Speed=random(150,250);
 weight=random(50,70);
 Width=random(22,83);
  
wall=createSprite(1300,200,Width,height/2);
wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0); 
  
 bullet.velocityX=Speed;
 fill("red")
 textSize(30);
text("Speed=" + Math.round(Speed),200,50);
fill("red")
 textSize(30);
text("Weight="+ Math.round(weight),400,50);
 
  if(hasCollided(bullet,wall)){
      bullet .velocityX=0;
   var destruction=0.5*Math.pow(Speed,2)*weight/Math.pow(Width,3);
   fill("red")
 textSize(50);
 text(Math.round(destruction),100,100)
   if(destruction>10){
     wall.shapeColor="red";
   }
   if(destruction<10){
    wall.shapeColor="green";
  }
 
   
  
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x + Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
} else{
  return false
}
}