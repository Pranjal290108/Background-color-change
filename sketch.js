var box;
function setup() {
  createCanvas(700,350);
  box = createSprite(200,100,54,67);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("BLUE");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 2;
  }

if(keyIsDown(LEFT_ARROW)){
  background("RED");
}
drawSprites();
}




