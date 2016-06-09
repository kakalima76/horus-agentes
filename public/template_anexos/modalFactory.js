angular.module('app')
.factory('modalFactory', ['$uibModal', function($uibModal){
	var deferred = $q.defer();

	var ordem = null;
	var set = function(dado){
		return ordem;
	}

	var get = function(){
		return ordem;
	}

	return {
		get: get,
		set: set
	}
}])