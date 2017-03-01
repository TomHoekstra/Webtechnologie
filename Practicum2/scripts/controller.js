angular.module('gylfiApp').controller('gylfiController', ['$scope', '$route', function ($scope, $route) {
  this.stats = "club";
  this.route = $route;
  this.images = [
    {
      index: 1,
      src:  "/images/gylfi_1.jpg"
    },
    {
      index: 2,
      src:  "/images/gylfi_2.jpg"
    },
    {
      index: 3,
      src: "/images/gylfi_3.jpg"
    },
    {
      index: 4,
      src:  "/images/gylfi_4.png"
    },
    {
      index: 5,
      src:  "/images/gylfi_5.jpg"
    },
    {
      index: 6,
      src:  "/images/gylfi_6.jpg"
    },
  ];
}]);