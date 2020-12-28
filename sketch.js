function setup() {
  createCanvas(1200,800);

  a=createSprite(600,400,50,80);
  a.debug=true;
  b=createSprite(400,200,80,30);
  b.debug=true;
  car=createSprite(400,150,30,40);
  car.velocityX=-5;
  wall=createSprite(300,150,50,100);
}

function draw() {
  background(255,255,255); 
   b.x=World.mouseX;
   b.y=World.mouseY;
 if(isTouching(car,wall)){
 car.shapeColor="pink";
 wall.shapeColor="pink";
 }
else{
  car.shapeColor="orange";
  wall.shapeColor="grey";
}
  bounceOff(car,wall);
  drawSprites();
}
