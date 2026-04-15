let playerscore = 0;
let computerscore = 0;


function playGame(playerDisplay){
    const choices = ['rock','paper','scissors'];
    const computerchoices = choices[Math.floor(Math.random() * 3)];

    let resultDisplay = "";

    if(playerDisplay === computerDisplay) {
        resultDisplay= "It's a tie!☺️";

    }else if
        (
            (playerDisplay === 'rock ' && computerDisplay === 'scissors') ||
            (playerDisplay === 'paper' && computerDisplay === 'rock') ||
            (playerDisplay === 'scissors' && computerDisplay === 'paper')
    
        ) 
            {
            resultDisplay="You Win!🎉";
            playerscore++;
        }else{
            resultDisplay="You Lose!😔";
            computerscore++;

        }


    document.getElementById('result').innerText= `You chose ${playerDisplay}, Computer chose ${computerDisplay}. ${resultDisplay}`;
    document.getElementById('score').innerText= `Player: ${playerscore} | Computer: ${computerscore}`;

}
