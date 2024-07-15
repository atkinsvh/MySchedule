document.addEventListener("DOMContentLoaded", function() {
  function loadBibleReading(fileName) {
    fetch(fileName)
      .then(response => response.text())
      .then(data => {
        document.getElementById("reading-content").innerHTML = data;
      })
      .catch(error => console.error('Error loading the Bible reading:', error));
  }

  // Example: Load a specific Bible reading on page load
  loadBibleReading('kjv-bible-in-html5-master/1Corinthians.html');
});
