(function () {
  var helloSpeaker = {}; // Create an object

  var speakWord = "Hello"; // Define the speakWord variable

  // Attach the speak method to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;
})();
