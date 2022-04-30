var player, enemy, road;
var playerImg, enemyImg, roadImg;
var gameState = 1;
function preload(){
  playerImg =loadImage("imagens/player.png");
  enemyImg =loadImage("imagens/enemy.png");
  roadImg = loadImage("imagens/road.png");
}

function setup() {
  createCanvas(400, 800);
  player =createSprite(20,20,20,20);
  player =createSprite(200,700,50,50);
  player.addImage(playerImg);
  road = createSprite(0,0,400,1600);
}

function draw() {
  background(220);
  road.velocityY = 10;
  if(road.y < 800){
    road.y = 0;
  }
  if(gameState === 1){
    player.x = Mouse.x;
  }
  if(player.isTouching(enemy)){
    enemy.velocityY = 0;
    road.velocityY = 0
    enemy.lifetime = -1;
    gameState = 0
  }
  drawSprites();
}
function gerarInimigos(){
  if(frameCount % 1000){
    enemy=createSprite(Math.round(random(0,380)),0,20,20);
    enemy.addImage(enemyImg);
    enemy.lifetime = 40;
    enemy.velocityY = 10;
  }
}