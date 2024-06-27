document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
        "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced. - James Baldwin",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Life is what happens when you’re busy making other plans. - John Lennon",
        "Get busy living or get busy dying. - Stephen King"
    ];
    const now = new Date();
    const dayIndex = now.getDay();
    const quote = quotes[dayIndex];
    document.getElementById('quote').textContent = quote;
});
