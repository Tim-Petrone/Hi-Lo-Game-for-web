// var randomNumber = function pick() {
//   return Math.floor(Math.random()*(101));
// }
//
// function hiLo(){
// //computer needs to pick a number
// // var randomNum = Math.floor(Math.random()*(101));
// var randomNum = randomNumber()
// console.log(randomNum);
//   do {
//     var guess = prompt("What is your guess?");
//     if (guess > randomNum){
//       alert("Your guess is too high. Guess again!");
//     } else if (guess < randomNum){
//       alert("Your guess is too low. Guess again!");
//     } else {
//       alert("CONGRATULATIONS! YOU WON!");
//     }
//   } while(guess != randomNum){
//     }
// }

//not original game anymore


function startGame(){
  numAnswer = parseInt(Math.random() * 100);
  count = 0;
  console.log(userName);
}
function saveName(){
  userName = document.getElementById("User Name").value;
  console.log(userName);
}


function hiLo () {
  // console.log(userName);
  // userName = document.getElementById("User Name").value;
  userNum = document.getElementById("inputField").value;
  console.log(numAnswer);
  // var count = 1;
  // var userNum = prompt("Please enter your guess" , "Enter here");
  // if (userNum >= 101 || userNum <= 0) {
  //   alert("Invalid Input!")
  //   return 0;
  // }
  // else if (parseInt(userNum , 10).toString() == "NaN") {
  //   alert("Please enter a valid number!")
  //   return 0;
  // }
  if (count < 7){
    if (userNum == numAnswer) {
      document.getElementById("outputField").innerHTML = "Congratulations, " + userName + "! You got it in " + (count+1) + " attempts.";
      return "You win!"
    }
    else if (userNum < numAnswer) {
      document.getElementById("outputField").innerHTML = "Your guess is too low.";
      count++;
      console.log(count);
      userNum = document.getElementById("inputField").value = "";
    }
    else {
      document.getElementById("outputField").innerHTML = "Your guess is too high.";
      count++;
      console.log(count);
      userNum = document.getElementById("inputField").value = "";
    }
  } else {
    console.log("You lose, " + userName + "!");
    alert("You lose!");
  };
};
  // userNum = prompt("Try again" , "Get it right this time");
  // count++;
  // console.log(count);
  // alert("Sorry " + userName + ", you lose!")
