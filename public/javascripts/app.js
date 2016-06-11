angular.module('app', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'template_login/login.html',
		controller: 'loginController',
		controllerAs: 'vm'
	})

	.when('/anexos', {
		templateUrl: 'template_anexos/anexos.html',
		controller: 'anexosController',
		controllerAs: 'vm'
	})

	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({
  		enabled: false,
  		requireBase: false
	});
}])