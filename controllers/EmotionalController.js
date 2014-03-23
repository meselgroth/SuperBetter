(function () {
    'use strict';

    var controllerId = 'EmotionalController';

    angular.module('superBetter').controller(controllerId,
        ['$scope', EmotionalController]);

	function EmotionalController($scope) {
		$scope.photo = 'https://onedrive.live.com/#cid=F0208DBD8F96ED0A&id=F0208DBD8F96ED0A%216180&v=3';
	}
})();
