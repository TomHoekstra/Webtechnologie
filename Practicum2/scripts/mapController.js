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

    google.maps.event.addDomListener(window, 'load', this.initialize);
    //Fix for not loading first time
    $(document).bind("projectLoadComplete", this.initialize);
}]);




