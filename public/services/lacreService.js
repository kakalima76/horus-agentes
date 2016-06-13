angular.module('app')
.service('lacreService', ['$http', function($http){
	var salvar = function(obj){
		var promise = $http.post('http://ccuanexos.herokuapp.com/lacre/', obj);
		promise.then(function(){
		}).catch(function(){
			alert('Problemas no lacreService!');
		})
	}

	return{
		salvar: salvar
	}
}])