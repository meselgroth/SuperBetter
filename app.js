(function () {
    'use strict';

    var superBetter = angular.module('superBetter', ['ngRoute']);

	superBetter.config(function ($routeProvider) {
		$routeProvider
			.when('/',
				{
					controller: 'EmotionalController',
					templateUrl: 'views/emotional.html'
				})
		.otherwise({ redirectTo: '/' });
	});


	//superBetter.controller('EmotionalController', function EmotionalController($scope) {
	//	$scope.photo = 'https://onedrive.live.com/#cid=F0208DBD8F96ED0A&id=F0208DBD8F96ED0A%216180&v=3';
	//});
})();