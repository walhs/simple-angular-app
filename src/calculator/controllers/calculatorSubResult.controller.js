(function () {
	'use strict';

	angular
		.module('app.calculator')
		.controller('calculatorSubResultController', calculatorSubResult);

	calculatorSubResult.$inject = [
		'calculatorSubResultService'
	]

	function calculatorSubResult(calculatorSubResultService) {
		var vc = this;
		vc.vm = calculatorSubResultService; //acessando no template
		vc.vm.init();
	}

})();