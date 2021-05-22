
var car,wall;

var speed,weight;

function setup() {
  createCanvas(600,200);
  

  car= createSprite(0,100,50,50);
  car.velocityX= 30;
  car.shapeColor="red";
  wall=createSprite(600,100,50,height/2);


}




function draw() {
  background("black");  
speed=random(55,90);
weight=random(400,1500);

if(car.isTouching(wall)){
car.velocityX=0;

}


if(car.x-wall.x<wall.width/2+car.width/2
  &&wall.x-car.x<wall.width/2+car.width/2 ){
  car.shapeColor="yellow";
}
else{


}
 



  drawSprites();
}