angular.module('app')
.controller('lacreController', ['lacreService', function(lacreService){
	var vm = this;
	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}

	vm.sub_lacre = 'templates/sub_lacre.html';

	vm.buscar = function(lacre){

		if(!isEmpty(lacre)){
				vm.mostrarLoading = true;
				var promise = lacreService.get(lacre);
				promise.then(function(dados){
				vm.mostrarLoading = false;
				vm.lacres = dados.data;
				});
				promise.catch(function(){
				vm.mostrarLoading = false;
				alert('Problemas no lacreService');
				})
		}else{
			alert('Informe um número de lacre!');
		}
		
	}

}]);