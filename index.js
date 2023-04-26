var score = 0;
var totalFruits = 20;

function createFruit() {
  var fruit = document.createElement("img");
  fruit.setAttribute("src", "images.jpg");
  fruit.setAttribute("width", "50");
  fruit.setAttribute("height", "50");
  fruit.setAttribute("class", "fruit");
  fruit.style.left = Math.floor(Math.random() * 450) + "px";
  fruit.style.top = Math.floor(Math.random() * 350) + "px";
  document.getElementById("container").appendChild(fruit);
}

function collectFruit(event) {
  if (event.target.classList.contains("fruit")) {
    event.target.parentNode.removeChild(event.target);
    score++;
    document.getElementById("score").innerHTML = score;
    if (score === totalFruits) {
      alert("Kazandınız!");
    }
  }
}

for (var i = 0; i < totalFruits; i++) {
  createFruit();
}

document.addEventListener("click", collectFruit);
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
    event.preventDefault();
  }
});

