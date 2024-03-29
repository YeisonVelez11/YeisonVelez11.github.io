'use strict';

/**
 *
 * @ngdoc module
 * @name proyectoAngularGenericoGulp
 * @module proyectoAngularGenericoGulp
 * @packageName ProyectoAngularGenericoGulp
 * @description
 * This is a sample module.
 *
 **/
angular.module('proyectoAngularGenericoGulp', []);


'use strict';

/**
 *
 * @ngdoc directive
 * @module proyectoAngularGenericoGulp
 * @name sampleElem
 * @restrict E
 * @description 
 * This is a sample directive.
 *
 * @example
    <example module="sampleElemExample" deps="" animate="false">
      <file name="index.html">
        <sample-elem></sample-elem>
      </file>
      <file name="main.js">
        angular.module('sampleElemExample', ['proyectoAngularGenericoGulp']);
      </file>
    </example>
 *
 **/
angular.module('proyectoAngularGenericoGulp').directive('sampleElem', function () {
  return {
    restrict: 'E',
    templateUrl: '/components/sample/sampleElem.html'
  };
});

'use strict';

/**
 *
 * @ngdoc filter
 * @module proyectoAngularGenericoGulp
 * @name sampleFilter
 * @description
 * This is a sample filter.
 *
 * @example
    <example module="sampleFilterExample" deps="" animate="false">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          <input ng-model="main.input" />
          {{main.input | sampleFilter}}
        </div>
      </file>
      <file name="main.js">
        angular.module('sampleFilterExample', ['proyectoAngularGenericoGulp']).controller('MainCtrl', function () {
          this.input = 'sample input';
        });
      </file>
    </example>
 *
 **/
angular.module('proyectoAngularGenericoGulp').filter('sampleFilter', function () {
  return function (input) {
    return input.toUpperCase();
  };
});

'use strict';

/**
 *
 * @ngdoc provider
 * @module proyectoAngularGenericoGulp
 * @name sampleServiceProvider
 * @description
 *
 * This provider allows you to configure {@link sampleService sampleService}.
 *
 **/
angular.module('proyectoAngularGenericoGulp').provider('sampleService', function () {
  var msg = 'Default message.';
  return {

    /**
     *
     * @ngdoc method
     * @name sampleServiceProvider#setMessaage
     * @param {String} message A message.
     * @description
     * Configure {@link sampleService sampleService} message.
     *
     **/
    setMessage: function (message) {
      msg = message;
    },

    /**
     *
     * @ngdoc service
     * @module proyectoAngularGenericoGulp
     * @name sampleService
     * @description
     *
     * Sample service. It returns the message.
     *
     * @example
        <example module="sampleServiceExample" deps="">
          <file name="index.html">
            <div ng-controller="MainCtrl as main">
              Message: {{main.message}}
            </div>
          </file>
          <file name="main.js">
            angular.module('sampleServiceExample', ['proyectoAngularGenericoGulp'])
              .config(function (sampleServiceProvider) {
                sampleServiceProvider.setMessage('Hello, AngularJS service!');
              })
              .controller('MainCtrl', function (sampleService) {
                this.message = sampleService.getMessage();
              });
          </file>
        </example>
     *
     **/
    $get: function () {
      return {
        /**
         * 
         * @ngdoc method
         * @name sampleService#get
         * @return {String} message
         * @description
         *
         * Get the message.
         **/
        getMessage: function () {
          return msg;
        }
      };
    }
  };
});

(function(module) {
try {
  module = angular.module('proyectoAngularGenericoGulp');
} catch (e) {
  module = angular.module('proyectoAngularGenericoGulp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/components/sample/sampleElem.html',
    '<div class="sample-awesome">\n' +
    '  Hello, AngularJS directive!\n' +
    '</div>\n' +
    '');
}]);
})();
