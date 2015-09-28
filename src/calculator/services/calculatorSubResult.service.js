(function () {
	'use strict';

	angular
		.module('app.calculator')	
		.factory('calculatorSubResultService', calculatorSubResult);

	calculatorSubResult.$inject = [
		'calculatorFieldsService'
	]

	function calculatorSubResult(calculatorFieldsService){
		var vm = {
			init: init,
			subtrair: subtrair
		};

		vm.cfs = calculatorFieldsService;
		return vm;

		function init(){
			vm.result = 0;
		}

		function subtrair() {
			vm.result = vm.cfs.numero1 - vm.cfs.numero2;
		}
	}

})();