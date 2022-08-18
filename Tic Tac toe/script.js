const parent = document.getElementById("parent")
const message = document.getElementById("message")
 
let gameState = ["", "", "", "", "", "", "", "", ""]

// creating 9 boxes
for(let i = 0; i < 9; i++){
    // gameState.push("")
    const box = document.createElement("div")
    box.classList.add("box") // add box
    box.setAttribute("id", i) // give id
    parent.appendChild(box)

}
 let gameActive = true
 let currentPlayer = "X"
 // winning conditions of tic tak toe
 const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8]
 ]


 message.innerHTML = `Current Player : ${currentPlayer}`
 const isWon = () => {
    let result = false
    for (let i = 0; i < winningCondition.length; i++) {
      let condition = winningCondition[i]
      let a = gameState[condition[0]]
      let b = gameState[condition[1]]
      let c = gameState[condition[2]]
  
      if (a === "" || b === "" || c === "") {
        continue
      }
  
      if (a == b && b == c) {
        gameActive = false
        result = true
      }
    }
    return result
  }
 // for handling on click
 const handlingClickEvent = (e)=>{
    if(!e.target.innerText){ // if condition for donot chnage x to 0 or 0 to x
        e.target.innerText = currentPlayer // on click give x
        e.target.style.color = currentPlayer === "X"? "red" : "green" // give color
        gameState[e.target.id] = currentPlayer // update Game State
          
        if(isWon()){
            message.innerHTML = `Current Player  ${currentPlayer} won`
        }else {
            currentPlayer = currentPlayer === "X" ? "O" : "X" // toggle / change current player
            message.innerHTML = `Current Player : ${currentPlayer}`
          }
        
    }
}

 document.querySelectorAll(".box").forEach((element)=>{
    element.addEventListener("click", handlingClickEvent)
 })