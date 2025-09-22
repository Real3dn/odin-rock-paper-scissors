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
let msg=Element
msg=document.querySelector('#msg')
let humanScore=0
let botScore=0
function playRound(humanChoice, botChoice)
{
    humanChoice=humanChoice.toLowerCase()
    console.log("=============================")
    console.log("The player chose: " + humanChoice)
    console.log("The bot chose: " + botChoice)
    if (humanChoice===botChoice)
    {
        console.log("DRAW!")
        msg.textContent = `DRAW! Human:${humanScore} : Bot:${botScore}`
    }
    else if (humanChoice==="rock" && botChoice==="scissors")
    {
        console.log("You Win! Rock beats scissors!")
        msg.textContent = `You Win! Human:${humanScore} : Bot:${botScore}`

        humanScore++
    }
    else if (humanChoice==="rock" && botChoice==="paper")
    {
        console.log("You Lose! Paper beats rock!")
        botScore++
        msg.textContent = `You Lose! Human:${humanScore} : Bot:${botScore}`
    }
    else if (humanChoice==="scissors" && botChoice==="paper")
    {
        console.log("You Win! Scissors beats paper!")
        humanScore++
        msg.textContent = `You Win! Human:${humanScore} : Bot:${botScore}`
    }
    else if (humanChoice==="scissors" && botChoice==="rock")
    {
        console.log("You Lose! Rock beats scissors!")
        botScore++
        msg.textContent = `You Lose! Human:${humanScore} : Bot:${botScore}`
    }
    else if (humanChoice==="paper" && botChoice==="rock")
        {
        console.log("You Win! Paper beats rock!")
        humanScore++
        msg.textContent = `You Win! Human:${humanScore} : Bot:${botScore}`
    }
    else if (humanChoice==="paper" && botChoice==="scissors")
    {
        console.log("You Lose! Scissors beats paper!")
        botScore++
        msg.textContent = `You Lose! Human:${humanScore} : Bot:${botScore}`
    }
}
function playGame(humanChoice)
{
        const botChoice = getBotChoice()
        playRound(humanChoice,botChoice)
        console.log("PLAYER SCORE: " + humanScore + ": BOT SCORE: " + botScore)
    if (humanScore>=3 || botScore>=3)
    {
        
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
    humanScore=0
    botScore=0
}
}
let btns = document.querySelectorAll('button')
btns.forEach((btn)=> {
    btn.addEventListener('click', () => playGame(btn.textContent))
})