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

$.ajax({
  type: "GET",
  url: "https://opentdb.com/api.php?amount=1&category=31",
  dataType: "json",
  success: function (data) {
    // GET ALL DATA WE WANT FROM THE API
    let reponseObj = data;
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
  },
  error: function () {
    console.log("Error in the request");
  },
});
