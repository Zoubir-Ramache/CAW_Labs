const start = document.getElementById("start");
const end = document.getElementById("end");
const maze = document.getElementById("maze");
const gameStatus = document.getElementById("status");
const boundarys = document.getElementsByClassName("boundary");

let gameStarted = false; 
let boundaryHoverHandler; 

const resetGame=()=>{
    for (let i = 0; i < boundarys.length; i++) {
        boundarys[i].setAttribute("style", "background-color:blue;");
    }

}
let stopCheatingEvent;
const stopCheating=()=>{
     return maze.addEventListener("mouseleave" , ()=>{
        gameStatus.innerHTML="stop cheating "
        for (let i = 0; i < boundarys.length; i++) {
            boundarys[i].setAttribute("style", "background-color:red;");
        }
        gameStarted=false
    })

}

const gameStartHandler = () => {
    gameStatus.innerHTML = "Game started!";
    resetGame()
    stopCheatingEvent= stopCheating()
    console.log(stopCheatingEvent);

    gameStarted = true;

    
    boundaryHoverHandler = () => {
        gameStatus.innerHTML = "Game over!";
        for (let i = 0; i < boundarys.length; i++) {
            boundarys[i].setAttribute("style", "background-color:red;");
        }
        gameStarted = false;
        removeBoundaryEvents(); 
    };

    
    for (let i = 0; i < boundarys.length; i++) {
        boundarys[i].addEventListener('mouseover', boundaryHoverHandler);
    }
};


const removeBoundaryEvents = () => {
    for (let i = 0; i < boundarys.length; i++) {
        boundarys[i].removeEventListener('mouseover', boundaryHoverHandler);
    }
};


start.addEventListener("click", gameStartHandler);

end.addEventListener("click", () => {
    console.log(stopCheatingEvent);
    
    start.removeEventListener("click"  , gameStartHandler)
    maze.removeEventListener('mouseleave' , stopCheatingEvent)
    if (gameStarted) {
        for (let i = 0; i < boundarys.length; i++) {
            boundarys[i].setAttribute("style", "background-color:green;");
        }
        gameStatus.innerHTML = "You won!";
        gameStarted = false;
        removeBoundaryEvents(); 

    }
});


