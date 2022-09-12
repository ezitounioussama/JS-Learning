var courses =
  '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]';

function averageReviews(data) {
  var courses = JSON.parse(data);

  for (var i = 0; i < courses.length; i++) {
    var reviews = courses[i].reviews;

    try {
      if (reviews.length == 0) {
        throw "has no reviews";
      } else if (reviews.length < 5) {
        throw "Not enough reviews yet";
      }

      var sumReviews = 0;

      for (var b = 0; b < reviews.length; b++) {
        sumReviews += reviews[b];
      }

      let average = sumReviews / reviews.length;

      courses[i].averageRating = average.toFixed(1);
    } catch (error) {
      courses[i].averageRating = error;
    }
  }
  return JSON.stringify(courses);
}
console.log(averageReviews(courses));
