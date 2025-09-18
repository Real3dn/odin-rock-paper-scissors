console.log("haiiiii")
function getBotChoice ()
{
    let choice = Math.floor(Math.random()*10)
    if (choice<=3)
        {
    return "rock"
        }
    if (choice >3 && choice <=6)
    {
        return "paper"
    }
    return "scissors"
}

function getHumanChoice()
{
    let choice = prompt("Please Enter Your Choice: ")
    return choice.toLowerCase()
}
let humanScore=0
let botScore=0
function playRound(humanChoice, botChoice)
{
    console.log("=============================")
    console.log("The player chose: " + humanChoice)
    console.log("The bot chose: " + botChoice)
    if (humanChoice===botChoice)
    {
        alert("DRAW!")
        console.log("DRAW!")
    }
    else if (humanChoice==="rock" && botChoice==="scissors")
    {
        alert("You Win! Rock beats scissors!")
        console.log("You Win! Rock beats scissors!")
        humanScore++
    }
    else if (humanChoice==="rock" && botChoice==="paper")
    {
        alert("You Lose! Paper beats rock!")
        console.log("You Lose! Paper beats rock!")
        botScore++
    }
    else if (humanChoice==="scissors" && botChoice==="paper")
    {
        alert("You Win! Scissors beats paper!")
        console.log("You Win! Scissors beats paper!")
        humanScore++
    }
    else if (humanChoice==="scissors" && botChoice==="rock")
    {
        alert("You Lose! Rock beats scissors!")
        console.log("You Lose! Rock beats scissors!")
        botScore++
    }
    else if (humanChoice==="paper" && botChoice==="rock")
    {
        alert("You Win! Paper beats rock!")
        console.log("You Win! Paper beats rock!")
        humanScore++
    }
    else if (humanChoice==="paper" && botChoice==="scissors")
    {
        alert("You Lose! Scissors beats paper!")
        console.log("You Lose! Scissors beats paper!")
        botScore++
    }

}

function playGame()
{
    for (let i =0;i<5;i++)
    {
        const humanChoice = getHumanChoice()
        const botChoice = getBotChoice()
        playRound(humanChoice,botChoice)
        console.log("PLAYER SCORE: " + humanScore + ": BOT SCORE: " + botScore)
    }
    if (humanScore===botScore)
    {
        console.log("DRAW!")
        alert("DRAW!")
    }
    if (humanScore>botScore)
    {
        console.log("CONGRATULATIONS YOU WIN!")
        alert("CONGRATULATIONS YOU WIN!")
    }
    if (humanScore<botScore)
    {
        console.log("L LOSER YOU LOSE!")
        alert("L LOSER YOU LOSE!")
    }
}
playGame()