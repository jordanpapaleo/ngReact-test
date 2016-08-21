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
    .value('Timer', Timer)
    .directive('timer', (reactDirective) => {
      return reactDirective(Timer);
    })

})(window, document, angular);
