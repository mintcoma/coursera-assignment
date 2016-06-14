(function (window) {
var speakWord = "Good Buy";

var byeSpeaker = {};
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

window.byeSpeaker = byeSpeaker;
}) (window);
