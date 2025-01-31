// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px'; // Toggle Sidebar
}

// Function to toggle the settings menu visibility
function toggleSettings() {
    const settingsMenu = document.getElementById('settings');
    settingsMenu.style.display = (settingsMenu.style.display === 'none' || settingsMenu.style.display === '') ? 'block' : 'none';
}

// Slideshow Functionality
let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to simulate Map feature
function showMap() {
    showNotification("Map feature coming soon!");
}

// Function to simulate Calendar feature
function showCalendar() {
    showNotification("Calendar feature coming soon!");
}

// Function to simulate Chatroom feature
function showChatroom() {
    showNotification("Chatroom feature coming soon!");
}

// Function to display notifications
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}
