function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 52.355518,
            lng: -1.174320
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

    // Football clubs in alphabetical order - not the stadiums in alphabetical order.
    var locations = [
        {lat: 51.555082, lng: -0.108449},
        {lat: 52.509275, lng: -1.884794},
        {lat: 50.735394, lng: -1.838311},
        {lat: 50.860894, lng: -0.081494},
        {lat: 53.789176, lng: -2.230174},
        {lat: 51.481843, lng: -0.190935},
        {lat: 51.398014, lng: -0.085850},
        {lat: 53.438819, lng: -2.966319},
        {lat: 52.620399, lng: -1.142168},
        {lat: 53.430868, lng: -2.960830},
        {lat: 53.483196, lng: -2.200395},
        {lat: 53.463097, lng: -2.291329},
        {lat: 54.975279, lng: 1.622890},
        {lat: 52.622166, lng: 1.309175},
        {lat: 53.370393, lng: -1.470901},
        {lat: 50.905887, lng: -1.390973},
        {lat: 51.604326, lng: -0.066392},
        {lat: 51.650328, lng: -0.402555},
        {lat: 51.538770, lng: -0.016593},
        {lat: 52.590256, lng: -2.130440},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}