// Funktion zum Umschalten der Antworten im FAQ
function toggleAnswer(answerId) {
  var answerElement = document.getElementById(answerId);
  // Toggle die Anzeige der Antwort
  if (answerElement.style.display === "block") {
    answerElement.style.display = "none";
  } else {
    answerElement.style.display = "block";
  }
}
