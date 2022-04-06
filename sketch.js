let imgPrincipal;
let actualScreen = 0;
let imgScreenTwo;
let imgPlay;
let imgPause;
let imgNext;
let imgBack;

let sliderSong;
let sliderVolume;

let mp3;



function setup() {
  createCanvas(1280, 800);
  mp3 = new Mp3();
  imgPrincipal = loadImage('images/Principal.png')
  imgScreenTwo = loadImage('images/SecondScreen.png')
  imgPlay = loadImage('images/Play.png')
  imgPause = loadImage('images/Pause.png')
  imgNext = loadImage('images/Next.png')
  imgBack = loadImage('images/Back.png')
  

  input = createFileInput(addNewSong);
  input.position(740, 635);
  
  
// TRACK TRACE SLIDER

  sliderSong = createSlider(0,100,10,1);
  sliderSong.position(60,703);
  sliderSong.style("width","1160px");
  sliderSong.hide();

// VOLUME SLIDER

  sliderVolume = createSlider(0,100,10,1);
  sliderVolume.position(1060,750);
  sliderVolume.hide();

// SONGS 

  let song1 = loadSound('music/Be Prepared.mp3');
  let song2 = loadSound('music/Can You Feel The Love Tonight.mp3');
  let song3 = loadSound('music/Circle Of Life.mp3');
  let song4 = loadSound('music/Hakuna Matata.mp3');
  let song5 = loadSound('music/I Just Want To Be King.mp3');
  let song6 = loadSound('music/Not One Of Us.mp3');
  let song7 = loadSound('music/Remember.mp3');

  mp3.addSong(song1);
  mp3.addSong(song2);
  mp3.addSong(song3);
  mp3.addSong(song4);
  mp3.addSong(song5);
  mp3.addSong(song6);
  mp3.addSong(song7);

  mp3.addName('Be Prepared');
  mp3.addName('Can You Feel The Love Tonight');
  mp3.addName('Circle Of Life');
  mp3.addName('Hakuna Matata');
  mp3.addName('I Just Want To Be King');
  mp3.addName('Not One Of Us');
  mp3.addName('Remember');

  mp3.addPlaylist(mp3.getSongList());
}

function waitToLoad(){
  let aux = true;
  for(let i in mp3.getSongList()){
    if(!mp3.getSongList()[i].isLoaded()){
      aux = false;
    }
  }
  return aux;
}

function draw() {
  background(220);

// PAUSE AND PLAY BUTTON
 
  if(waitToLoad()){
    if(actualScreen == 0){
      input.show();
      mainTitle();
    }else if(actualScreen == 1){
      input.hide();
      currentSong();
      console.log(mp3.getIsSounding())
      if(mp3.getIsSounding() == false){
        imgPause.resize(70,70)
        image(imgPause, 640, 720);
        // mp3.setIsSounding(true);
      }else{
        imgPlay.resize(70,70)
        image(imgPlay, 640, 720);
        // mp3.setIsSounding(false);
      }
    }
  }else{
    textSize(100);
    textFont("Poppins", 25);
    text('LOADING SONGS\nPLEASE WAIT',300,300);
  }
}


function mainTitle(){
  image(imgPrincipal, 0, 0);
}

function addNewSong(file){
  if (file.type === 'audio') {
    let sound = loadSound(file);
    mp3.addName(file.name);
    mp3.addSong(sound);
  }
}

function mousePressed(){
 console.log(mouseX + ',' + mouseY);
  if(actualScreen == 0){
    if (mouseX > 276 && mouseX < 598 && mouseY > 585 && mouseY < 655 ){
      actualScreen = 1;
    }
    if(mouseX > 665 && mouseX < 1000 && mouseY > 590 && mouseY < 650){

    }
  }else if(actualScreen == 1){
    if(mouseX > 590 && mouseX < 635 && mouseY > 730 && mouseY < 770){
      console.log('back');
      mp3.stopSong();
      mp3.previousSong();
      mp3.setIsSounding(true);
      mp3.playpause();
    }
    if(mouseX > 650 && mouseX < 695 && mouseY > 730 && mouseY < 770){
      mp3.playpause();
      if(mp3.getIsSounding() == false){
        mp3.setIsSounding(true);
      }else{
        mp3.setIsSounding(false);
      }
    }
    if(mouseX > 710 && mouseX < 755 && mouseY > 730 && mouseY < 770){
      console.log('next');
      mp3.stopSong();
      mp3.nextSong();
      mp3.setIsSounding(true);
      mp3.playpause();
    }
  }
}

function currentSong() {
  sliderSong.show();
  sliderVolume.show();
  image(imgScreenTwo, 0, 0)
  imgBack.resize(70,70)
  imgNext.resize(70,70)
  
  image(imgBack, 580, 720);
  image(imgNext, 700, 720);
  

  text('Duration: '+mp3.convertDuration(mp3.getSongList()[mp3.getSounding()].duration()), 840,765);

  sliderSong.attribute('max',mp3.getSongList()[mp3.getSounding()].duration());
  sliderSong.value(mp3.getSongList()[mp3.getSounding()].currentTime());

  textSize(30);
  fill(255);
  let np = 'NaN';
  if(mp3.getNameList().length != 0){
    np = mp3.getNameList()[mp3.getSounding()];
  }
  text(np, 50, 770);

  mp3.adjustVolume(sliderVolume.value());
}