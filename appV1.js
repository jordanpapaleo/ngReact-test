angular.module('app', [])
  .service('PicsService', function($interval) {
    this.data = { counter: 0 };

    // $interval(
    //   () => this.data.counter += 1,
    //   Math.random() * 200 + 100
    // );
  })
  .factory('Pic', ($rootScope, PicsService) => {
    return React.createClass({
      render() {
        return React.createElement('h2', {}, "ReactJS is here! ", this.props.counter);
      }
    });
  })
  .factory('Timer', ($rootScope) => Timer)
  .directive('react', ($injector) => {
    return {
      template: '<div></div>',
      link: (scope, element, attrs) => {
        const component = $injector.get(attrs.react);
        const react = (counter) => ReactDOM.render(React.createElement(component, { counter }), element[0]);

        scope.$watch(
          attrs.counter,
          react
        );
      }
    }
  })
  .directive('pics', (PicsService) => {
    return {
      controller: ($scope) => {
        $scope.data = PicsService.data;
      },
      template: `
        <div>
          <h2>AngularJS is here! {{ data.counter }}</h2>
          <div class="inside" react="Timer" counter="data.counter" cb=""></div>
        </div>`
    };
  });

angular
  .bootstrap(document.getElementById('app1'), ['app']);

// angular
//   .bootstrap(document.getElementById('app2'), ['app']);
