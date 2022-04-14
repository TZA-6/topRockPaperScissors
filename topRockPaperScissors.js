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
    let draw = "Draw! Try again!"
    let win = "You win!"
    let lose = "You Lose! Please try again"

    
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

//Function that asks user to for input and plays a best of 5
function game(){
    //win totals
    let playerWins = 0;
    let cpuWins = 0;
    let outcome;
    let final;
    let userInput;

    //playRound return statements
    let draw = "Draw! Try again!"
    let win = "You win!"
    let lose = "You Lose! Please try again"

    //play 5 games against computer and update wins
    for(let i = 0; i < 5; i++){
        userInput = window.prompt("Pick rock, paper, or scissors", "")
        outcome = playRound(userInput.toLowerCase(), computerPlay());
        switch(outcome){
            case win:
                playerWins++;
                break;
            case lose:
                cpuWins++;
                break;
            case draw:
                break;
            default:
                return "game default"
                break;
        }
    }
    
    //update final based on cpu and player wins
    if(playerWins > cpuWins){
        final = "player wins";
    }else if(cpuWins > playerWins){
        final = "cpu wins";
    }else{
        final = "draw";
    }
    
    return final;

}

//--------------------------------------------------
let player = "Rock";
let computer = computerPlay();
console.log(game());