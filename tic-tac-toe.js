let boxes = document.querySelectorAll(".box")
let resetButton = document.querySelector(".reset")
let resetForPop = document.querySelector(".reset-pop")
let containerFirst = document.querySelector(".container-first");
let newMsg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-game");
let drowmsg = document.querySelector(".container-second")
let newMsgTwo = document.querySelector(".msg-1")

let turn = true;
 const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
        if(turn === true){
            box.innerText = "X";
            turn = false
        }else{
            box.innerText="O";
            turn= true;
        }
        box.disabled = true;

        checkWinner();

    })
    
});

const disabledBoxes = ()=>{
    for(let box of boxes ){
        box.disabled = true;
    }
} 

const showWinner = (winner) => {
 newMsg.innerText = `Congratulation \n Winner Is \n "${winner}"` 
containerFirst.classList.remove("hide");
 disabledBoxes();
}
const showDraw = () => {
 newMsgTwo.innerText = `Match \n Draw` 
 drowmsg.classList.remove("hide");
 disabledBoxes();
}

const checkWinner = () =>{
    for(let pattern of winnerPattern){
      let position1 = boxes[pattern[0]].innerText
      let position2 = boxes[pattern[1]].innerText
      let position3 = boxes[pattern[2]].innerText

      if(position1 != "" && position2 != "" && position3 != ""){
        if(position1 === position2 && position2 === position3){

            console.log("winner",position1)
            showWinner(position1)
        }
      }
    }
let allFull = true;
for(let box of boxes){
    if(box.innerText === ""){
    allFull = false;
    return;
}
}
if(allFull){
showDraw(   )
}


}


const resetBtn = () =>{
    turn = true;
    enableBoxes()
    containerFirst.classList.add("hide");
    drowmsg.classList.add("hide");    
}
const enableBoxes = () => {
   for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }  
}
resetButton.addEventListener("click",()=>resetBtn());
newBtn.addEventListener("click",()=>resetBtn())
resetForPop.addEventListener("click",()=>resetBtn())