let choices = document.querySelectorAll(".choice");
let your = document.querySelector("#your");
let chaper = document.querySelector("#chaper");
let youScore = 0; 
let who = document.querySelector("#who");
let chapScore = 0; 

const chapChoice = () => {
    return choices[Math.floor(Math.random()*3)].getAttribute("id");
 }

for (let choice of choices){
    choice.addEventListener("click",() =>{
        let you = choice.getAttribute("id");
        let chap = chapChoice();

        console.log(you); 
        console.log(chap); 

        if (you == chap){
            console.log("match is draw");
        who.innerText = "draw ";
            return;
        }

        if (you == "stone"){
            if (chap == "paper"){
                chapScore += 1;
                who.innerText = "chap win";
            }else{
                youScore += 1;
                who.innerText = "you win";
            }
        }
        if (you == "paper"){
            if (chap == "stone"){
                youScore += 1;
                who.innerText = "you win";
            }else{
                who.innerText = "chap win";
                chapScore += 1;
            }
        }
        if (you == "scissors"){
            if (chap == "paper"){
                youScore += 1;
                who.innerText = "you win";
            }else{
                chapScore += 1;
                who.innerText = "chap win";
            }
        }
        your.innerText = youScore;
        chaper.innerText = chapScore;
    });
}

const print = () => {
    if(youScore){
        who.innerText = "you win";
    }else{
        who.innerText = "chap win";
    }
}



