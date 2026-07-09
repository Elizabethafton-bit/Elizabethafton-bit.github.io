// Kyoto coordinates: 35.0116° N latitude and 135.7681° E longitude
var coordinates = [35.0116, 135.7681];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Kyoto City!</p>").addTo(map);
