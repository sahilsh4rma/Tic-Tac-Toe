let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let new_g = document.querySelector("#new-btn");
let msg_con = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
reset.addEventListener("click",()=>{
    for(let val of boxes){
        val.disabled = false;
        val.innerText="";
    }
    msg_con.classList.add("hide");
});
new_g.addEventListener("click",()=>{
    for(let val of boxes){
        val.disabled = false;
        val.innerText="";
    }
    msg_con.classList.add("hide");
});
let turnO=true;
 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="X"
            turnO = false;
        }
        else{
            box.innerText="O"
            turnO = true;            
        }

        box.disabled = true;   
        checkWinner();
    }) 
 });

 const checkWinner = () => {
    for(let pattern of win_pattern){
        if(boxes[pattern[0]].innerText== "O" && boxes[pattern[1]].innerText =="O" && boxes[pattern[2]].innerText == "O"){
            console.log("We got winner  and O is winner");
            msg.innerText=" O is Winner";
            msg_con.classList.remove("hide");
            for( box of boxes){
                box.disabled=true;
            }
        }
        else if(boxes[pattern[0]].innerText== "X" && boxes[pattern[1]].innerText =="X" && boxes[pattern[2]].innerText == "X"){
            console.log("we got winner and X is winner");
            msg.innerText=" X is Winner";
            msg_con.classList.remove("hide");
            for( box of boxes){
                box.disabled=true;
            }
            
        }
    }
 }

