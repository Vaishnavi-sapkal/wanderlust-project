let map = L.map("map").setView([coordinates[1], coordinates[0]], 9);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let redIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 35],
  iconAnchor: [12, 35],
  popupAnchor: [1, -34],
  shadowSize: [35, 35],
});

L.marker([coordinates[1], coordinates[0]], { icon: redIcon }) //latitude and longitude
  .addTo(map)
  .bindPopup("Exact location will be provided after Booking")
  .openPopup();
