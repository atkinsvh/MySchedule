const bibleReadings = {
    'Friday': {
        proper: 'Proper 10',
        psalms: ['31', '35'],
        oldTestament: 'Joshua 4:19-5:1, 10-15',
        newTestament: 'Romans 12:9-21',
        gospel: 'Matthew 26:17-29'
    },
    'Saturday': {
        proper: 'Proper 10',
        psalms: ['30', '42', '43'],
        oldTestament: 'Joshua 6:1-14',
        newTestament: 'Romans 13:1-7',
        gospel: 'Matthew 26:26-35'
    },
    'Sunday': {
        proper: 'Proper 11',
        psalms: ['66', '67', '19', '46'],
        oldTestament: 'Judges 11:1-11, 29-40',
        newTestament: '2 Corinthians 11:21b-31',
        gospel: 'Mark 4:35-41'
    },
    'Monday': {
        proper: 'Proper 11',
        psalms: ['89:1-18', '89:19-52'],
        oldTestament: 'Judges 12:1-7',
        newTestament: 'Acts 5:12-26',
        gospel: 'John 3:1-21'
    },
    'Tuesday': {
        proper: 'Proper 11',
        psalms: ['97', '99', '100', '94', '95'],
        oldTestament: 'Judges 13:1-15',
        newTestament: 'Acts 5:27-42',
        gospel: 'John 3:22-36'
    },
    'Wednesday': {
        proper: 'Proper 11',
        psalms: ['101', '109:1-4(5-19)20-30', '119:121-144'],
        oldTestament: 'Judges 13:15-24',
        newTestament: 'Acts 6:1-15',
        gospel: 'John 4:1-26'
    },
    'Thursday': {
        proper: 'Proper 11',
        psalms: ['105:1-22', '105:23-45'],
        oldTestament: 'Judges 14:1-19',
        newTestament: 'Acts 6:15-7:16',
        gospel: 'John 4:27-42'
    },
    'Friday': {
        proper: 'Proper 11',
        psalms: ['102', '107:1-32'],
        oldTestament: 'Judges 14:20-15:20',
        newTestament: 'Acts 7:17-29',
        gospel: 'John 4:43-54'
    },
    'Saturday': {
        proper: 'Proper 11',
        psalms: ['107:33-43', '108:1-6(7-13)'],
        oldTestament: 'Judges 16:1-14',
        newTestament: 'Acts 7:30-43',
        gospel: 'John 5:1-18'
    },
    'Sunday': {
        proper: 'Proper 12',
        psalms: ['93', '96', '34'],
        oldTestament: 'Judges 6:1-24',
        newTestament: '2 Corinthians 9:6-15',
        gospel: 'Mark 4:35-41'
    },
    'Monday': {
        proper: 'Proper 12',
        psalms: ['80', '77', '79'],
        oldTestament: 'Judges 6:25-40',
        newTestament: 'Acts 2:37-47',
        gospel: 'John 1:1-18'
    },
    'Tuesday': {
        proper: 'Proper 12',
        psalms: ['78:1-39', '78:40-72'],
        oldTestament: 'Judges 7:1-18',
        newTestament: 'Acts 3:1-11',
        gospel: 'John 1:19-28'
    },
    'Wednesday': {
        proper: 'Proper 12',
        psalms: ['119:97-120', '81', '82'],
        oldTestament: 'Judges 7:19-8:12',
        newTestament: 'Acts 3:12-26',
        gospel: 'John 1:29-42'
    },
    'Thursday': {
        proper: 'Proper 12',
        psalms: ['83', '145', '85', '86'],
        oldTestament: 'Judges 8:22-35',
        newTestament: 'Acts 4:1-12',
        gospel: 'John 1:43-51'
    },
    'Friday': {
        proper: 'Proper 12',
        psalms: ['88', '91', '92'],
        oldTestament: 'Judges 9:1-16, 19-21',
        newTestament: 'Acts 4:13-31',
        gospel: 'John 2:1-12'
    },
    'Saturday': {
        proper: 'Proper 12',
        psalms: ['87', '90', '136'],
        oldTestament: 'Judges 9:22-25, 50-57',
        newTestament: 'Acts 4:32-5:11',
        gospel: 'John 2:13-25'
    }
};

function displayBibleReading() {
    const today = new Date().toLocaleString('en-US', { weekday: 'long' });
    const reading = bibleReadings[today];

    if (reading) {
        const psalms = reading.psalms.join('<br>');
        document.getElementById('reading-title').innerText = `Daily Bible Reading Challenge\n${reading.proper}`;
        document.getElementById('reading-content').innerHTML = `
            <p>Psalms:<br>${psalms}</p>
            <p>${reading.oldTestament}</p>
            <p>${reading.newTestament}</p>
            <p>${reading.gospel}</p>
        `;
    } else {
        document.getElementById('reading-title').innerText = 'No Reading Available';
        document.getElementById('reading-content').innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', displayBibleReading);
