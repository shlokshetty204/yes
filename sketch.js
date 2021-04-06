var car,wall,thick,speed,weight;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321);
  weight=random(30,52);  
  bullet=createSprite(20, 101, 20, 10);
  thick=random(22,83)
  wall=createSprite(1200, 200,thick, height/2);
  wall.shapeColor="#808080";
  bullet.velocityX=speed;
  bullet.shapeColor="cyan"
}

function draw() {
  background(1);  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    var damage=0.5*speed*weight*speed/thick*thick*thick;
    if(damage <=10 ){
    wall.shapeColor="green";
    }
    if(damage >10 ){
     wall.shapeColor="red";
  }}

  drawSprites();
}