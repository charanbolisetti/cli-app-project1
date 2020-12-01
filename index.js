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


  var questionOne={
    question: chalk.green("Who is my best friend? "),
    answer: "raju"
  }
  
  var questionTwo={
    question: chalk.green("Which mobile company i like the most? "),
    answer: "samsung"
  }
  
  var questionThree={
    question: chalk.green("how old am i? "),
    answer: "21"
  }
  
  var questionFour={
    question: chalk.green("where do i live? "),
    answer: "magatapalli"
  }
  
  var questionFive={
    question: chalk.green("which actor i like the most? "),
    answer: "pawan kalyan"
  }


  var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  load(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.bgRed.underline.bold("Yay,Your final score is " + score));
  