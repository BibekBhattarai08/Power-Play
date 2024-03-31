//for how to play button
const dropdown= document.querySelector(".dropdowncontent");
const bottom=document.querySelector(".hint");


dropdown.style.display="none";

bottom.addEventListener("click", ()=>{
  if(dropdown.style.display==="none"){
     dropdown.style.display="block";
  }
  else{
    dropdown.style.display="none";
  }
});
//game 
let userWin=true;
let userScore = 0;
let compScore = 0;
const userScorepara=document.querySelectorAll("#user-score");
const compScorepara=document.querySelectorAll("#computer-score")
const images = {
  rock: "rock.png",
  paper: "paper.png",
  scissors: "scissor.png"
};

//display
const displayPic = document.getElementById("computer");

const delayinmillisecond=200;
const choices = document.querySelectorAll(".image");

const message= document.querySelector("#msg")
const character=document.querySelectorAll("#character")

const drawGame = (computerImage, userChoiceImage) => {
  setTimeout(() => {
    message.innerText = "It's a tie!";
    message.style.color = "yellow";

    computerImage.style.height = "100%";
    computerImage.style.width = "100%"; 

    userChoiceImage.style.height = "100%"; 
    userChoiceImage.style.width = "100%"; 

    computerImage.style.filter = `blur(10px)`;
    userChoiceImage.style.filter = `blur(10px)`;
  }, delayinmillisecond);
};


const showWinner=(userWin, userChoice, compChoice, clonedImage, computerImage )=>{
  if (userWin){
    userScore++;

    setTimeout(()=>{
        for (let i = 0; i < userScorepara.length; i++) {
            userScorepara[i].innerText = userScore;
        }

 },delayinmillisecond);

setTimeout(()=>{

message.innerText="Congratulations! you win..";
message.style.color="green";


},delayinmillisecond);


}
else {
  compScore++;
  setTimeout(()=>{
  for(let i=0;i<compScorepara.length;i++){
  compScorepara[i].innerText= compScore;
  }
 
},delayinmillisecond);
  setTimeout(()=>{
message.innerText="You loose!";
message.style.color="red";

},delayinmillisecond);

}
  
}

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length); 

  return options[random];
};

const playGame = (userChoice) => { 
  console.log("User choice:", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice:", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else { 
  
    if( userChoice=== "rock"){
      userWin=compChoice==="paper"? false: true;
    }else if(userChoice==="paper"){
      userWin= compChoice==="scissors"?false:true;
    }
else {
  userWin= compChoice==="rock"?false:true;
}
showWinner(userWin);
}
//display comp
setTimeout(()=>{
displayPic.innerHTML = ""; 
  const computerImage = document.createElement("img");
  computerImage.src = images[compChoice]; 
  computerImage.alt = compChoice; // Set alt text for accessibility
 
 
  if (userWin) {

   computerImage.style.filter= `brightness(80%)`;
    computerImage.style.height = "90%";
    computerImage.style.width = "90%";

   }
else{
  computerImage.style.filter= `brightness(150%)`;
  computerImage.style.height = "100%";
  computerImage.style.width = "100%"; 
}
  computerImage.style.transform=`rotatey(${180}deg)`;
  displayPic.appendChild(computerImage);

  }, delayinmillisecond);
};

for (let i = 0; i < choices.length; i++) {
  const image = choices[i];

  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("id");
    playGame(userChoice);// Pass userChoice to the playGame function
   

  });
}

//display
//user

const displayImage = document.getElementById("user");



choices.forEach(choice => {
  choice.addEventListener("click", function() {
    setTimeout(()=>{
    const imageSrc = this.querySelector("img").src;  // Get the source URL of the clicked image
    displayImage.innerHTML = "";  // Clear any existing content
    const clonedImage = this.cloneNode(true);
    const userChoiceImage= clonedImage.querySelector("img");
   
      if(!userWin){
        userChoiceImage.style
        userChoiceImage.style.filter= `brightness(80%)`;
        userChoiceImage.style.width = "90%" ;   // Adjust image width (optional)
        userChoiceImage.style.height = "90%"; 
      }
      else{
        userChoiceImage.style.filter= `brightness(150%)`;
    userChoiceImage.style.width = "100%" ;   // Adjust image width (optional)
    userChoiceImage.style.height = "100%"; 
       }; 
    displayImage.appendChild(clonedImage);
}, delayinmillisecond);

  });
});

