let map;
let marker;
let infoWindow;
let searchBox;

function initMap() {
    // Initialize map centered at a default location (e.g., New York)
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12,
    });

    // Initialize info window for showing details of marked places
    infoWindow = new google.maps.InfoWindow();

    // Create a search box and link it to the UI element
    const input = document.getElementById('search-input');
    searchBox = new google.maps.places.SearchBox(input);
    
    // Bias the search results to the map’s viewport
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    // Listen for the event when the user selects a place from the search results
    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;

        // Clear any previous markers
        marker && marker.setMap(null);

        // Get the location of the selected place
        const place = places[0];
        const placeLocation = place.geometry.location;

        // Set the map center to the selected place
        map.setCenter(placeLocation);
        map.setZoom(15);

        // Create a marker for the selected place
        marker = new google.maps.Marker({
            position: placeLocation,
            map: map,
            title: place.name,
        });

        // Display information about the place
        infoWindow.setContent(`<h3>${place.name}</h3><p>${place.formatted_address}</p>`);
        infoWindow.open(map, marker);

        // Show a notification for new place marked
        showNotification();
    });

    // Allow placing custom markers on click
    map.addListener('click', (event) => {
        const clickedLocation = event.latLng;

        // Create a marker at the clicked location
        marker = new google.maps.Marker({
            position: clickedLocation,
            map: map,
        });

        // Display a simple info window on marker click
        infoWindow.setContent('Marked Location');
        infoWindow.open(map, marker);

        // Show a notification for new place marked
        showNotification();
    });
}

// Show the popup notification
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);  // Hide notification after 3 seconds
}

// Search for a place manually (triggered by search button)
function searchPlace() {
    const input = document.getElementById('search-input').value;
    if (input) {
        searchBox.setQuery(input);
    }
}
