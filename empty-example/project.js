// Photos
var introPic;
var satherGatePic;
var amazonStorePic;
var upperSproulPic;
var moffitt1;
var moffitt2;
var moffitt3;
var moffittPics;
var moffittIndex;
var memorialGladePic;
var picChangeButton;
var doeLibraryPic;
var mainStacksPic;
var campanile1;
var campanile2;
var campanile3;
var campanile4;
var campanile5;
var campanilePics;
var campanileIndex;
var campanilePicButton;
var haasPic;
var endPic;

var trajan;
var fightSong;
var buttonPressSound;
var canvasX = 1750; // Normal Ratio (full-screen): 1500
var canvasY = 1000; // Normal Ratio (full-screen): 1000
var startButton;
var nextButton;
var tourStops;
var upcomingCallback;
var memorialStadiumPic;

function preload() {
  // Photos
  introPic = loadImage('media/welcome-screen.jpg');
  satherGatePic = loadImage('media/sather-gate.jpg');
  amazonStorePic = loadImage('media/amazon.png');
  upperSproulPic = loadImage('media/upper-sproul.png');
  moffitt1 = loadImage('media/moffitt-1.jpg');
  moffitt2 = loadImage('media/moffitt-2.jpg');
  moffitt3 = loadImage('media/moffitt-3.png');
  moffittPics = [moffitt1, moffitt2, moffitt3];
  memorialGladePic = loadImage('media/memorial-glade.jpg');
  doeLibraryPic = loadImage('media/doe-library.png');
  mainStacksPic = loadImage('media/main-stacks.jpg');
  campanile1 = loadImage('media/campanile-1.jpg');
  campanile2 = loadImage('media/campanile-2.jpg');
  campanile3 = loadImage('media/campanile-3.jpg');
  campanile4 = loadImage('media/campanile-4.jpg');
  campanile5 = loadImage('media/campanile-5.png');
  campanilePics = [campanile1, campanile2, campanile3, campanile4, campanile5];
  haasPic = loadImage('media/haas.jpg');
  memorialStadiumPic = loadImage('media/memorial-stadium.jpg');
  endPic = loadImage('media/end.jpg');

  

  // Fonts
  trajan = loadFont('media/Trajan.ttf');

  // Sounds
  soundFormats('mp3');
  fightSong = loadSound('media/fight-for-california.mp3');
  buttonPressSound = loadSound('media/button-press.mp3');
}

function setup() {
  createCanvas(canvasX, canvasY);
  introScreen();
}

function draw() {
  cursor('media/oski.png');
}

function introScreen() {
  image(introPic, 0, 0, canvasX, canvasY);
  textFont(trajan, 100);
  fill(color('#FDB515'));
  text('Sights & Sounds', 300, 150);
  textSize(50);
  text('of Berkeley', 850, 220);
  startButton = createButton('Start Tour');
  startButton.size(150, 50);
  startButton.position(1020, 270);
  startButton.mousePressed(startTour);
}

function startTour() {
  playButtonSound();
  fightSong.play();
  hideButton(startButton);
  satherGate();
}

function hideButton(button) {
  button.hide();
}

function playButtonSound() {
  buttonPressSound.play();
}

function createNextButton() {
  nextButton = createButton('Next Stop');
  nextButton.size(150, 50);
  nextButton.position(1530, 900);
  nextButton.mousePressed(amazonStore);
  upcomingCallback = amazonStore;
}

// Tour Stops

function satherGate() {
  image(satherGatePic, 0, 0, canvasX, canvasY);
  createNextButton();
  satherGateText();
}

function satherGateText() {
  textFont('arial', 100);
  fill(color('#FFFFFF'));
  text('Welcome to Berkeley!', 400, 110);
  textSize(50);
  fill(color('#003262'));
  text(`This is Sather Gate. Since its construction in 1910, Sather
  Gate has served as the entrance to the heart of campus`, 190, 870);
}

function amazonStore() {
  playButtonSound()
  image(amazonStorePic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(upperSproul);
  upcomingCallback = upperSproul;
  amazonStoreText();
}

function amazonStoreText() {
  fill(color('#ED4E33'));
  textSize(150);
  text('Amazon Store', 500, 190);
  textSize(50);
  fill(color('#00B0DA'));
  text(`Welcome to the Amazon Store in MLK.
  Here you can pick up all your Amazon
  packages in one of the 6 self-serve lockers.`, 500, 800);
}

function upperSproul() {
  playButtonSound()
  image(upperSproulPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(moffitt);
  upcomingCallback = moffitt;
  upperSproulText();
}

function upperSproulText() {
  fill(color('#00A598'));
  textSize(150);
  text('Sproul', 600, 190);
  textSize(50);
  fill(color('#DDD5C7'));
  text(`Next up is Upper Sproul. Home to Berkeley's
  many protests, including the FSM demonstrations.
  Be sure to check out all the student orgs tabling here.
  Oh, and good luck avoiding the flyers!`, 200, 750);
}

function moffitt() {
  playButtonSound();
  upcomingCallback = memorialGlade;
  nextButton.mousePressed(memorialGlade);
  image(moffitt2, 0, 0, canvasX, canvasY);
  moffittText();
  picChangeButton = createButton('>>>');
  picChangeButton.size(150, 50);
  picChangeButton.position(1530, 840);
  picChangeButton.mousePressed(moffittPicChange);
  moffittIndex = 1;
}

function moffittPicChange() {
  if (moffittIndex == 0 || moffittIndex == 1) {
    moffittIndex += 1;
  } else if (moffittIndex == 2) {
    moffittIndex = 0;
  }
  playButtonSound();
  image(moffittPics[moffittIndex], 0, 0, canvasX, canvasY);
}

function moffittText() {
  fill(color('#C4820E'));
  textSize(150);
  text('Moffitt Library', 500, 200);
  textSize(50);
  fill(color('#00A598'));
  text(`You've arrived at Moffitt Library. Unlike most other
  libraries, Moffitt allows eating, drinking, socializing,
  and even sleeping!`, 250, 840);
}

function memorialGlade() {
  playButtonSound();
  picChangeButton.hide();
  image(memorialGladePic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(doeLibrary);
  upcomingCallback = doeLibrary;
  memorialGladeText();
}

function memorialGladeText() {
  fill(color('#ED4E33'));
  textSize(150);
  text(`Memorial
  Glade`, 150, 200);
  textSize(50);
  fill(color('#FFFFFF'));
  text(`If you love playing spikeball, throwing a frisbee,
  or having a nice picnic on a sunny day, then Memorial Glade
  is the spot for you!`, 80, 750);
}

function doeLibrary() {
  playButtonSound();
  image(doeLibraryPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(mainStacks);
  upcomingCallback = mainStacks;
  doeLibraryText();
}

function doeLibraryText() {
  fill(color('#3B7EA1'));
  textSize(150);
  text(`Doe Library`, 150, 200);
  textSize(50);
  fill(color('#FFFFFF'));
  text(`Doe Library: The perfect spot to get some work done
  in between classes. Seeing everyone else studying is sure
  to boost your productivity.`, 300, 300);
}

function mainStacks() {
  playButtonSound();
  image(mainStacksPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(campanile);
  upcomingCallback = campanile;
  mainStacksText();
}

function mainStacksText() {
  fill(color('#00A598'));
  textSize(150);
  text(`Main Stacks`, 700, 200);
  textSize(50);
  fill(color('#46535E'));
  text(`If you prefer studying
  underground so no one can
  hear you crying, then you've
  gotta come to main stacks!`, 800, 300);
}

function campanile() {
  playButtonSound();
  upcomingCallback = haas;
  nextButton.mousePressed(haas);
  image(campanile1, 0, 0, canvasX, canvasY);
  campanileText();
  campanilePicButton = createButton('>>>');
  campanilePicButton.size(150, 50);
  campanilePicButton.position(1530, 840);
  campanilePicButton.mousePressed(campanilePicChange);
  campanileIndex = 0;
}

function campanileText() {
  fill(color('#00A598'));
  textSize(150);
  text(`Campanile`, 830, 130);
  textSize(50);
  fill(color('#003262'));
  text(`Behold our most beloved
  structure: The Campanile,
  taller than Stanfurd's
  Hoover Tower and the
  3rd tallest bell tower
  in the world!`, 840, 200);
}

function campanilePicChange() {
  if (campanileIndex == 4) {
    campanileIndex = 0;
  } else {
    campanileIndex += 1;
  }
  playButtonSound();
  image(campanilePics[campanileIndex], 0, 0, canvasX, canvasY);
}

function haas() {
  playButtonSound();
  campanilePicButton.hide();
  image(haasPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(memorialStadium);
  upcomingCallback = memorialStadium;
  haasText();
}

function haasText() {
  fill(color('#00A598'));
  textSize(100);
  text(`Haas School of Business`, 500, 100);
  textSize(40);
  fill(color('#003262'));
  text(`Watch out for the snakes!`, 1130, 140);
}

function memorialStadium() {
  playButtonSound();
  image(memorialStadiumPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(end);
  upcomingCallback = end;
  memorialStadiumText();
}

function memorialStadiumText() {
  fill(color('#FFFFFF'));
  textSize(150);
  text(`Memorial Stadium`, 300, 130);
  textSize(50);
  fill(color('#FDB515'));
  text(`Home to Cal Football, Memorial Stadium
  sits atop the Hayward Fault, making for
  some pretty shaky football games.`, 400, 200);
}

function end() {
  playButtonSound();
  image(endPic, 0, 0, canvasX, canvasY);
  upcomingCallback = end;
  endText();
  nextButton.hide();
}

function endText() {
  fill(color('#3B7EA1'));
  textSize(150);
  text(`The End`, 250, 150);
  textSize(50);
  fill(color('#00A598'));
  text(`And that concludes our campus tour. Don't forget to stop by
  the Cal Student Store and pick up your favorite merch!`, 355, 220);
  fill(color('#6C3302'));
  text(`Thanks for visiting!`, 1100, 350);
}

function keyPressed() {
  if (key == 'n' || keyCode == 32 || keyCode == RIGHT_ARROW) {
    if (upcomingCallback == undefined) {
      startTour();
    } else {
      upcomingCallback();
    }
  }
}