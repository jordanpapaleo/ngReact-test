(function(window, document, angular, undefined) {
  'use strict';

  angular.module('app', ['react'])

  angular
    .module('app')
    .controller('HelloController', HelloController)

    HelloController.$inject = []

    function HelloController () {
      this.person = { fname: 'Jordan', lname: 'Papaleo' }
      this.clickCheck = function (blar) {
        console.log('Controller clicked', blar)
      }
    }

  angular.module('app')
    .value('FormBuilder', FormBuilder)
    .directive('formBuilder', (reactDirective) => {
      return reactDirective(FormBuilder);
    })

})(window, document, angular);