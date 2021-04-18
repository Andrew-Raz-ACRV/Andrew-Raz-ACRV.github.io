const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [

    {

      question: "Andrew studied what?",

      answers: {

        a: "Art",

        b: "Engineering",

        c: "Computer Sciences",

        d: "I don't know"

      },

      correctAnswer: "b"

    },

    {

      question: "Andrew is a?",

      answers: {

        a: "genius",

        b: "legend",

        c: "PhD student",

        d: "All of the above"

      },

      correctAnswer: "d"

    },

    {

      question: "Andrew's skills are:",

      answers: {

        a: "impressive in the area of coding",

        b: "useless",

        c: "universally awesome",

        d: "Too deep technically and lacks breadth in generic skills"

      },

      correctAnswer: "a"

    },

    {

      question: "Andrew is passionate about:",

      answers: {

        a: "Nothing",

        b: "Robotics",

        c: "something",

        d: "its a mystery"

      },

      correctAnswer: "b"

    }

];

function buildQuiz(){

    

    // variable to store the HTML output
  
    const output = [];
  
    
  
    for(i=0; i<quizQuestions.length; i++){
  
      
  
      // store list of answer choices
  
      const answers = [];
  
    
  
      // for each available answer to this question add an HTML radio button
  
      for(letter in quizQuestions[i].answers){
  
    
  
        answers.push(
  
          '<label>'
  
           + '<input type="radio" name="question'+i+'" value="'+letter+'">'
  
           + letter + ': '
  
           + quizQuestions[i].answers[letter]
  
           + '</label>'
  
           );
  
        }
  
       // add this question and its answers to the output
  
       output.push(
  
         '<div class="question">' + quizQuestions[i].question + '</div>'
  
         + '<div class="answers">' + answers.join('') + '</div>'
  
         );
  
      }
  
       // combine our output list into one string of HTML and put it on the page
  
    quizContainer.innerHTML = output.join('');
  
}

function showResults(){

    // gather answer containers from our quiz
  
    var answerContainers = quizContainer.querySelectorAll('.answers');
  
  
  
    // keep track of user's answers 
  
    var numCorrect = 0;
  
      // for each question find the selected answer
  
      for(i=0; i<quizQuestions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  
          // if answer is correct add to the number of correct answers
  
        if(userAnswer===quizQuestions[i].correctAnswer){
  
            numCorrect++;
  
            // and colour the answers green
  
            answerContainers[i].style.color = 'lightgreen';
  
        }
  
          // if answer is wrong or blank
  
        else{
  
            // colour the answers red
  
            answerContainers[i].style.color = 'red';
  
        }
  
    }
  
   
  
        // show number of correct answers out of total
  
        if (numCorrect === 0) { 
  
        //resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
        resultsContainer.innerHTML = "Oh my god - you couldn't answer any question";
  
        }
  
        if (numCorrect === 1) { 
  
          //resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
          resultsContainer.innerHTML = "You probably just guessed! You only got one correct answer.";
  
        }
  
        if (numCorrect === 2) { 
  
          //resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
          resultsContainer.innerHTML = "You got 2 out of 4 you get a grade of C";
  
        }
  
        if (numCorrect === 3) { 
  
          //resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
          resultsContainer.innerHTML = "Mediocre I expected perfection, you only got 3 out of 4";
  
        }
  
        if (numCorrect === 4) { 
  
          //resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
          resultsContainer.innerHTML = "No bad 4 out of 4";
  
        }
  
}

buildQuiz();

submitButton.onclick = function() {
    alert("Are you sure you want to submit Quiz? You understand the consequences don't you?");
    showResults();
 
}
