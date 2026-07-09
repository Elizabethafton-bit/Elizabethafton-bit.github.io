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
var kyotomarker = L.marker(coordinates, {title: "Kyoto, Japan"}).bindPopup(
    "<h4>Kyoto, Japan</h4><br><a href='travel.html'>Learn more here</a><br><iframe src='travel.html'></iframe>"
).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Kyoto City!</p>").addTo(map);
var marker1 = L.circleMarker(place1, {color: "black", fillColor: "#a37936",radius: 80}).bindPopup("<p>Hello, from Nara city!</p>").addTo(map);
var marker2 = L.circleMarker(place2, {color: "black", fillColor: "#33419A",radius: 80}).bindPopup("<p>Hello, from Osaka city!</p>").addTo(map);
var marker3 = L.circleMarker(place3, {color: "black", fillColor: "#50C878",radius: 80}).bindPopup("<p>Hello, from Uji city!</p>").addTo(map);
