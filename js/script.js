angular
   .module('npaez', [
      'ngAnimate',
      'ui.bootstrap'
   ])
   .config(function() {
      function initialize() {
         new google.maps.Map(document.getElementById("googleMap"), {
            center: new google.maps.LatLng(-32.956029, -60.6480352),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
         });
      };
      google.maps.event.addDomListener(window, 'load', initialize);
   })
   .controller('gmapsCtrl', function($scope) {
         $scope.mapVisible    = true;
         $scope.setMapVisible = function() {
            $scope.mapVisible ? $scope.mapVisible = false : $scope.mapVisible = true;
         }
      })
   .controller('footerCtrl', function($scope) {
      $scope.currentDate = new Date().getFullYear();
   });