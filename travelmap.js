// Kyoto coordinates: 35.0116° N latitude and 135.7681° E longitude
var coordinates = [35.0116, 135.7681];
var place1= [34.68444, 135.80500];
var place2= [34.69374, 135.50218];
var place3= [34.88444, 135.79972];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Kyoto City!</p>").addTo(map);
var marker1 = L.cricle(place1, {color: "black", fillColor: "#a37936",radious: 80}).addTo(map);
