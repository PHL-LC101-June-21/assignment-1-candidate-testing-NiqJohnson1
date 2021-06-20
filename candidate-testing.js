const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "1. Who was the first American woman in space? "
let correctAnswer = "Sally Ride";
let candidateAnswer = (" ");
let questions = [
  "1. Who was the first American woman in space?\n",
  "2. True or false: 5 kilometer == 5000 meters?",
  "3. (5 + 3)/2 * 10 = ?"
]
  ;
let correctAnswers = [
  "Sally Ride", 
  "true",
  "40",
  "Trajectory",
  "3"
]; 
let candidateAnswers = [" "];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync')
 const name = input.question("What is your name? ")
 candidateName = name
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // Candidate Answer is equal to the input from question
 

 candidateAnswer = input.question(questions[0])
 console.log("Your Answer:", candidateAnswer);
console.log("Correct Answer:", correctAnswer);

 candidateAnswer = input.question(questions[1])
console.log("Your Answer:", candidateAnswer);
console.log("Correct Answer:", correctAnswers[1]);

 candidateAnswer = input.question(questions[2])
console.log("Your Answer:", candidateAnswer);
console.log("Correct Answer:", correctAnswers[2]);

//assign a for loop that asks each question in the question variable//
candidateAnswers = input.question(questions)
for (i = questions[0]; candidateAnswers == correctAnswers; i++){
  console.log(questions[i])
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //if the candidate's answer matches the correct answer, print "Yes, you are correct"
  //Otherwise if the candidate's answer is incorrect, print "Incorrect answer"

if (candidateAnswers == correctAnswers) {
  console.log("Yes you are correct!");
}
else  {
    console.log("Incorrect answer");
  }
  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
      console.log("Hello ", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};