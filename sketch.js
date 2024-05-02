// Vibartion API P5js Example
// https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API

var x;
var myButton1;
var myButton2;
var myButton3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fSize = width / 10;
  textAlign(CENTER);
  fill(255);
  textSize(fSize/2);

  myButton1 = createButton("START");
  myButton1.position(width / 2 - fSize * 4, (height / 9) * 3 - fSize);
  myButton1.size(fSize * 8, fSize * 2);
  myButton1.mousePressed(vibrationStart);
  myButton1.style("fontSize", "xx-large");
  myButton1.show();

  myButton2 = createButton("STOP");
  myButton2.position(width / 2 - fSize * 4, (height / 9) * 5 - fSize);
  myButton2.size(fSize * 8, fSize * 2);
  myButton2.mousePressed(vibrationStop);
  myButton2.style("fontSize", "xx-large");
  myButton2.show();

  myButton3 = createButton("STAR WARS");
  myButton3.position(width / 2 - fSize * 4, (height / 9) * 7 - fSize);
  myButton3.size(fSize * 8, fSize * 2);
  myButton3.mousePressed(starWars);
  myButton3.style("fontSize", "xx-large");
  myButton3.show();

  background(0);
  text("Vibration API Example", width / 2, height / 9);
}

function draw() {}

function vibrationStart() {
  background(0);
  text("navigator.vibrate(3600000); // 1h", width / 2, height / 9);
  navigator.vibrate(3600000); // 1h
}

function vibrationStop() {
  background(0);
  text("navigator.vibrate(0);", width / 2, height / 9);
  navigator.vibrate(0);
}

function starWars() {
  background(0);
  text("navigator.vibrate([500,110,500,110,", width / 2, height / 9 - fSize);
  text("450,110,200,110,170,40,450,110,200,", width / 2, height / 9 + 0);
  text("110,170,40,500,]);", width / 2, height / 9 + fSize);
  navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500,]);
}
