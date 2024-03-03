(function () {
  var byeSpeaker = {}; // Create an object

  var speakWord = "Good Bye"; // Define the speakWord variable

  // Attach the speak method to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;
})();
