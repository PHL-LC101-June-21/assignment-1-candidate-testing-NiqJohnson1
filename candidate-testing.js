const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "1. Who was the first American woman in space? "
let correctAnswer = "Sally Ride";
let candidateAnswer = (" ");
let questions = [
  '1) Who was the first American woman in space? ',
  '2) True or false: 5 kilometer == 5000 meters? ',
  '3) (5 + 3)/2 * 10 = ? ',
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  '5) What is the minimum crew size for the ISS? '
]
  ;
let correctAnswers = [
  'Sally Ride', 
  'true',
  '40',
  'Trajectory',
  '3'
]; 
let candidateAnswers = [];
let numberOfCorrectAnswers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync')
  const name = input.question("What is your name? ")
  candidateName = name
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  //Assign a for loop that asks each question in the question variable//
  for (i = 0; i < questions.length; i++){
    
    const candidateAns = input.question(questions[i]);
    const correctAns = correctAnswers[i];
   
    candidateAnswers.push(candidateAns);
  
    
      if (candidateAns.toLowerCase() === correctAns.toLowerCase()){
      numberOfCorrectAnswers++
  
        } 
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAns}\n`);    
    
    
  }

}

function gradeQuiz(candidateAnswers) {


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //if the candidate's answer matches the correct answer, print "Yes, you are correct"
  //Otherwise if the candidate's answer is incorrect, print "Incorrect answer"
  // *** PART 3 ***
  // Compare the candidate answers with the correct answers,
  // Calculate the candidate's score as a percentage,
  // Convey to the candidate if they have passed the quiz with an 80% or if they have failed.
  // Some tips:

  // Checking for the correct answer should be case insensitive (e.g. "Orbit" is the same as "orbit").

  // Somewhere below TODO 1.2c you should see a variable declaration for grade. Use this to calculate the candidate's score.

  // To calculate the candidate's percentage, use the equation:

  // (Number of Correct Answers) / (Number of Quiz Questions) * 100
  

  let grade = (Number(numberOfCorrectAnswers / questions.length) * 100);
  // let grade = ((candidateAnswers) / (questions.length)) * 100

  if (candidateAnswers[i] === correctAnswers[i]){
   
    }
  console.log(`>>> Overall Grade: ${grade}%  (${numberOfCorrectAnswers} out of ${questions.length} correct)`)

  //Any score < 80% is a failing grade
  let candidateStatus = 80
  if (grade < candidateStatus){
    console.log(">>> Status: FAILED <<<")
  }   else {
  
     console.log(">>> Status: PASSED <<<")
}   
  
  return grade;
}
  
  
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: ", candidateName);
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