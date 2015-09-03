angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/second', {
			templateUrl: 'views/second.html',
			controller: 'SecondController'
		});


	$locationProvider.html5Mode(true);

}]);