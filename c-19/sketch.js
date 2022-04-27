var player, enemy;
var playerImg, enemyImg;
function preload(){
  playerImg = loadImage("imagens/player.png");
  enemyImg = loadImage("imagens/enemy.png");
}

function setup() {
  createCanvas(400, 800);
  player = createSprite(200,700,50,50);
  player.addImage(playerImg);

}

function draw() {
  background(220);

  drawSprites();
}