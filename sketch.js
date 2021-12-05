var canvas,bg;
var together;
var tom,tomImg1,tomImg2,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg4;

function preload() {
    //carga aquí las imágenes
    bg = loadImage("imagenes/garden.png");
    tomImg1 = loadImage("imagenes/tomOne.png");      
    tomImg2 = loadAnimation("imagenes/tomTwo.png","imagenes/tomThree.png");
    tomImg4 = loadImage("imagenes/tomFour.png");
    jerryImg1 = loadImage("imagenes/jerryOne");
    jerryImg2 = loadAnimation("imagenes/garden.png","imagenes/jerryThree.png");
    jerryImg4 = loadImage("imagenes/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addImage("tomSleepy",tomImg1) 
    tom.scale = 0.25
    
    jerry = createSprite(200,600)
    jerry.addImage("jerrystanding",jerryImg1);
    jerry.scale = 0.15
}

function draw() {
    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.addImage("tomlastimg",)
        tom.scale = 0.25
        tom.x = 300
        tom.changeImage("tomSitting");
        
        jerry.addImage("jerrylastimg",)
        jerry.scale = 0.15
        jerry.changeImage("tomSitting");
    }

    drawSprites();
}


function keyPressed(){

if(keyCode === lEFT_ARROW){
    jerry.addAnimation("jerrytasing",jerryImg2);  
    jerry.changeAnimation("jerrytasing");
    jerry.frameDelay = 25;

    tom.addAnimation("tomchasing",jerryImg2);  
    tom.changeAnimation("tomchasing");
    tom.velocityX = -5
    }    
}