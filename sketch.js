var bg, bgImage
var santa, santaImage
var ground

function preload(){
    bgImage = loadImage("Background.jpg")
    santaImage = loadImage("sprite santa.png")
}

function setup(){
    createCanvas(1200,800)
    bg = createSprite(0,400,1200,800)
    bg.addImage(bgImage)
    bg.scale = 1
    bg.velocityX = -2
    //ground
    ground = createSprite(600,700,2400,20)
    ground.velocityX = -2
    ground.visible = false
    //santa
    santa = createSprite(50,650,10,10)
    santa.addImage(santaImage)
}

function draw(){
    background(0)
    if (bg.x<0){
        bg.x = bg.width/2
    }

    if (ground.x<0){
        ground.x = 600
    }

    santa.collide(ground)
    drawSprites();
}

