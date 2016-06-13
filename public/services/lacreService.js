angular.module('app')
.service('lacreService', ['$http', function($http){
	var salvar = function(obj){
		var promise = $http.post('http://ccuanexos.herokuapp.com/lacre/', obj);
		promise.then(function(){
			console.log('ok');
		}).catch(function(){
			console.log('fudeu');
			console.log(obj);
		})
	}

	return{
		salvar: salvar
	}
}])