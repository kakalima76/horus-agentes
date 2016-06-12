angular.module('app')
.controller('anexosController', ['$uibModal', 'produtosService', 'bairrosService', 'agentesService', function($uibModal, produtosService, bairrosService, agentesService){
	var vm = this;
	vm.showLacre = true;
	vm.arrayEscolha = [];
	vm.arrayExibe = [];
	
	vm.produtos = produtosService.get().sort(compareProduto);
	vm.filtros = produtosService.getFiltro().sort(compareFiltro);
	vm.agentes = [];
	

	function compareAgentes(a,b) {
	  	if(a.nome < b.nome){
	  		return -1;
	  	}else if (a.nome > b.nome){
	  		return 1;
	  	}else{
	  		return 0;
	    }	 
	}

	var promise = agentesService.get();
	promise.then(function(dados){
		dados.data.forEach(function(value){
			vm.agentes.push({nome: value.nome});
		})

		vm.agentes = vm.agentes.sort(compareAgentes);
	})
	
	vm.bairros = bairrosService.getBairros();

	var soma = 0;

	vm.pegaRuas = function(value){
			function compareRuas(a,b,c,d) {
		  	if(a.logradouro < b.logradouro){
		  		return -1;
		  	}else if (a.logradouro > b.logradouro){
		  		return 1;
		  	}else{
		  		return 0;
		    }	 
		}

			var promise = bairrosService.get(value);
			promise.then(function(dados){
			vm.ruas = dados.data.sort(compareRuas);
		})
	}


	vm.lancar = function(){
		vm.showLacre = false;
	}

	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}


	function compareFiltro(a,b,c,d) {
	  	if(a.filtro < b.filtro){
	  		return -1;
	  	}else if (a.filtro > b.filtro){
	  		return 1;
	  	}else{
	  		return 0;
	    }	 
	}

	function compareProduto(a,b,c,d) {
	  	if(a.produto < b.produto){
	  		return -1;
	  	}else if (a.produto > b.produto){
	  		return 1;
	  	}else{
	  		return 0;
	    }	 
	}

	vm.excluir = function(value){
		vm.arrayEscolha.splice(vm.arrayEscolha.indexOf(value), 1);
	}

	vm.confirmar = function(tipo){

		tipo.lacre = vm.lacre;
		if(!isEmpty(vm.trm)){
			tipo.trm = vm.trm;
		}else{
			tipo.trm = '';
		}

		vm.produto = null;
		var newArrayFiltro =  vm.filtros;
		if(tipo && !isEmpty(vm.lacre)){
					if(!isEmpty(tipo.quantidade)){

						function filtrarEstatística(value){
							if(value.filtro === tipo.tipo){
								return true;
							}
						}

						function filtrarProduto(value){
							if(value.produto === tipo.produto){
								return true;
							}
						}

						newArrayFiltro =newArrayFiltro.filter(filtrarEstatística);
						newArrayFiltro.forEach(function(value){
							if(value['total']){
								value.total = value.total + tipo.quantidade;
							}else{
								value.total = tipo.quantidade;
							}
						})
				
				vm.arrayEscolha.push(tipo);


					}else{
						alert('defina a quantidade!!!')
					}
		}else{
			alert('Preencha todos os campos!!!');
		}//if para definir se há filtro
	}
	

	vm.filtrarProduto = function(tipo){	

		function filtrarProduto(value){
			if(value.tipo === tipo.filtro){
				return true;
			}
		}
			var array =  produtosService.get().filter(filtrarProduto);
			vm.produtos = array.sort(compareFiltro);
	}


	vm.salvarLacre = function(){
		vm.arrayEscolha.forEach(function(value){
			vm.arrayExibe.push(value);
		})

		vm.arrayEscolha = [];
		vm.lacre = null;
		vm.trm = null;
		vm.showLacre = true;
	}

	vm.salvar = function(){
			
		function testaView(){
			if(isEmpty(vm.agente) || isEmpty(vm.date) || isEmpty(vm.hora) || isEmpty(vm.bairro) || isEmpty(vm.logradouro)){
				console.log(vm.agente);
				console.log(vm.date);
				console.log(vm.hora);
				console.log(vm.bairro);
				console.log(vm.logradouro);
				return false;
			}
		
			return true;
		}

		
		if(testaView){
			var distinctLacre = []
			var arrayObjLacre = []
			vm.arrayExibe.forEach(function(value){
				if(distinctLacre.indexOf(value.lacre) === -1){
					distinctLacre.push(value.lacre);
					arrayObjLacre.push({numero: value.lacre});
				}
			})	

			arrayObjLacre.forEach(function(value){
				vm.arrayExibe.forEach(function(exibido){
					if(exibido.lacre === value.numero){
						if(!value['mercadoria']){
							value.mercadoria = [];
							value.mercadoria.push({auto: vm.auto, agente: vm.agente.nome, data: vm.date,  hora: vm.hora, bairro: vm.bairro.bairro, logradouro: vm.logradouro.logradouro, produto: exibido.produto, quantidade: exibido.quantidade});						
							value.trm = exibido.trm;
						}else{
							value.mercadoria.push({auto: vm.auto, agente: vm.agente.nome, data: vm.date,  hora: vm.hora, bairro: vm.bairro.bairro, logradouro: vm.logradouro.logradouro, produto: exibido.produto, quantidade: exibido.quantidade});
							value.trm = exibido.trm;
						}	
					}
				})

				console.log(value);
			})

			
		}
		


		function reseta(){
			vm.auto = null;
			vm.agente = null;
			vm.date = null;
			vm.hora = null;
			vm.bairro = null;
			vm.logradouro = null;
			vm.arrayExibe = [];
		}

		reseta();	
		
	}

	vm.validaHora = function(value){
		function valida(valor){
			var hora = valor.substring(0,2);
			var separador = valor.substring(2,3);
			var minutos = valor.substring(3,5);

			if(parseInt(hora) > 24){
				return false;
			}

			if(parseInt(minutos) > 59){
				return false;
			}

			if(separador !== ':'){
				return false;
			}

			return true;
		}

		if (value.length === 5){
			if(!valida(value)){
				alert('Hora mal formatada!!!');
				vm.hora = null;
			}
		}
		
	}

}]);

