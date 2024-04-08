const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const msg = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg-container");
const newBtn = document.querySelector("#new-btn")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (Winner) => {
    msg.innerHTML = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

// const matchDraw = () =>{
//     if(showWinner() === "");
//     msg.innerHTML = `Play Again`;
//     msgContainer.classList.remove("hide");
//     disabledBoxes();
// }

const checkDraw = () => {
    let filledBoxes = 0;
    for (let box of boxes) {
        if (box.innerHTML !== "") {
            filledBoxes++;
        }
    }
    if (filledBoxes === 9) {
        msg.innerHTML = "It's a draw! Play Again";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[1]].innerHTML,
        //     boxes[pattern[2]].innerHTML
        // );


        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('Winner Is', pos1Val, '!');
                showWinner(pos1Val);
            }
        }
    }
    checkDraw();
}

    newBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);