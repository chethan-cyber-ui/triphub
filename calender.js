let currentDate = new Date(); // Current date for initial setup
let currentMonth = currentDate.getMonth(); // Get the current month (0-11)
let currentYear = currentDate.getFullYear(); // Get the current year
let markedDates = {}; // Object to store marked dates

// Function to render the calendar for the current month
function renderCalendar() {
    const calendarElement = document.getElementById('calendar');
    const monthDisplay = document.getElementById('month-display');
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Update the displayed month and year
    monthDisplay.innerText = `${months[currentMonth]} ${currentYear}`;

    // Clear previous calendar
    calendarElement.innerHTML = '';

    // Get the first and last day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // Get the starting day of the month

    // Add weekday headers (Sun, Mon, etc.)
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach(day => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('day');
        headerCell.innerText = day;
        calendarElement.appendChild(headerCell);
    });

    // Add empty cells to align the first day of the month correctly
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('div');
        calendarElement.appendChild(emptyCell);
    }

    // Loop through all days of the month and create day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.innerText = day;
        
        // Check if the day is marked
        const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
        if (markedDates[dateKey]) {
            dayCell.classList.add('marked');
        }

        // Add event listener to mark the date
        dayCell.addEventListener('click', () => markDate(day));

        calendarElement.appendChild(dayCell);
    }
}

// Function to mark a date
function markDate(day) {
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    
    // Toggle the marked state of the date
    if (markedDates[dateKey]) {
        delete markedDates[dateKey]; // Unmark the date
    } else {
        markedDates[dateKey] = true; // Mark the date
    }

    // Re-render the calendar to show the updated marked dates
    renderCalendar();

    // Show popup notification
    showNotification();
}

// Function to show the popup notification
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Hide the notification after 3 seconds
}

// Function to navigate to the previous month
function previousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
}

// Function to navigate to the next month
function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
}

// Initial rendering of the calendar
renderCalendar();
