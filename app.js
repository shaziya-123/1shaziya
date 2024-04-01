let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drowGame = () => {
    msg.innerText = "game was drow. play again";
    msg.style.backgroundColor = "black"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor =  "rgb(51, 63, 59)";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you loss. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};
 
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // generate computer choice
    const compChoice = genCompchoice();
    console.log("comp choice =", compChoice);

     if (userChoice === compChoice) {
        // drow game
        drowGame();
     } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor paper
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const  userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});