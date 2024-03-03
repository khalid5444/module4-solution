// Wrap the entire contents of script.js inside of an IIFE
(function () {

  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
  };

  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log("Good Bye " + name);
  };

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name in the loop.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' retrieved to 'j'.
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
