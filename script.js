let playerscore = 0;
let computerscore = 0;


function playGame(playerDisplay){
    const choices = ['rock','paper','scissors'];
    const computerDisplay = choices[Math.floor(Math.random() * 3)];

    let resultText = "";

    if(playerDisplay === computerDisplay) {
        resultText = "It's a tie!☺️";

    }else if
        (
            (playerDisplay === 'rock' && computerDisplay === 'scissors') ||
            (playerDisplay === 'paper' && computerDisplay === 'rock') ||
            (playerDisplay === 'scissors' && computerDisplay === 'paper')
    
        ) 
            {
            resultText="You Win!🎉";
            playerscore ++;
        }else{
            resultText="You Lose!😔";
            computerscore ++;

        }


    document.getElementById('result').innerText= `You chose ${playerDisplay}, Computer chose ${computerDisplay}. ${resultText}`;
    document.getElementById('score').innerText= `Player: ${playerscore} | Computer: ${computerscore}`;

}
