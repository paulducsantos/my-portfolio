var click = 0;
nostart = true;
var gameImages = document.getElementsByClassName("game-image");

function add_clicks(id) {
  if (nostart) {
    return;
  }
  else if (this.id === "clicked") {
    alert("Already Clicked!");
  } else {
    click += 1;
    console.log(click);
    document.getElementById(this.id).id = "clicked";
  };
};

function changeImage(id) {
  console.log(this.id);
  document.getElementById(this.id).src = "../static/images/pokeball.jpg";
}

function gameStart() {
  click=0;
  nostart = false;
  var pokeballs = document.getElementsByTagName("img");
  var identify = [];
  for (var i = 1; i < pokeballs.length; i++) {
    identify.push(pokeballs[i].id);
  };
  for (var i = 0; i < identify.length; i++) {
    document.getElementById(identify[i]).src = "../static/images/" + identify[i] + ".png";
  };
}

function gameEnd() {
  alert("Game has ended! Your score is " + click)
};

for (i=0; i < gameImages.length; i++) {
  gameImages[i].addEventListener("click", changeImage);
  gameImages[i].addEventListener("click", add_clicks);
} ;