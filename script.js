let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
msg.innerText = "game was draw!";   
msg.style.backgroundColor = "#081b31";
}  

const showWinner =(userwin,userChoice,compChoice)  => {
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =`you lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    if(userScore==100){
            msg.innerText=`congress You got the 100 point with ${userChoice}`;
        }
}

const playGame = (userChoice)=> {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice=== "Rock"){
            // Scissors,Paper
            userwin = compChoice === "Paper" ? false :true;
        }else if(userChoice === "Paper"){
            // Rock,Scissors
            userwin = compChoice === "Scissors"? false :true;
        }else{
            // Paper,Rock
            userwin = compChoice === "Rock"? false:true;
        }
        showWinner(userwin ,userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ResetButtons = document.querySelectorAll(".reset");
    ResetButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            userScore = 0;
            compScore = 0;
            userScorepara.innerText = userScore;
            compScorepara.innerText = compScore;
            msg.innerText = "Play your move!";
            msg.style.backgroundColor = "#081b31";
        });
    });
});

