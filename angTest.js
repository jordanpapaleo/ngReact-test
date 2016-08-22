(function(window, document, angular, undefined) {
  'use strict'

  angular.module('app', ['react'])

  angular
    .module('app')
    .controller('HelloController', HelloController)

    HelloController.$inject = []

    function HelloController () {
      const vm = this

      vm.person = { fname: 'Jordan', lname: 'Papaleo' }
      vm.fields = ['hay', 'bay', 'say']
      vm.props = {
        config: vm.person,
        cb: updateFields
      }

      function updateFields (blar) {
        console.log('Angular event fired')
        vm.fields = vm.fields.concat(blar)
      }
    }

  angular.module('app')
    .value('FormBuilder', FormBuilder)
    .directive('formBuilder', (reactDirective) => {
      return reactDirective(FormBuilder)
    })

})(window, document, angular)
