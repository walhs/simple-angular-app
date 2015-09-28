(function () {
	'use strict';

	angular
		.module('app.calculator')
		.controller('calculatorSumResultController', calculatorSumResult);

	calculatorSumResult.$inject = [
		'calculatorFieldsService'
	]

	function calculatorSumResult(calculatorFieldsService) {
		var vc = this;
		vc.vm = calculatorFieldsService;

		vc.soma = soma;

		function soma(){
			vc.result = vc.vm.numero1 + vc.vm.numero2;
		}
	}

})();