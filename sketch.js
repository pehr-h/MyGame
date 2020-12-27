var bg, bgImage
var santa, santaImage
var ground
var tree, treeImage, treeGroup
var gift1,gift2,gift3,gift4
var gift1Img,gift2Img,gift3Img,gift4Img

function preload(){
    bgImage = loadImage("Background.jpg")
    santaImage = loadImage("sprite santa.png")
    treeImage = loadImage("sprite tree.png")
    gift1Img = loadImage("sprite gift.png")
    gift2Img = loadImage("sprite stocking.png")
    gift3Img = loadImage("sprite snowflake.png")
    gift4Img = loadImage("sprite star.png")
}

function setup(){
    createCanvas(1800,800)
    bg = createSprite(0,200,1800,800)
    bg.addImage(bgImage)
    bg.scale = 1.3
    bg.velocityX = -2
    //ground
    ground = createSprite(900,height,3600,20)
    ground.velocityX = -2
    ground.visible = false
    //santa
    santa = createSprite(300,650,10,10)
    santa.addImage(santaImage)
    santa.scale = .03
    //tree
    treeGroup = new Group()
}

function draw(){
    background(0)
    if (bg.x<0){
        bg.x = bg.width/2
    }
    if (ground.x<0){
        ground.x = 900
    }

    santa.collide(ground)

    if (keyIsDown(UP_ARROW)){
        santa.y = santa.y-5
    }
    if (keyIsDown(DOWN_ARROW)){
        santa.y = santa.y+5
    }
    if (keyIsDown(RIGHT_ARROW)){
        santa.x = santa.x+5
    }
    if (keyIsDown(LEFT_ARROW)){
        santa.x = santa.x-5
    }

    spawnTrees();
    drawSprites();
}

function spawnTrees(){
    if (frameCount%300===0){
        tree = createSprite(1800,650,10,10)
        tree.addImage(treeImage)
        tree.velocityX = -2
        tree.scale = .2
        tree.y = random(50,670)
        tree.lifetime = 900
        treeGroup.add(tree)
    }
}

function spawnGifts(){
    
}


