$(function() {

  var questionIndex = -1;
  var imageIndex = -1;

  var startText = null;

  var endText = null;

  var questions = null;
  var images = null;

  var category = (location.search).substr(1) || 'data';
  $("#body-wrapper").addClass(category);

  var jsonFile = category + '.json';
  $.getJSON(jsonFile, function(data) {
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
    $("#card").bind("click", showNextQuestion);
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
    var imageObj = images[imageIndex]
    
    // if it's a string, make it compatible
    if (typeof(imageObj) == "string") {
      imageObj = {"src": imageObj};
    }

    // apply image source
    $("#image").attr("src", imageObj.src);
    
    // reset styles
    $("body")[0].style = '';
    $("#card")[0].style = '';
    $("#image")[0].style = '';
    
    // apply styles
    $("body").css(imageObj.bodyCSS || {});
    $("#card").css(imageObj.cardCSS || {});
    $("#image").css(imageObj.imageCSS || { "width": "100%", "height": "100%" });
  };
});
