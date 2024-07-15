const API_KEY = 'YOUR_API_KEY';  // Replace with your actual API key

async function fetchBibleText(book, chapter, verseStart, verseEnd) {
    const response = await fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${book}.${chapter}.${verseStart}-${verseEnd}?include-chapter-numbers=false&include-verse-numbers=false`, {
        headers: {
            'api-key': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.data.content;
}

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const readingTitleElement = document.getElementById('reading-title');
        const readingContentElement = document.getElementById('reading-content');
        
        // Example: Replace with actual dynamic reading logic
        const readings = [
            { book: 'JHN', chapter: 3, verseStart: 16, verseEnd: 17 }  // John 3:16-17
        ];
        
        readingTitleElement.innerText = 'Today\'s Bible Reading';

        for (const reading of readings) {
            const text = await fetchBibleText(reading.book, reading.chapter, reading.verseStart, reading.verseEnd);
            readingContentElement.innerHTML += `<p>${text}</p>`;
        }
    } catch (error) {
        console.error('Error fetching the Bible reading:', error);
        document.getElementById('reading-content').innerText = 'Failed to load Bible reading.';
    }
});
