angular.module('app')
.controller('anexosController', ['$uibModal', 'produtosService', 'bairrosService', function($uibModal, produtosService, bairrosService){
	var vm = this;

	vm.produtos = produtosService.get();
	var promise = bairrosService.get('Colégio');
	promise.then(function(dados){
		vm.ruas = dados;
		console.log(vm.ruas);
	})

	vm.bairros = bairrosService.getBairros();


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