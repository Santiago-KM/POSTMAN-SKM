var map = L.map('map').setView([21.88234, -102.28259], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);


var iconAguascalientes = L.icon({
    iconUrl: './images/mex.jpg',
    iconSize: [38, 38],
    iconAnchor: [19, 38], 
    popupAnchor: [0, -38]
});
var marker = L.marker([21.88234, -102.28259], { icon: iconAguascalientes }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

var iconPlazaPatria = L.icon({
    iconUrl: './images/plaza.JPEG',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconPlazaPatria }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

var iconMuseoMuerte = L.icon({
    iconUrl: './images/muse.jpg',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconMuseoMuerte }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");


var iconBar1 = L.icon({
    iconUrl: './images/cerv.jpg',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});
var bar1 = L.marker([21.8806, -102.2958], { icon: iconBar1 }).addTo(map);
bar1.bindPopup("<b>Cervecería La Patrona</b><br>Un bar popular para disfrutar cervezas artesanales.");

var iconBar2 = L.icon({
    iconUrl: './images/cerv.jpg', 
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});
var bar2 = L.marker([21.8835, -102.2967], { icon: iconBar2 }).addTo(map);
bar2.bindPopup("<b>La Cava de la Estación</b><br>Un bar con un ambiente único y una gran selección de vinos.");

var iconBar3 = L.icon({
    iconUrl: './images/cerv.jpg',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});
var bar3 = L.marker([21.8812, -102.2900], { icon: iconBar3 }).addTo(map);
bar3.bindPopup("<b>El Dátil Bar</b><br>Bar con cócteles exquisitos y un ambiente relajado.");

var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};
var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte, bar1, bar2, bar3]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};
L.control.layers(baseMaps, overlayMaps).addTo(map);
