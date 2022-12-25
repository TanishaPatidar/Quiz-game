var readlineSync= require("readline-sync");
var score=0;

function play(question,answer){
  userans=readlineSync.question(question);

   if (userans.toUpperCase() === answer.toUpperCase()) { // branching===answer.toupperCase()){
    score=score+1;
    console.log("Right");
  }
  else{
    console.log("Wrong");
  }
  
}
var question=[
  { ques:"Who is India Prime minister?",
   ans: "Narendra Modi"
  },
  {
    ques:"What is national flower?",
    ans:"lotus"
  },{
    ques:"What is national game of india?",
    ans:"hockey"
  }
]
for(i=0;i<question.length;i++){
  play(question[i].ques,question[i].ans);
}
console.log("Your final score"+score);