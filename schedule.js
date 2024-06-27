const weeklySchedule = {
    'Monday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Cleaning stairs',
    'Tuesday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Light laundry',
    'Wednesday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Deep clean kitchen',
    'Thursday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Clean bathrooms',
    'Friday': '7:00 AM - Wake up, stretch, and light journaling\n8:00 AM - Breakfast\n9:00 AM - 12:00 PM - Coding projects\n12:00 PM - Lunch\n1:00 PM - 5:00 PM - Coding projects\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - 8:00 PM - Group reading activity\n9:00 PM - Dog walk\nRotating Chores: Vacuum house',
    'Saturday': '8:00 AM - Wake up and light breakfast\n9:00 AM - Outdoor couple activity\n12:00 PM - Lunch\n1:00 PM - Free time\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - Movie night\n9:00 PM - Dog walk\nRotating Chores: Yard work',
    'Sunday': '8:00 AM - Wake up and light breakfast\n9:00 AM - Outdoor couple activity\n12:00 PM - Lunch\n1:00 PM - Free time\n5:00 PM - Dog walk\n6:00 PM - Dinner\n7:00 PM - Relaxing evening\n9:00 PM - Dog walk\nRotating Chores: Laundry and ironing'
};

function displaySchedule() {
    const now = new Date();
    const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
    const schedule = weeklySchedule[dayOfWeek];
    document.getElementById('dailySchedule').innerText = schedule;
}

// Display the schedule when the page loads
document.addEventListener('DOMContentLoaded', displaySchedule);
