angular.module('app', ['app.calculator']);

angular.module('app').controller('AppController', AppController);

AppController.$inject = ['calculatorFieldsService'];

function AppController(calculatorFieldsService){
	calculatorFieldsService.init();
}