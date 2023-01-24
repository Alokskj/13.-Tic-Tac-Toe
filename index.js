
// music files
let music1 = new Audio("music1.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let stike = new Audio("strike.mp3");

// initail values

let click = 0;
let xwins = 0;
let owins = 0;
let xstrike = 0;
let ostrike = 0;
let isgameover = false;
let strikeTrigger = "false";

// turning function

let x_y = ["X", "O"];
function Pturn() {
  let i = Math.floor(Math.random() * 2);
  let value = x_y[i];
  return value;
}
let turning = Pturn();

function changeTurn() {
  return turning === "X" ? "O" : "X";
}

// Add onclick listener to reset button

document.querySelector(".reset").addEventListener("click", function reseting() {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  turning = Pturn();
  click = 0;
  isgameover = false;
  strikeTrigger = "false";
});

// Check win

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === "X" &&
      boxtext[e[1]].innerText === "X" &&
      boxtext[e[2]].innerText === "X" &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "30vh";
        music1.play();
        setTimeout(function () {
            document.querySelector(".reset").click();
        }, 2000);
      xwins++;
      xstrike++;

      document.querySelector(".xwins").innerHTML = "X = " + xwins;

      // win strike for x

      if (xstrike === 3) {
        strikeTrigger = "true";
        if (strikeTrigger === "true") {
          stike.play();
          strikeTrigger = "false";
          xstrike = 0;
        }
      }
    } else if (
      boxtext[e[0]].innerText === "O" &&
      boxtext[e[1]].innerText === "O" &&
      boxtext[e[2]].innerText === "O" &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "30vh";
      music1.play();

      setTimeout(function () {
        document.querySelector(".reset").click();
      }, 2000);
      owins++;
      ostrike++;

      document.querySelector(".owins").innerHTML = "O = " + owins;
      // win strike for O

      if (ostrike === 3) {
        strikeTrigger = "true";
        if (strikeTrigger === "true") {
          stike.play();
          strikeTrigger = "false";
          ostrike = 0;
        }
      }
    }
  });
};

// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turning;
      turning = changeTurn();
      audioTurn.play();
      checkWin();
      click++;
      if ((click === 9) & (isgameover === false)) {
        gameover.play();
        setTimeout(function () {
          document.querySelector(".reset").click();
        }, 500);
      }
    }
  });
});

// dark mode

$(document).ready(function () {
  $("#tooglenight").change(function () {
    if (this.checked) {
     
      $(".box").addClass("night-border");
      $(".stats").addClass("night-title");
      $("nav").addClass("night-nav");
      $("body").addClass("night");
      $("i").css("color", "white");
    } else {
        $("body").removeClass("night");
       
        $(".stats").removeClass("night-title");
        $("nav").removeClass("night-nav");
      $(".box").removeClass("night-border");
      $("i").css("color", "black");
    }
  });
});


// welcome message

console.log("Welcome to Tic Tac Toe");