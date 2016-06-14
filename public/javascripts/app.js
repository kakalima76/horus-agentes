angular.module('app', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'template_login/login.html',
		controller: 'loginController',
		controllerAs: 'vm'
	})

	.when('/autos', {
		templateUrl: 'template_auto/auto.html',
		controller: 'autoController',
		controllerAs: 'vm'
	})

	.when('/anexos', {
		templateUrl: 'template_anexo/anexo.html',
		controller: 'anexoController',
		controllerAs: 'vm'
	})

	.when('/estatisticas', {
		templateUrl: 'template_estatistica/estatistica.html',
		controller: 'estatisticaController',
		controllerAs: 'vm'
	})

	.when('/lacres', {
		templateUrl: 'template_lacre/lacre.html',
		controller: 'lacreController',
		controllerAs: 'vm'
	})

	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({
  		enabled: false,
  		requireBase: false
	});
}])