var readlineSync=require('readline-sync');
const chalk=require('chalk');
var score=0;

var userName=readlineSync.question(chalk.bgCyan("What's your Name? "));

console.log(chalk.bgYellow("Welcome " + userName + " to Do You Know Charan?"));

console.log("---------------");


function load(question,answer){
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.cyanBright("You are Right?"));
      score=score+1;
    }else{
      console.log(chalk.cyanBright("You are Wrong"));
      score=score-1;
    }
    console.log(chalk.yellowBright("Your score is " + score));
    console.log("---------------");
  }