document.addEventListener("DOMContentLoaded", function() {
    const monthColors = [
        "#FF5733", // January
        "#33FF57", // February
        "#3357FF", // March
        "#FF33A6", // April
        "#A633FF", // May
        "#33FFA2", // June
        "#FF5733", // July
        "#33D1FF", // August
        "#D1FF33", // September
        "#FF3333", // October
        "#33FFCC", // November
        "#FF3333"  // December
    ];

    const currentMonth = new Date().getMonth();
    document.querySelector("header").style.backgroundColor = monthColors[currentMonth];
});
