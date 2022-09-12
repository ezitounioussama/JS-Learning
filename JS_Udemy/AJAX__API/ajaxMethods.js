// WORKING WITH https://opentdb.com/ (TRIVIA API)

// FUNCTION TO SHUFFLE DATA IN AN ARRAY

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// REQUEST

function getQuestion() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // create object reponse
      let reponseObj = JSON.parse(this.responseText);
      //  GET THE QUESTION
      let question = reponseObj.results[0].question;
      // GET THE ANSWER
      let answer = reponseObj.results[0].correct_answer;
      // GET THE INCORRECT ANSWERS
      let incorrectAnswers = reponseObj.results[0].incorrect_answers;
      // PUSH THE CORRECT ANSWER TO THE INCORRECT ONES
      incorrectAnswers.push(reponseObj.results[0].correct_answer);

      console.log("the question is : ", question);
      console.log("the correct answer is : ", answer);
      console.log(shuffle(incorrectAnswers));
    }
  };
  xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
  xhttp.send();
}
getQuestion();

