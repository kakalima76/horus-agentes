angular.module('app')
.controller('anexosController', ['$uibModal', function($uibModal){
	var vm = this;

	vm.popup = function(){
		var modal = $uibModal.open({
			templateUrl: 'template_anexos/modal.html',
			controller: 'modalController',
			controllerAs: 'vm',
			resolve: {
				dadosOrdem: function(){
					numero: vm.ordem;
				}
			}
		})
	}

}]);