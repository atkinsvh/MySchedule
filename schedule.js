const campingSchedule = {
    'Friday': 'Arrive\nPM: Turkey jerkey\nPM: Trail mix',
    'Saturday': '7:00 AM: Eggs\n10:00 AM: Protein waffles\nNoon: Fruit salad\n5:00 PM: Hamburgers + fixings',
    'Sunday': 'Eggs + potatoes + toast\nJam packets?'
};

function displayCampingSchedule() {
    const fridaySchedule = campingSchedule['Friday'];
    const saturdaySchedule = campingSchedule['Saturday'];
    const sundaySchedule = campingSchedule['Sunday'];

    document.getElementById('fridaySchedule').innerText = fridaySchedule;
    document.getElementById('saturdaySchedule').innerText = saturdaySchedule;
    document.getElementById('sundaySchedule').innerText = sundaySchedule;
}

// Display the schedule when the page loads
document.addEventListener('DOMContentLoaded', displayCampingSchedule);
