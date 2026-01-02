let userScore = 0;
let computerScore = 0;
let paraOne = document.querySelector(".para-1")
let paraTwo = document.querySelector(".para-3")
let headTwo = document.querySelector(".headTwo")
let choice = document.querySelectorAll(".choice")
let reset = document.querySelector(".reset")
choice.forEach((choiceOne) => {
    choiceOne.addEventListener("click",()=>{
       let userid = choiceOne.getAttribute("id")
       playgame(userid);
    })
});

const playgame = (userid) =>{
   console.log("user choice is ", userid);
   let comChoice = computerchoice()
   console.log(`computer choice  is ${comChoice}`)
   if(userid == comChoice){
     drawGame();
      paraOne.innerText = userScore;
      paraTwo.innerText = computerScore;
      headTwo.innerText =  `Your Choice is ${userid} , Computer Choice is ${comChoice}\n
                            Game is Draw`
   }else{
      let isWin = true;
      if(userid === "rock"){
         isWin = comChoice === "paper"? false:true;
      }else if(userid === "paper"){
         isWin = comChoice === "scissor" ? false : true;
      }else if(userid === "scissor"){
         isWin = comChoice === "rock" ? false : true
      }else{
         console.log("invalid")
      }
      if(isWin===true){
         userScore++;
         console.log("user is Win");
         paraOne.innerText = userScore
         headTwo.innerText = `Your Choice is ${userid} , Computer Choice is ${comChoice}\n
                              Winner is You`
      }else{
         computerScore++
         console.log("computer is win")
         paraTwo.innerText = computerScore
         headTwo.innerText = `Your Choice is ${userid} , Computer Choice is ${comChoice}\n
                              Winner is Computer`
      }
   }
}
const computerchoice = () =>{
  const compchoice = ["rock","paper","scissor"];
  let randomnumber = Math.floor(Math.random()*3);
  let choice = compchoice[randomnumber]
  return choice;
}

const drawGame = () => {
   console.log("game Draw")
}
const resetButton = () =>{
   userScore = 0;
   computerScore = 0;
   paraOne.innerText = userScore
   paraTwo.innerText = computerScore
   headTwo.innerText = "Make your move!";
}
reset.addEventListener("click",()=>resetButton())