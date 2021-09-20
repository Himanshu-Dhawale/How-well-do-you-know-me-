var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk")
var log = console.log 

log(chalk.green("Do you know me? Let's find out!\n"));
var username = readlineSync.question(chalk.magenta("Please Enter Your Name\n")) ;
console.log(chalk.red("Hi, " + username + " Enter a/b/c/d for each question to answer\n"))

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are Right")
    score = score + 1;
    
  }else{
    console.log("You are Wrong")
  }
  console.log(chalk.blue("currentscore:" + score))
}

var players = [{
  
}]

var questions = [{
  question:"1)Where do I live?\n a: Delhi\n b: Nagpur\n c: Mumbai\n d:Kanpur\n" , 
  answer:"b"
}, 
{
  question:"2)Which is my favorite food?\n a: Tari Poha\n b: Biryani\n c: Dosa\n d: Panipuri\n", 
  answer:"c"
}, 
{
  question:"3)Which is my favorite Anime?\n a: Naruto\n b: Fairy Tail\n c: Attack On Titan\n d: All of Them\n", 
  answer:"d"
  }, 
  { 
    question:"4)Which are my favorite folk-tales\n a: Akbar-Birbal \n b:Vikram-Betal\n c: Mulla Nasruddin\n d: All of Them\n", 
    answer:"d😅"
}, 
{
  question:"5)Which is my favorite sport?\n a: Boxing\n b: Cricket\n c: Football\n d: Basketball\n", answer:"a"
}, 
{
  question:"6)Who's my favorite boxer?\n a: Floyd Mayweather\n b: Muhammad Ali\n c: Mike Tyson\n d: Manny Pacquiao\n", 
  answer:"a"
}, 

 ]
  
  for(i=0; i<questions.length; i++){
    var absoluteQuestion = questions[i]
    play(absoluteQuestion.question,absoluteQuestion.answer)
    console.log("-----------------------------------------")
  }
  
  console.log("Congrats! You've finished the game.\n You Scored:" + score )