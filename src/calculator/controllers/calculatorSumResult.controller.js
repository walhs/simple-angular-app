(function () {
	'use strict';

	angular
		.module('app.calculator')
		.controller('calculatorSumResultController', calculatorSumResult);

	calculatorSumResult.$inject = [
		'calculatorSumResultService'
	]

	function calculatorSumResult(calculatorSumResultService) {
		var vc = this;
		vc.vm = calculatorSumResultService;
		vc.vm.init();
	}

})();