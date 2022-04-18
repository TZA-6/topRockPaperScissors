
//Function to simulate game of Rock Paper Scissors
function computerPlay(){
    //return variables
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    //set range and find random number between 1 and range(75)
    let range = 75;
    let random = Number(Math.floor((Math.random()* range) + 1));

    //depending on the random number, return rock/paper/scissors
    if(random >= 1 && random <= 25){
        return rock;
    }else if(random >= 26 && random <= 50){
        return paper;
    }else{
        return scissors;
    }
    
}

//Function to play a round of Rock Paper Scissors
function playRound(playerSelect, compterSeleciton){
    let draw = "draw";
    let win = "win";
    let lose = "lose";

    
    switch(playerSelect.toLowerCase()){
        //Player has selected rock
        case "rock":
            switch(compterSeleciton){
                //computer has selected rock
                case "Rock":
                    return draw
                    break;
                //computer has selected paper
                case "Paper":
                    return lose
                    break;
                //computer has selected Scissors
                case "Scissors":
                    return win
                    break;
            }
            break;
        //Player has selected paper
        case "paper":
            switch(compterSeleciton){
                //computer has selected rock
                case "Rock":
                    return win
                    break;
                //computer has selected paper
                case "Paper":
                    return draw
                    break;
                //computer has selected Scissors
                case "Scissors":
                    return lose
                    break;
            }
            break;
        //Player has selected scissors
        case "scissors":
            switch(compterSeleciton){
                //computer has selected rock
                case "Rock":
                    return lose
                    break;
                //computer has selected paper
                case "Paper":
                    return win
                    break;
                //computer has selected Scissors
                case "Scissors":
                    return lose
                    break;
                default:
                    return "computer default"
                    break;
            }
            break;
        default:
            return "player default"
    }

}

//What to execute when user clicks on a button
function logSelection(e){

    //gameInfo
    const gameInfo = document.querySelector(".gameInfo");
    const gameInfoText = document.createElement("p");
    gameInfoText.classList.add("gameInfoText");


    const score = document.querySelector(".score");
    const scoreText = document.createElement("p");

    const final = document.querySelector(".final");
    const finalText = document.createElement("p");
    final.appendChild(finalText);
    
    //Simulate game
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    //based on result... execute
    if(result == "win"){
        playerWins++;
        gameNumber++;
        gameInfoText.textContent = "GAME WON";
    }else if(result == "lose"){
        cpuWins++;
        gameNumber++;
        gameInfoText.textContent = "GAME LOSS";
    }else{
        gameInfoText.textContent = "GAME DRAW";
        console.log(result);
    }
    //update gameInfo
    let child = gameInfo.lastElementChild;
    if(child){
        gameInfo.removeChild(child);
    }
    gameInfo.appendChild(gameInfoText);

    console.log(playerWins);
    console.log(cpuWins);

    //show and update score
    child = score.lastElementChild;
    if(child){
        score.removeChild(child);
    }
    scoreText.textContent = playerWins + " - " + cpuWins
    score.appendChild(scoreText);

    //Display best of 5 final
    if(playerWins === 5){
        finalText.textContent = "You won the series!";
        console.log(finalText);
        final.appendChild(finalText);
    }else if(cpuWins === 5){
        finalText.textContent = "The cpu won the series";
        final.appendChild(finalText);
    }
}
function updateResults(playerWins, cpuWins){

}

//--------------------------------------------------
//When a button is clicked, run logSelection function
let playerWins = 0;
let cpuWins = 0;
let gameNumber = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", logSelection);
});
