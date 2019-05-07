var questions = [
  ["What date is Mexico's independence day?", 0505],
  ["What is America's independence date?", 0704],
  ["What is Finland's independence date?", 1206]
];

correctAnswers = 0;

var response;
var html;
var answer;
var question;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if(response === answer) {    
  correctAnswers += 1
  }
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
