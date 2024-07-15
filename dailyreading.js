function loadBibleReading(fileName) {
    fetch(`kjv-bible-in-html5-master/${fileName}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("reading-content").innerHTML += data;
        })
        .catch(error => console.error('Error loading the Bible reading:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    const readingTitleElement = document.getElementById('reading-title');
    const dailyReadingFileMap = {
        'Joshua 1:1-18': 'Joshua.html',
        'Acts 21:3-15': 'Acts.html',
        'Mark 1:21-27': 'Mark.html',
        // Add mappings for other readings as necessary
    };

    const psalmsFiles = [
        'Psalms.html',
        // Add paths for all Psalm files here
    ];

    function getReadingFileNames(readingContent) {
        const readings = readingContent.match(/Psalms: (.+), (.+)\nOld Testament: (.+)\nNew Testament: (.+)\nGospel: (.+)/);
        if (readings) {
            const [_, psalm1, psalm2, oldTestament, newTestament, gospel] = readings;
            return [psalm1, psalm2, oldTestament, newTestament, gospel];
        }
        return [];
    }

    // Load the Bible content after the readings are displayed
    displayReading();
    setTimeout(() => {
        const readingContent = document.getElementById('reading-content').innerText;
        const [psalm1, psalm2, oldTestament, newTestament, gospel] = getReadingFileNames(readingContent);

        [psalm1, psalm2].forEach(psalm => {
            if (psalmsFiles.includes(`${psalm}.html`)) {
                loadBibleReading(`${psalm}.html`);
            }
        });

        [oldTestament, newTestament, gospel].forEach(reading => {
            if (dailyReadingFileMap[reading]) {
                loadBibleReading(dailyReadingFileMap[reading]);
            }
        });
    }, 500);
});
