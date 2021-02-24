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
var frisbeePic;
var snakePic;
var snakesButton;

var trajan;
var fightSong;
var buttonPressSound;
var canvasX = 1440; // Normal Ratio (full-screen): 1500
var canvasY = 830; // Normal Ratio (full-screen): 1000
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
  frisbeePic = loadImage('media/frisbee.png');
  doeLibraryPic = loadImage('media/doe-library.png');
  mainStacksPic = loadImage('media/main-stacks.jpg');
  campanile1 = loadImage('media/campanile-1.jpg');
  campanile2 = loadImage('media/campanile-2.jpg');
  campanile3 = loadImage('media/campanile-3.jpg');
  campanile4 = loadImage('media/campanile-4.jpg');
  campanile5 = loadImage('media/campanile-5.png');
  snakePic = loadImage('media/snake.png');
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
  if (upcomingCallback == doeLibrary) {
    //image(frisbeePic, mouseX, mouseY, 140, 140);
    cursor('media/114.png');
  }
}

function introScreen() {
  image(introPic, 0, 0, canvasX, canvasY);
  textFont(trajan, 110);
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
  nextButton.position(1250, 630);
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
  text('Welcome to Berkeley!', 250, 110);
  textSize(47);
  fill(color('#003262'));
  text(`This is Sather Gate. Since its construction in 1910, Sather
  Gate has served as the entrance to the heart of campus`, 85, 730);
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
  text('Amazon Store', 250, 190);
  textSize(50);
  fill(color('#00B0DA'));
  text(`Welcome to the Amazon Store in MLK.
  Here you can pick up all your Amazon
  packages in one of the 6 self-serve lockers.`, 260, 660);
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
  text('Sproul', 500, 190);
  textSize(40);
  fill(color('#DDD5C7'));
  text(`Next up is Upper Sproul. Home to Berkeley's
  many protests, including the FSM demonstrations.
  Be sure to check out all the student orgs tabling here.
  Oh, and good luck avoiding the flyers!`, 160, 630);
}

function moffitt() {
  playButtonSound();
  upcomingCallback = memorialGlade;
  nextButton.mousePressed(memorialGlade);
  image(moffitt2, 0, 0, canvasX, canvasY);
  moffittText();
  picChangeButton = createButton('>>>');
  picChangeButton.size(150, 50);
  picChangeButton.position(1250, 575);
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
  textSize(120);
  text('Moffitt Library', 380, 166);
  textSize(45);
  fill(color('#00A598'));
  text(`You've arrived at Moffitt Library. Unlike most other
  libraries, Moffitt allows eating, drinking, socializing,
  and even sleeping!`, 170, 670);
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
  textSize(135);
  text(`Memorial
  Glade`, 40, 170);
  textSize(45);
  fill(color('#FFFFFF'));
  text(`If you love playing spikeball, throwing a frisbee, or having 
  a nice picnic on a sunny day, then Memorial Glade is 
  the spot for you!`, 50, 650);
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
  textSize(130);
  text(`Doe Library`, 280, 135);
  textSize(43);
  fill(color('#FFFFFF'));
  text(`Doe Library: The perfect spot to get some
  work done in between classes. Seeing
  everyone else studying is sure
  to boost your                productivity.`, 420, 200);
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
  textSize(120);
  text(`Main Stacks`, 510, 140);
  textSize(40);
  fill(color('#46535E'));
  text(`If you prefer
  studying underground so no one can
  hear you crying, then you've gotta
            come to main stacks!`, 570, 190);
}

function campanile() {
  playButtonSound();
  upcomingCallback = haas;
  nextButton.mousePressed(haas);
  image(campanile1, 0, 0, canvasX, canvasY);
  campanileText();
  campanilePicButton = createButton('>>>');
  campanilePicButton.size(150, 50);
  campanilePicButton.position(1250, 575);
  campanilePicButton.mousePressed(campanilePicChange);
  campanileIndex = 0;
}

function campanileText() {
  fill(color('#00A598'));
  textSize(120);
  text(`Campanile`, 685, 130);
  textSize(35);
  fill(color('#003262'));
  text(`Behold our most beloved
  structure: The Campanile—
  taller than Stanfurd's
  Hoover Tower and the
  3rd tallest bell tower
  in the world!`, 710, 190);
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
  snakesButton = createButton('Reveal Snakes');
  snakesButton.size(150, 50);
  snakesButton.position(1250, 575);
  snakesButton.mousePressed(revealSnakes);
}

function revealSnakes() {
  image(snakePic, 40, 70, 100, 100);
  image(snakePic, 20, 500, 100, 100);
  image(snakePic, 90, 580, 100, 100);

  image(snakePic, 700, 650, 100, 100);
  image(snakePic, 1000, 690, 100, 100);
  image(snakePic, 1100, 710, 100, 100);
}

function haasText() {
  fill(color('#00A598'));
  textSize(80);
  text(`Haas School of Business`, 420, 100);
  textSize(27);
  fill(color('#003262'));
  text(`Watch out for the snakes!`, 990, 130);
}

function memorialStadium() {
  snakesButton.hide();
  playButtonSound();
  image(memorialStadiumPic, 0, 0, canvasX, canvasY);
  nextButton.mousePressed(end);
  upcomingCallback = end;
  memorialStadiumText();
}

function memorialStadiumText() {
  fill(color('#FFFFFF'));
  textSize(140);
  text(`Memorial Stadium`, 170, 130);
  textSize(25);
  fill(color('#FDB515'));
  text(`Home to Cal Football, Memorial Stadium
  sits atop the Hayward Fault, making for
  some pretty shaky football games.`, 410, 180);
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
  text(`The End`, 250, 130);
  textSize(30);
  fill(color('#00A598'));
  text(`And that concludes our campus tour. Don't forget to stop by
  the Cal Student Store and pick up your favorite merch!`, 400, 180);
  fill(color('#6C3302'));
  text(`Thanks for visiting!`, 800, 260);
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