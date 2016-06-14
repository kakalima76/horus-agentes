angular.module('app')
.controller('anexoController',['anexoService', function(anexoService){
	var vm = this;
	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}

	vm.sub_lacre = 'templates/sub_lacre.html';

		vm.buscar = function(data){
			function compare(a,b) {
		  	if(a.numero < b.numero){
		  		return -1;
		  	}else if (a.numero > b.numero){
		  		return 1;
		  	}else{
		  		return 0;
		    }	 
		}
		
		if(!isEmpty(data)){
		vm.mostrarLoading = true;
		var data = data.replace(/(\/)+/g, '');
			var promise = anexoService.get(data);
			promise.then(function(dados){
				vm.mostrarLoading = false;
				vm.lacres = dados.data.sort(compare);
			});

			promise.catch(function(){
				vm.mostrarLoading = false;
				alert('Problemas no anexoService');
			})


		}else{
			alert('Informe uma data!')
		}
	}
}]);