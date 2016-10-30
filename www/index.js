var questionIndex = -1;

var startText = "Great job taking a moment for yourself!"
  + "</br>Click through the next few prompts for being present to your environment.";

var endText = "Take another deep breath, and then let it go."
  + "</br>If you want, write down anything of note from this experience, and choose how you want to Be in this moment.";

var questions = [
  // sights
  [
    "How many different colors can you see from where you are?",
    "What subtle motions can you see around you?",
    "What color can you see the most of in your current location?",
    "Look for a detail in your environment you didn’t notice before."
  ],

  // sounds
  [
    "What’s the quietest noise you can hear right now?",
    "How many unique sounds can you hear?"
  ],

  // touch
  [
    "What different temperatures can you feel on your skin?",
    "Can you feel air moving around you? What direction is it going?",
    "Describe the texture of an object within your reach (item of clothing, piece of furniture, bark of a tree, etc)"
  ],

  // internals
  [
    "Listen closely and see if you can notice your own heart beat. Are you hearing it? Feeling it?",
    "Where do you notice any tensions in your body? Can you relax them?",
    "Notice the pace of your breathing.",
    "How many thoughts are moving around in your head right now?",
    "What emotions are present within you in this moment?",
    "How deeply are you breathing?",
    "Bring attention to your current posture. What does it say?",
    "What compliment can you give yourself right now?",
    "How relaxed are you? What can you do to increase your level of relaxation in this moment?"
  ]
];

function getCueCard() {
  questionIndex++;

  if (questionIndex >= questions.length) {
    end();
    return;
  } else {
    var questionArray = questions[questionIndex];
    var index = Math.floor((Math.random() * questionArray.length));
    var text = questionArray[index];
  }

  document.getElementById("card").innerHTML = text;
}

function init() {
  document.getElementById("card").innerHTML = startText;
}

function end() {
  document.getElementById("card").innerHTML = endText;
  document.getElementById("button").style.display = "none";
  document.getElementById("restart").style.display = "inline";
  document.getElementById("feedback").style.display = "inline";
}

function restart() {
  questionIndex = -1;
  document.getElementById("button").innerHTML = "Next";
  document.getElementById("button").style.display = "inline";
  document.getElementById("restart").style.display = "none";
  document.getElementById("feedback").style.display = "none";
  
  getCueCard();
}
