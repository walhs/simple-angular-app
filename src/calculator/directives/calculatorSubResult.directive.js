(function () {
	'use strict';

	angular
		.module('app.calculator')
		.directive('calculatorSubResult', [calculatorSubResult]);

		function calculatorSubResult() {
			return {
				restrict:  'E',
				templateUrl: 'src/calculator/directives/calculatorSubResult.directive.html',
				scope:{},
				replace: true, //remove o nome da diretiva no html: para isso encapsular todo o html da diretiva em uma div
				controller: 'calculatorSubResultController',
				controllerAs: 'vc'
			};
		}
})();