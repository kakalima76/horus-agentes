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
		controllerAs: 'vm',
		resolve:{
			auth: ['authService', '$window', function(authService, $window){
				var promise = authService.autentica($window.localStorage['usuario']);
				promise.then(function(resp){
					console.log(resp);
				}).catch(function(err){
					console.log(err);
				})

				return promise;
			}]
		}
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