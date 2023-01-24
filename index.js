console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let music1 = new Audio("music1.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// funtion to change turn 

const changeTurn = ()=>{
    return turn === "X"?"O": "X"
}

// Add onclick listener to reset button
document.querySelector(".reset").addEventListener('click', function reseting (){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})




// Check win 

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "30vh";
            music1.play();
            setTimeout(function (){document.querySelector(".reset").click()}, 2000)
            
        }
    })
}

// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            
            if (!isgameover){
            } 
        }
    })
})



// dark mode 

  $(document).ready(function(){
    $("#tooglenight").change(function() {
        if(this.checked) {
            $(".title").addClass("night-title")
            $(".box").addClass("night-border")
            $("body").addClass("night");
            $("i").css("color", "white");
        }else{
            $("body").removeClass("night");
            $(".title").removeClass("night-title")
            $(".box").removeClass("night-border")
            $("i").css("color", "black");
        }
    });
});