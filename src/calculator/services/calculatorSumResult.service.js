(function () {
	'use strict';

	angular
		.module('app.calculator')	
		.factory('calculatorSumResultService', calculatorSumResult);

	calculatorSumResult.$inject = [
		'calculatorFieldsService'
	]

	function calculatorSumResult(calculatorFieldsService){
		var vm = {
			init: init,
			somar: somar
		};

		vm.cfs = calculatorFieldsService;
		return vm;

		function init(){
			vm.result = 0;
		}

		function somar(){
			vm.result = vm.cfs.numero1 + vm.cfs.numero2;
		}
	}

})();