angular.module('app')
.controller('loginController', ['$window', 'agentesService', '$location',  function($window, agentesService, $http, $location){
	var vm = this;
	console.log($window.localStorage['usuario']);

	vm.logar = function(){
		 var promise = agentesService.getAuth(vm.user);
		 promise.then(function(usuario){
		 	if(usuario.data.senha === vm.pass){
		 		$window.localStorage['usuario'] = usuario.data.nome;
		 		$location.path('anexos');
		 	}
		 })
		
	}
}])