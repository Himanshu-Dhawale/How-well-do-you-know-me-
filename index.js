const readlineSync = require('readline-sync');
var score = 0;

const chalk = require('chalk');
const log = console.log 

log(chalk.green('Lets find out how well do you know me \n') )

const username = readlineSync.question(chalk.blue ('😊  Please enter your name 😊\n'));
console.log(chalk.cyan('\n Hi,'+ username + ' Get ready for Level 1.\n'+ 'Enter a/ b/ c/ for each question to answer.'))



function play(question, answer ){
  var userAnswer = readlineSync.question(question);
 
 if(userAnswer === answer ){
   console.log("Right!");
   score = score+1;
 }else{console.log ("Wrong") 
   
 } 
 console.log ("currentScore:"  + score);
 console.log();
}

var questions = [{
  question: 'Where Do I live?\n  a)Bangalore\n  b)Nagpur\n  c)Chennai\n', 
  answer : 'b' 
  
}, 
{
  question: 'My favorite superhero would be?\n a) Superman\n b) Batman\n c) Saitama\n', 
  answer:'c'
}, 
{
  question:'Which is my favorite food?\na) Dosa\nb) Biryani\nc) PaniPuri\n', 
  answer:'a'
}

  ];
  
  for(var i=0; i<questions.length; i++){
    var absoluteQuestion = questions[i];
    play(absoluteQuestion.question, absoluteQuestion.answer);
    
  }