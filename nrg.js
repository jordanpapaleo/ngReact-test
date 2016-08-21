(function(window, document, angular, undefined) {
  'use strict';

  angular.module('nrg', [])
    .factory('ComponentFactory', [function() {
      return {
        render: function(component, element, scope, attrs) {

          // If you have name-spaced your components, you'll want to specify that here - or pass it in via an attribute etc
          React.renderComponent(window[component]({
            scope: scope,
            attrs: attrs
          }), element[0]);
        },

        unmount: function(element) {
          React.unmountComponentAtNode(element[0]);
        }
      }
    }])
    .directive('component', ['$controller', 'ComponentFactory', function($controller, ComponentFactory) {
      return {
        restrict: 'EA',
        controller: function($scope, $element, $attrs){
          return ($attrs.ctrl)
            ? $controller($attrs.ctrl, {$scope:$scope, $element:$element, $attrs:$attrs})
            : null;
        },
        scope: {
          ngModel: '='
        },
        link: function(scope, element, attrs) {
          // Collect the elements attrs in a nice usable object
          var attributes = {};
          angular.forEach(element[0].attributes, function(a) {
            attributes[a.name.replace('data-','')] = a.value;
          });

          // Render the component when the directive loads
          ComponentFactory.render(attrs.component, element, scope, attributes);

          // Watch the model and re-render the component
          scope.$watch('ngModel', function() {
            ComponentFactory.render(attrs.component, element, scope, attributes);
          }, true);

          // Unmount the component when the scope is destroyed
          scope.$on('$destroy', function () {
            ComponentFactory.unmount(element);
          });

          scope.$on('renderMe', function() {
            $timeout(function() {
              ComponentFactory.render(attrs.component, element, scope, attributes);
            });
          });
        }
      }
    }
  ]);
})(window, document, angular);
