$(function() {

  var questionIndex = -1;
  var imageIndex = -1;

  var startText = null;

  var endText = null;

  var questions = null;
  var images = null;

  $.getJSON('data.json', function(data) {
    questions = data.questions;
    images = data.images;
    startText = data.start;
    endText = data.end;

    init();
  });

  var showNextQuestion = function() {
    if (!questions) return;

    questionIndex++;

    if (questionIndex >= questions.length) {
      end();
      return;
    } else {
      var questionArray = questions[questionIndex];
      var index = Math.floor((Math.random() * questionArray.length));
      var text = questionArray[index];
    }

    setText(text);
  };

  var init = function() {
    setText(startText);

    showNextImage();

    $("#image").bind("click", showNextQuestion);
    $("#next").bind("click", showNextQuestion);
    $("#restart").bind("click", restart);
  };

  var end = function() {
    setText(endText);
    $("#button").css("display", "none");
    $("#restart").css("display", "inline");
    $("#feedback").css("display", "inline");
    $("#next").css("display", "none");
  };

  var restart = function() {
    questionIndex = -1;
    $("#button").html("Next");
    $("#button").css("display", "inline");
    $("#restart").css("display", "none");
    $("#feedback").css("display", "none");
    $("#next").css("display", "inline");

    showNextImage();

    showNextQuestion();
  };

  var setText = function(text) {
    $("#card").html(text.replace(/\n/, "<br>"));
  };

  var showNextImage = function() {
    imageIndex = (imageIndex + 1) % images.length;
    $("#image").attr("src", images[imageIndex]);
  };
});
