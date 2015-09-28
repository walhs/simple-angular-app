(function () {
	'use strict';

	angular
		.module('app.calculator')
		.factory('calculatorFieldsService', [calculatorFieldsService]);

	function calculatorFieldsService() {
		var vm = {
			init: init,
		};
		
		return vm;

		function init(){
			vm.numero1 = 0;
			vm.numero2 = 0;
		}
	}

})();