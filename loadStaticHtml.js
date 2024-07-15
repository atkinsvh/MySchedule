document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/atkinsvh/MySchedule/40d9117b215da5110bc5ebf3c7c011fa5e0c940e/kjv-bible-in-html5-master/Luke.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('luke-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading Luke content:', error));
});
