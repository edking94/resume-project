function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 54.5260,
            lng: 15.2551
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
        lat: 53.1424,
        lng: -7.6921
    }, {
        lat: 55.3781,
        lng: -3.4360
    }, {
        lat: 46.2276,
        lng: -2.2137
    }, {
        lat: 40.4637,
        lng: -3.7492
    }, {
        lat: 51.1657,
        lng: 10.4515
    }, {
        lat: 41.8719,
        lng: 12.5674
    }];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}