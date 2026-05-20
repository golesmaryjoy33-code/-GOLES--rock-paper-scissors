let playerScore = 0;
let computerScore = 0;


function playGame(playerDisplay){

    const choices = ['rock','paper','scissors'];
    const computerDisplay = choices[Math.floor(Math.random() * 3)];

    playerDisplay = playerDisplay.toLowerCase();

    let resultText = "";
    
//determine winner
    if(playerDisplay === computerDisplay) {
        resultText = "It's a tie! ☺️";

    }else if
        (
            (playerDisplay === 'rock' && computerDisplay === 'scissors') ||
            (playerDisplay === 'paper' && computerDisplay === 'rock') ||
            (playerDisplay === 'scissors' && computerDisplay === 'paper')
    
        ) 
            {
            resultText="You Win! 🎉";
            playerScore++;
        }else{
            resultText="You Lose! 😔";
            computerScore++;

        }

//show result
    document.getElementById("result").innerText= `You chose ${playerDisplay}, Computer chose ${computerDisplay}.
                                       
    ${resultText}`;
 //update score   
    document.getElementById("score").innerText= `You: ${playerScore} | Computer: ${computerScore}`;

}
