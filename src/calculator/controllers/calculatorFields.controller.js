(function () {
	'use strict';

	angular
		.module('app.calculator')
		.controller('calculatorFieldsController', calculatorFields);

	calculatorFields.$inject = [
		'calculatorFieldsService'
	]

	function calculatorFields(calculatorFieldsService) {
		var vc = this;
		vc.vm = calculatorFieldsService;

		//vc.vm.init();
		//estou incializando no AppController
	}

})();