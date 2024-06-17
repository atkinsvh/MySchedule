async function fetchSchedule() {
    const response = await fetch('Schedule.csv');
    const data = await response.text();
    const schedule = parseCSV(data);
    displayDailySchedule(schedule);
}

function parseCSV(data) {
    const lines = data.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);
    }
    return result;
}

function displayDailySchedule(schedule) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const dailySchedule = schedule.filter(item => item.Day === today);

    let scheduleHTML = '<ul>';
    dailySchedule.forEach(item => {
        scheduleHTML += `<li>${item.Time} - ${item.Activity} (${item['Individual/Group']})</li>`;
    });
    scheduleHTML += '</ul>';

    document.getElementById('dailySchedule').innerHTML = scheduleHTML;
}

// Fetch and display the schedule when the page loads
document.addEventListener('DOMContentLoaded', fetchSchedule);
