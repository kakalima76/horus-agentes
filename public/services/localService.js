angular.module('app')
.service('localService', [function(){
	var local = ['MOP01','MOP02','MOP03','MOP04','MOP05','MOP06','MOP07','MOP08','PAF01','PAF02','PAF03','PAF04','PAF05','PAF06','PAF07','PAF08','PAF09','PAF10','PAF11'];
	var localAnexo = ['TODOS','MOP01','MOP02','MOP03','MOP04','MOP05','MOP06','MOP07','MOP08','PAF01','PAF02','PAF03','PAF04','PAF05','PAF06','PAF07','PAF08','PAF09','PAF10','PAF11'];

	var getLogin = function(){
		return local;
	}

	var get = function(){
		return localAnexo;
	}

	return {
		getLogin: getLogin,
		get: get
	}

}])