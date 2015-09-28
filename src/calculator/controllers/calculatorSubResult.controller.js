(function () {
	'use strict';

	angular
		.module('app.calculator')
		.controller('calculatorSubResultController', calculatorSubResult);

	calculatorSubResult.$inject = [
		'calculatorFieldsService'
	]

	function calculatorSubResult(calculatorFieldsService) {
		var vc = this;
		vc.vm = calculatorFieldsService;

		vc.subtrair = subtrair;

		function subtrair() {
			vc.result = vc.vm.numero1 - vc.vm.numero2;
		}
	}

})();