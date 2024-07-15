function loadBibleReading(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById("reading-content").innerHTML += data;
        })
        .catch(error => console.error('Error loading the Bible reading:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    const readingTitleElement = document.getElementById('reading-title');
    const dailyReadingFileMap = {
        'Joshua 1:1-18': 'kjv-bible-in-html5-master/Joshua.html',
        'Acts 21:3-15': 'kjv-bible-in-html5-master/Acts.html',
        'Mark 1:21-27': 'kjv-bible-in-html5-master/Mark.html',
        // Add mappings for other readings as necessary
    };

    const psalmsFiles = [
        'kjv-bible-in-html5-multipage/Psalms.html',
        // Add paths for all Psalm files here
    ];

    // Load the Bible content after the readings are displayed
    displayReading();
    setTimeout(() => {
        const readingTitle = readingTitleElement.innerText.split(' ')[1]; // Extract the Proper part
        const readingContent = document.getElementById('reading-content').innerText;
        const readings = readingContent.match(/Psalms: (.+), (.+)\nOld Testament: (.+)\nNew Testament: (.+)\nGospel: (.+)/);
        
        if (readings) {
            const [_, psalm1, psalm2, oldTestament, newTestament, gospel] = readings;

            [psalm1, psalm2].forEach(psalm => {
                if (psalmsFiles.includes(`kjv-bible-in-html5-multipage/${psalm}.html`)) {
                    loadBibleReading(`kjv-bible-in-html5-multipage/${psalm}.html`);
                }
            });

            [oldTestament, newTestament, gospel].forEach(reading => {
                if (dailyReadingFileMap[reading]) {
                    loadBibleReading(dailyReadingFileMap[reading]);
                }
            });
        }
    }, 500);
});
