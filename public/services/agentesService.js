angular.module('app')
.service('agentesService', ['$http', function($http){
	var get = function(){
		return  $http.get('http://ccuanexos.herokuapp.com/agentes');
	}

	return {
		get: get
	}

	
}])