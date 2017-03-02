angular.module('gylfiApp').controller('mapController', [function () {
    this.map;
    this.markers = [];
    var _this = this;

    this.initialize = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 45.777222, lng: 3.087025 },
            zoom: 4,
        });

        _this.getJSON();

        var markerCluster = new MarkerClusterer(map, _this.markers,
            { imagePath: 'images/markers/m' });
    };

    this.getJSON = function () {
        $.ajax({
            url: '../sources/maps.json',
            async: false,
            dataType: 'json',
            success: function (response) {
                $.each(response, function (key, data) {
                    _this.markers.push(new google.maps.Marker({
                        position: data.position,
                        label: data.label,
                        title: data.title
                    }));
                });
            }
        });
    };

//Keep for generating JSON
    //     _this.createEuropeanMarkers();
    // this.markers = [];
    //     this.createEuropeanMarkers = function () {
    //         /*Saint Ettiene*/
    //         this.markers.push(new google.maps.Marker({
    //             position: { lat: 45.4607318, lng: 4.3901162 },
    //             label: "G",
    //             title: "Portugal 1 - 1 Iceland"
    //         }));
    //         /*Marseille*/
    //         this.markers.push(new google.maps.Marker({
    //             position: { lat: 43.269827, lng: 5.3958873 },
    //             label: "Y",
    //             title: "Iceland 1 - 1 Hungary"
    //         }));
    //         /*Saint Denis*/
    //         this.markers.push(new google.maps.Marker({
    //             position: { lat: 48.936181, lng: 2.457443 },
    //             label: "L",
    //             title: "Iceland 2 - 1 Austria"
    //         }));
    //         /*Nice*/
    //         this.markers.push(new google.maps.Marker({
    //             position: { lat: 43.7050594, lng: 7.192585 },
    //             label: "F",
    //             title: "England 1 - 2 Iceland"
    //         }));
    //         /*Saint Denis*/
    //         this.markers.push(new google.maps.Marker({
    //             position: { lat: 48.936181, lng: 2.357443 },
    //             label: "I",
    //             title: "France 5 - 2 Iceland"
    //         }));
    //     };

    google.maps.event.addDomListener(window, 'load', this.initialize);
}]);




