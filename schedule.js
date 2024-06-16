const weeklySchedule = {
    'Monday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Cleaning stairs',
    'Tuesday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Light laundry',
    'Wednesday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Taking out the trash',
    'Thursday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Cleaning stairs',
    'Friday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Light laundry',
    'Saturday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\nMorning: Coding projects\nAfternoon: Chill outdoor couple activities\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk',
    'Sunday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\nMorning: Coding projects\nAfternoon: Chill outdoor couple activities\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk'
};

function displayDailySchedule() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const dailySchedule = weeklySchedule[today];
    document.getElementById('dailySchedule').innerText = dailySchedule.replace(/\n/g, '<br>');
}

// Display the daily schedule when the page loads
document.addEventListener('DOMContentLoaded', displayDailySchedule);
