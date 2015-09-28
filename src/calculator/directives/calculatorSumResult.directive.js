(function () {
	'use strict';

	angular
		.module('app.calculator')
		.directive('calculatorSumResult', calculatorSumResult);

		function calculatorSumResult() {
			return {
				restrict:  'E',
				templateUrl: 'src/calculator/directives/calculatorSumResult.directive.html',
				scope:{},
				replace: true, //remove o nome da diretiva no html: para isso encapsular todo o html da diretiva em uma div
				controller: 'calculatorSumResultController',
				controllerAs: 'vc'
			};
		}

})(); 