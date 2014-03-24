(function () {
    'use strict';

    var controllerId = 'EmotionalController';

    angular.module('superBetter').controller(controllerId,
        ['$scope', EmotionalController]);

	function EmotionalController($scope) {
	    $scope.photo = 'https://onedrive.live.com/embed?cid=F0208DBD8F96ED0A&resid=F0208DBD8F96ED0A%216180&authkey=ALpOxad6S8dLocA';
	}
})();
