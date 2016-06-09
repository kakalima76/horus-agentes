angular.module('app')
.controller('modalController', ['$uibModalInstance', function($uibModalInstance){
	var vm = this;

	vm.modal = {
		cancel: function(){
			$uibModalInstance.dismiss('cancel');
		},

		ok: function(){
			$uibModalInstance.close({ordem: vm.ordem});
		}
	}

	//deixei preparado para receber o resultado para um possível serviço pegar o dado
	$uibModalInstance.result.then(function(data){
		console.log(data);
	})


}])   