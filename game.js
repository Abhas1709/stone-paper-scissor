let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msgg = document.getElementById("msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara  = document.querySelector("#comp-score");




const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIx = Math.floor(Math.random() * 3);
  return options[randIx];
};

const showWinner = (userwin) => {
  if (userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    console.log("you are won");
    msgg.innerText = "you win";
    msgg.style.backgroundColor = "#00FF00";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    console.log("you loose");
    msgg.innerText = " you loose";
    msgg.style.backgroundColor = "#880808";
  }
};

const draw = () => {
  console.log("game is drwan ");
  msgg.innerText = "Game is drawen";
  msgg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
  console.log("userchoice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
