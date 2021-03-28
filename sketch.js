var imageSize = 20;
var nImageSlider;
var picture;
var musicPicture;

function preload() {
  picture = loadImage("assets/star.png");
  musicPicture = loadImage("assets/musical_note.png");
}

function setup() {
  var myCanvas = createCanvas(window.screen.width * 0.9, 500);
  myCanvas.parent("canvas");

  imageSizeSlider = createSlider(5, 50, 20);
  imageSizeSlider.parent("sizeOfStrokesControl");

  nImageSlider = createSlider(1, 20, 5);
  nImageSlider.parent("numberOfStrokesControl");
}

function draw() {
  var colorValue = document.getElementById("head").value;
  if (mouseIsPressed) {
    if (document.getElementById("star").checked) {
      for (var i = 0; i < nImageSlider.value(); i++) {
        var imageSize = imageSizeSlider.value();
        var starX = random(
          mouseX - imageSize / 2 - 10,
          mouseX - imageSize / 2 + 10
        );
        var starY = random(
          mouseY - imageSize / 2 - 10,
          mouseY - imageSize / 2 + 10
        );
        image(picture, starX, starY, imageSize, imageSize);
      }
    } else if (document.getElementById("paint").checked) {
      noStroke();
      fill(colorValue + "80");
    } else if (document.getElementById("music note").checked) {
      for (var i = 0; i < nImageSlider.value(); i++) {
        var imageSize = imageSizeSlider.value();
        var starX = random(
          mouseX - imageSize / 2 - 10,
          mouseX - imageSize / 2 + 10
        );
        var starY = random(
          mouseY - imageSize / 2 - 10,
          mouseY - imageSize / 2 + 10
        );
        image(musicPicture, starX, starY, imageSize, imageSize);
      }
    }
  } else {
    noStroke();
    fill(255, 255, 255, 0);
  }
  for (var i = 0; i < nImageSlider.value(); i++) {
    var imageSize = imageSizeSlider.value();
    var starX = random(
      mouseX - imageSize / 2 - 10,
      mouseX - imageSize / 2 + 10
    );
    var starY = random(
      mouseY - imageSize / 2 - 10,
      mouseY - imageSize / 2 + 10
    );
    ellipse(starX, starY, imageSize, imageSize);
  }
}
