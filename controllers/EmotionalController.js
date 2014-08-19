(function () {
    'use strict';

    var controllerId = 'EmotionalController';

    angular.module('superBetter').controller(controllerId,
        ['$scope', '$http', EmotionalController]);

    function EmotionalController($scope, $http) {
        $http.get('resilience.json')
       .then(function (data) {
           $scope.photo = data.emotional.photo;
       });
	    //$scope.photo = 'https://scontent-b-lhr.xx.fbcdn.net/hphotos-prn2/t1.0-9/1781917_10152255627643188_421273889_n.jpg';
	}
})();
