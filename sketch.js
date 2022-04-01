let imgPrincipal;
let actualScreen = 1;
let imgScreenTwo;
let imgPlay;
let imgPause;
let imgNext;
let imgBack;

let sliderSong;
let sliderVolume;


function setup() {
  createCanvas(1280, 800);
  imgPrincipal = loadImage('images/Principal.png')
  imgScreenTwo = loadImage('images/FrameTwo.png')
  imgPlay = loadImage('images/Play.png')
  imgPause = loadImage('images/Pause.png')
  imgNext = loadImage('images/Next.png')
  imgBack = loadImage('images/Back.png')
  
  sliderSong = createSlider(0,100,10,1);
  sliderSong.position(60,703);
  sliderSong.style("width","1160px");
  sliderSong.hide();

  sliderVolume = createSlider(0,100,10,1);
  sliderVolume.position(1060,750);
  console.log(sliderSong)
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
  image(imgPrincipal, 0, 0);
}

function mousePressed(){
 // console.log(mouseX + ',' + mouseY);
  if (mouseX > 276 && mouseX < 598 && mouseY > 585 && mouseY < 655){
   actualScreen = 1;
  }
}

function currentSong() {
  sliderSong.show();
  image(imgScreenTwo, 0, 0)
  imgBack.resize(70,70)
  imgNext.resize(70,70)
  imgPause.resize(70,70)
  image(imgBack, 580, 720);
  image(imgNext, 700, 720);
  image(imgPause, 640, 720);

  textSize(50);
  fill(255);
  text("Cancion", 200, 770);

}