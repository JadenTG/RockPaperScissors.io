//      Asigning the id to the html id      //
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const feedback = document.getElementById("feedback")
const PlayAgain = document.getElementById("PlayAgain")
const Game = document.getElementById("Game")
const StartPage = document.getElementById("StartPage")
const StartButton = document.getElementById("StartButton")

var bread = ''

loaf()

//          Function to asign the buttons //
function loaf()
{
    number = Math.floor(Math.random() * 3 +1)
    console.log(number)

    if (number ==1)
    {
        bread = 'rock'
    }

    else if (number ==2)
    {
        bread = 'paper'
    }

    else if (number ==3)
    {
        bread = 'scissor'
    }
    console.log(bread)

}

//        Asigning the clicking action to the Id's        //
rock.addEventListener('click' , () => choose('rock'))
paper.addEventListener('click' , () => choose('paper'))
scissor.addEventListener('click' , () => choose('scissor'))
PlayAgain.addEventListener('click', play)
StartButton.addEventListener('click', StartTransition)


//    Function to show the console how the game works     //
function choose(option){
    var feedback = document.getElementById("feedback")
    console.log(option)
    console.log(bread)


    if (option == 'rock')
    {
        if (bread == 'rock')
        {
            feedback.textContent = 'Tie'
        }

        else if (bread == 'paper')
        {
            feedback.textContent = 'Loser'
        }

        else if (bread == 'scissor')
        {
            feedback.textContent = 'Winner'
        }
    }

    if (option == 'paper')
    {
        if (bread == 'rock')
        {
            feedback.textContent = 'Winner'
        }

        else if (bread == 'paper')
        {
            feedback.textContent = 'Tie'
        }
        
        else if (bread == 'scissor')
        {
            feedback.textContent = 'Loser'
        }
    }

    if (option == 'scissor')
    {
        if (bread == 'rock')
        {
            feedback.textContent = 'Loser'
        }

        else if (bread == 'paper')
        {
            feedback.textContent = 'Winner'
        }
        
        else if (bread == 'scissor')
        {
            feedback.textContent = 'Tie'
        }
    }
}


//    Function to show that Javascript in the console   //
function play()
{
    loaf()
    feedback.textContent = ''
}

function StartTransition()
{
    Game.style.opacity = 1;
    StartPage.style.opacity = 0; 

}