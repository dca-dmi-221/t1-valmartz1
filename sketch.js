let imgPrincipal;
let actualScreen = 0;
let imgScreenTwo;
let imgPlay;
let imgPause;
let imgNext;
let imgBack;


function setup() {
  createCanvas(1280, 800);
  imgPrincipal = loadImage('images/Principal.png')
  imgScreenTwo = loadImage('images/FrameTwo.png')
  imgPlay = loadImage('images/Play.png')
  imgPause = loadImage('images/Pause.png')
  imgNext = loadImage('images/Next.png')
  imgBack = loadImage('images/Back.png')
  
}

function draw() {
  background(220);
 
  if(actualScreen == 0){
    mainTitle();
  }else if(actualScreen == 1){
    currentSong();
  }
}


function mainTitle(){
  image(imgPrincipal, 0, 0)
}

function mousePressed(){
 // console.log(mouseX + ',' + mouseY);
  if (mouseX > 276 && mouseX < 598 && mouseY > 585 && mouseY < 655){
   actualScreen = 1;
  }
}

function currentSong() {
  image(imgScreenTwo, 0, 0)
  image(imgBack, 630, 700);
  image(imgNext, 650, 700);
  image(imgPause, 640, 700);
}