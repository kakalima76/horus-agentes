angular.module('app')
.controller('loginController', ['$scope', '$http', '$location', function($scope, $http, $location){
	var vm = this;
	vm.logar = function(){
		console.log({usuario: vm.user, senha: vm.pass});
		$location.path('anexos');
	}
}])