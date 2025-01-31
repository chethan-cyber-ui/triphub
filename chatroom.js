// Establish socket connection to the server
const socket = io();

// Send a message to the server
function sendMessage(event) {
    if (event.key === 'Enter' || !event.key) {
        let messageInput = document.getElementById("messageInput");
        let message = messageInput.value.trim();
        if (message) {
            socket.emit('sendMessage', message); // Emit the message to the server
            messageInput.value = "";
        }
    }
}

// Listen for new messages from other users
socket.on('receiveMessage', (message) => {
    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<p>${message}</p>`;
    let chatBox = document.getElementById("chatBox");
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
});

// Handle photo uploads
function uploadPhoto(event) {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let photoData = e.target.result;
            socket.emit('sendPhoto', photoData); // Emit the photo to the server
        };
        reader.readAsDataURL(file);
    }
}

// Listen for new photos shared by others
socket.on('receivePhoto', (photo) => {
    let photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML += `<img src="${photo}" alt="Shared Photo">`;
});

// Show a notification when a message/photo is received
function showNotification() {
    let notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}
