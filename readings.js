const csvData = `
Day,Week,Proper,Psalms1,Psalms2,Old Testament,New Testament,Gospel
Sunday,1,Proper 10,148,149,150,114,115,Joshua 1:1-18,Acts 21:3-15,Mark 1:21-27
Monday,1,Proper 10,25,9,15,Joshua 2:1-14,Romans 11:1-12,Matthew 25:1-13
Tuesday,1,Proper 10,26,28,36,39,Joshua 2:15-24,Romans 11:13-24,Matthew 25:14-30
Wednesday,1,Proper 10,38,119:25-48,Joshua 3:1-13,Romans 11:25-36,Matthew 25:31-46
Thursday,1,Proper 10,37:1-18,37:19-42,Joshua 3:14-4:7,Romans 12:1-8,Matthew 26:1-16
Friday,1,Proper 10,31,35,Joshua 4:19-5:1,10-15,Romans 12:9-21,Matthew 26:17-29
Saturday,1,Proper 10,30,42,43,Joshua 6:1-14,Romans 13:1-7,Matthew 26:26-35
Sunday,2,Proper 11,66,67,19,46,Judges 11:1-11,29-40,2 Corinthians 11:21b-31,Mark 4:35-41
Monday,2,Proper 11,89:1-18,89:19-52,Judges 12:1-7,Acts 5:12-26,John 3:1-21
Tuesday,2,Proper 11,97,99,100,94,95,Judges 13:1-15,Acts 5:27-42,John 3:22-36
Wednesday,2,Proper 11,101,109:1-4(5-19)20-30,119:121-144,Judges 13:15-24,Acts 6:1-15,John 4:1-26
Thursday,2,Proper 11,105:1-22,105:23-45,Judges 14:1-19,Acts 6:15-7:16,John 4:27-42
Friday,2,Proper 11,102,107:1-32,Judges 14:20-15:20,Acts 7:17-29,John 4:43-54
Saturday,2,Proper 11,107:33-43,108:1-6(7-13),33,Judges 16:1-14,Acts 7:30-43,John 5:1-18
Sunday,3,Proper 12,93,96,34,Judges 6:1-24,2 Corinthians 9:6-15,Mark 3:20-30
Monday,3,Proper 12,80,77,79,Judges 6:25-40,Acts 2:37-47,John 1:1-18
Tuesday,3,Proper 12,78:1-39,78:40-72,Judges 7:1-18,Acts 3:1-11,John 1:19-28
Wednesday,3,Proper 12,119:97-120,81,82,Judges 7:19-8:12,Acts 3:12-26,John 1:29-42
Thursday,3,Proper 12,83,145,85,86,Judges 8:22-35,Acts 4:1-12,John 1:43-51
Friday,3,Proper 12,88,91,92,Judges 9:1-16,19-21,Acts 4:13-31,John 2:1-12
Saturday,3,Proper 12,87,90,136,Judges 9:22-25,50-57,Acts 4:32-5:11,John 2:13-25
`;

const readings = csvData.trim().split('\n').slice(1).map(row => {
    const [
        day, week, proper, psalm1, psalm2, psalm3, psalm4,
        oldTestamentBook, oldTestamentChapter, oldTestamentVerseStart, oldTestamentVerseEnd,
        newTestamentBook, newTestamentChapter, newTestamentVerseStart, newTestamentVerseEnd,
        gospelBook, gospelChapter, gospelVerseStart, gospelVerseEnd
    ] = row.split(',');

    return {
        day, week, proper, psalm1, psalm2, psalm3, psalm4,
        oldTestamentBook, oldTestamentChapter, oldTestamentVerseStart, oldTestamentVerseEnd,
        newTestamentBook, newTestamentChapter, newTestamentVerseStart, newTestamentVerseEnd,
        gospelBook, gospelChapter, gospelVerseStart, gospelVerseEnd
    };
});

function getTodaysReading() {
    const today = new Date().toLocaleString('en-US', { weekday: 'long' });
    return readings.filter(reading => reading.day === today);
}

function displayReading() {
    const todayReading = getTodaysReading();
    if (todayReading.length > 0) {
        const reading = todayReading[0];
        let psalms = [reading.psalm1, reading.psalm2, reading.psalm3, reading.psalm4].filter(psalm => psalm).join('<br>');
        document.getElementById('reading-title').innerText = `${reading.proper}`;
        document.getElementById('reading-content').innerHTML = `
            <p>Psalms:<br>${psalms}</p>
            <p>${reading.oldTestamentBook} ${reading.oldTestamentChapter}:${reading.oldTestamentVerseStart}-${reading.oldTestamentVerseEnd}</p>
            <p>${reading.newTestamentBook} ${reading.newTestamentChapter}:${reading.newTestamentVerseStart}-${reading.newTestamentVerseEnd}</p>
            <p>${reading.gospelBook} ${reading.gospelChapter}:${reading.gospelVerseStart}-${reading.gospelVerseEnd}</p>
        `;
    } else {
        document.getElementById('reading-title').innerText = 'No Reading Available';
        document.getElementById('reading-content').innerHTML = '';
    }
}
document.addEventListener('DOMContentLoaded', displayReading);
